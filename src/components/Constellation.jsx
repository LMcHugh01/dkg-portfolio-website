import React, { useRef, useState } from "react";
import "../style/Constellation.css";

const STARS = [
  { id: 1, x: 18, y: 22 },
  { id: 2, x: 52, y: 12 },
  { id: 3, x: 80, y: 28 },
  { id: 4, x: 34, y: 42 },
  { id: 5, x: 64, y: 50 },
  { id: 6, x: 14, y: 68 },
  { id: 7, x: 48, y: 78 },
  { id: 8, x: 84, y: 64 },
  { id: 9, x: 68, y: 22 },
];

const LINKS = [
  [1, 2],
  [2, 9],
  [9, 3],
  [1, 4],
  [4, 5],
  [2, 5],
  [4, 6],
  [5, 7],
  [7, 8],
  [3, 5],
];

const STAR_MAP = Object.fromEntries(STARS.map((s) => [s.id, s]));

function Constellation() {
  const [activeStar, setActiveStar] = useState(null);
  const [streaks, setStreaks] = useState([]);
  const nextId = useRef(0);

  const handleClick = (star) => {
    const id = nextId.current++;
    const angle = Math.random() * Math.PI * 2;
    const distance = 45 + Math.random() * 35;
    const x2 = Math.min(96, Math.max(4, star.x + Math.cos(angle) * distance));
    const y2 = Math.min(96, Math.max(4, star.y + Math.sin(angle) * distance));

    setStreaks((prev) => [...prev, { id, x1: star.x, y1: star.y, x2, y2 }]);
    setTimeout(() => {
      setStreaks((prev) => prev.filter((s) => s.id !== id));
    }, 900);
  };

  return (
    <div className="constellation">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="constellation-lines">
        {LINKS.map(([a, b], i) => {
          const starA = STAR_MAP[a];
          const starB = STAR_MAP[b];
          const highlighted = activeStar === a || activeStar === b;
          return (
            <line
              key={i}
              x1={starA.x}
              y1={starA.y}
              x2={starB.x}
              y2={starB.y}
              className={`constellation-line ${highlighted ? "is-active" : ""}`}
            />
          );
        })}
      </svg>

      {streaks.map((s) => (
        <span
          key={s.id}
          className="constellation-shooting-star"
          style={{
            "--x1": `${s.x1}%`,
            "--y1": `${s.y1}%`,
            "--x2": `${s.x2}%`,
            "--y2": `${s.y2}%`,
          }}
        />
      ))}

      {STARS.map((star) => (
        <button
          key={star.id}
          type="button"
          aria-label="star"
          className={`constellation-star ${activeStar === star.id ? "is-active" : ""}`}
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          onMouseEnter={() => setActiveStar(star.id)}
          onMouseLeave={() => setActiveStar((cur) => (cur === star.id ? null : cur))}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
}

export default Constellation;