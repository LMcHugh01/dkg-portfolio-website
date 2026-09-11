import { useEffect, useRef } from "react";

const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

// eased 0 -> 1 transition across [a, b] — used for fades/rises that should
// happen once and stay, with a soft shoulder instead of a hard cutoff
const smoothstep = (p, a, b) => {
  const t = clamp((p - a) / (b - a || 1));
  return t * t * (3 - 2 * t);
};

// rise -> peak -> fall across [a, b] — used for the cloud layers, so each
// one builds in, peaks, and clears rather than just switching on
const pulse = (p, a, b) => {
  const t = clamp((p - a) / (b - a || 1));
  return Math.sin(Math.PI * t);
};

// eased 0 -> 1 as an element's own top rises from the lower part of the
// viewport toward its settled position — ties reveal timing to where THAT
// element actually is, not a guessed global scroll percentage
const revealProgress = (el, vh) => {
  const r = el.getBoundingClientRect();
  const t = clamp((vh * 0.78 - r.top) / (vh * 0.78 - vh * 0.3));
  return t * t * (3 - 2 * t);
};

/**
 * Drives the entire space-to-land background from one smoothed scroll
 * progress value (0-1 across the whole page). Attach the returned ref to
 * the page's root element; layers are found via [data-layer], content
 * drift via [data-drift], and post-cloud reveals via [data-reveal].
 */
export function useDescentEngine() {
  const rootRef = useRef(null);
  const layersRef = useRef({});
  const driftersRef = useRef([]);
  const revealsRef = useRef([]);
  const cloudSyncRef = useRef([]);
  const pRef = useRef(0);
  const rafRef = useRef(null);
  const ticksRef = useRef(0);
  const lastTicksRef = useRef(-1);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll("[data-layer]").forEach((el) => {
      layersRef.current[el.dataset.layer] = el;
    });
    driftersRef.current = Array.from(root.querySelectorAll("[data-drift]"));
    revealsRef.current = Array.from(root.querySelectorAll("[data-reveal]"));
    cloudSyncRef.current = Array.from(root.querySelectorAll("[data-cloud-sync]"));

    const progressFill = root.querySelector("[data-progress-fill]");
    const progressLabel = root.querySelector("[data-progress-label]");

    const target = () => {
      const span = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return clamp(window.scrollY / span);
    };

    const set = (key, css) => {
      const el = layersRef.current[key];
      if (el) Object.assign(el.style, css);
    };

    const apply = (snap) => {
      const t = target();
      pRef.current = snap ? t : pRef.current + (t - pRef.current) * 0.085;
      const p = pRef.current;

      // space zone recedes as the atmosphere takes over
      set("space", { opacity: String(1 - smoothstep(p, 0.26, 0.48)) });
      set("nebulaA", {
        opacity: String((1 - smoothstep(p, 0.22, 0.44)) * 0.9),
        transform: `translate3d(0, ${-p * 22}vh, 0)`,
      });
      set("nebulaB", {
        opacity: String((1 - smoothstep(p, 0.24, 0.46)) * 0.9),
        transform: `translate3d(0, ${-p * 34}vh, 0)`,
      });

      const starOut = 1 - smoothstep(p, 0.22, 0.4);
      set("starFar", { opacity: String(starOut * 0.85), transform: `translate3d(0, ${-p * 14}vh, 0)` });
      set("starMid", { opacity: String(starOut * 0.9), transform: `translate3d(0, ${-p * 32}vh, 0)` });
      set("starNear", { opacity: String(starOut), transform: `translate3d(0, ${-p * 60}vh, 0)` });

      // planet recedes and drifts up/right — slower than the page itself
      set("planet", {
        opacity: String(1 - smoothstep(p, 0.08, 0.26)),
        transform: `translate3d(${p * 60}px, ${-p * 220}px, 0) scale(${1 + p * 0.35})`,
      });

      // sky arrives as space fades
      set("sky", { opacity: String(smoothstep(p, 0.3, 0.54)) });

      // four cloud layers, each with its own window and a rise-peak-fall curve
      set("cloud1", {
        opacity: String(pulse(p, 0.22, 0.48) * 0.55),
        transform: `translate3d(0, ${26 - p * 60}vh, 0) scale(${1 + p * 0.5})`,
      });
      set("cloud2", {
        opacity: String(pulse(p, 0.26, 0.52) * 0.8),
        transform: `translate3d(0, ${34 - p * 84}vh, 0) scale(${1.05 + p * 0.7})`,
      });
      const cloud3Opacity = pulse(p, 0.3, 0.56);
      set("cloud3", {
        opacity: String(cloud3Opacity),
        transform: `scale(${0.9 + p * 0.9})`,
      });
      set("cloud4", {
        opacity: String(pulse(p, 0.34, 0.62) * 0.65),
        transform: `translate3d(0, ${48 - p * 110}vh, 0) scale(${1.1 + p * 0.5})`,
      });

      // content that should appear only once the cloud is nearly at its
      // peak density, not for its entire rise — derived from how dense
      // the cloud actually is (cloud3Opacity), not raw scroll position
      const skillsRaw = clamp((cloud3Opacity - 0.7) / 0.3);
      const skillsOpacity = skillsRaw * skillsRaw * (3 - 2 * skillsRaw);
      cloudSyncRef.current.forEach((el) => {
        el.style.opacity = String(skillsOpacity);
        el.style.transform = `translate3d(0, ${(1 - skillsOpacity) * 20}px, 0)`;
      });

      // three mountain ranges rise from below as the cloud line clears
      const mf = smoothstep(p, 0.46, 0.8);
      const mm = smoothstep(p, 0.5, 0.86);
      const mn = smoothstep(p, 0.54, 0.98);
      set("mFar", { opacity: String(mf), transform: `translate3d(0, ${58 - mf * 58}vh, 0)` });
      set("mMid", { opacity: String(mm), transform: `translate3d(0, ${52 - mm * 52}vh, 0)` });
      set("mNear", { opacity: String(mn), transform: `translate3d(0, ${62 - mn * 62}vh, 0)` });

      set("grain", { opacity: String(0.42 - smoothstep(p, 0.4, 0.7) * 0.22) });

      // content reveal + ambient drift, combined into one pass per element
      // so the two effects add together instead of one overwriting the other
      const vh = window.innerHeight || 800;
      const movers = new Set([...driftersRef.current, ...revealsRef.current]);
      movers.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;

        let translateY = 0;

        if (el.dataset.reveal !== undefined) {
          const rt = revealProgress(el, vh);
          el.style.opacity = String(rt);
          translateY += (1 - rt) * 28;
        }

        if (el.dataset.drift !== undefined) {
          const d = (r.top + r.height / 2 - vh / 2) / vh;
          translateY += d * vh * parseFloat(el.dataset.drift);
        }

        el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });

      if (progressFill) progressFill.style.height = `${(p * 100).toFixed(1)}%`;
      if (progressLabel) progressLabel.textContent = `${String(Math.round(p * 100)).padStart(2, "0")}%`;
    };

    const onScroll = () => apply(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    pRef.current = target();
    apply(false);

    const frame = () => {
      ticksRef.current++;
      rafRef.current = requestAnimationFrame(frame);
      apply(false);
    };
    rafRef.current = requestAnimationFrame(frame);

    // stall detector: if the rAF loop ever gets throttled (background tab,
    // low-power mode), this catches it and forces a correction rather than
    // leaving the environment frozen mid-transition
    const poll = setInterval(() => {
      const stalled = ticksRef.current === lastTicksRef.current;
      lastTicksRef.current = ticksRef.current;
      if (!stalled) return;
      revealsRef.current.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      cloudSyncRef.current.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      const t = target();
      if (Math.abs(t - pRef.current) > 0.001) {
        pRef.current = t;
        apply(true);
      }
    }, 120);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(poll);
    };
  }, []);

  return rootRef;
}