import NeighbrImg from "../assets/project-screenshots/Neighbr.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";
import fleaRdamImg from "../assets/project-screenshots/fleaRdam.png";

import pkCover from "../assets/project-screenshots/poker-knights/00-poker-knights.png"
import pkHero from "../assets/project-screenshots/poker-knights/01-profile-hero.png";
import pkProfileClubs from "../assets/project-screenshots/poker-knights/02-profile-clubs.png";
import pkProfileBooks from "../assets/project-screenshots/poker-knights/03-profile-books.png";
import pkClub from "../assets/project-screenshots/poker-knights/04-club.png";
import pkStandings from "../assets/project-screenshots/poker-knights/05-standings.png";
import pkStandingsLeaderboard from "../assets/project-screenshots/poker-knights/06-standings-leaderboard.png";
import pkSettlements from "../assets/project-screenshots/poker-knights/07-settlements.png";
import pkRecords from "../assets/project-screenshots/poker-knights/08-records.png";
import pkRecordsDuels from "../assets/project-screenshots/poker-knights/09-records-duels.png";
import pkGame from "../assets/project-screenshots/poker-knights/10-game.png";
import pkGameSettlements from "../assets/project-screenshots/poker-knights/11-game-settlements.png";
import pkPlayer from "../assets/project-screenshots/poker-knights/12-player.png";
import pkPlayerResume from "../assets/project-screenshots/poker-knights/13-player-resume.png";

import pkmCover from "../assets/project-screenshots/poker-knights-mobile/00-poker-knights.png";
import pkmProfileHero from "../assets/project-screenshots/poker-knights-mobile/01-profile-hero.png";
import pkmProfileClubs from "../assets/project-screenshots/poker-knights-mobile/02-profile-clubs.png";
import pkmProfileBooks from "../assets/project-screenshots/poker-knights-mobile/03-profile-books.png";
import pkmClub from "../assets/project-screenshots/poker-knights-mobile/04-club.png";
import pkmStandings from "../assets/project-screenshots/poker-knights-mobile/05-standings.png";
import pkmStandingsLeaderboard from "../assets/project-screenshots/poker-knights-mobile/06-standings-leaderboard.png";
import pkmSettlements from "../assets/project-screenshots/poker-knights-mobile/07-settlements.png";
import pkmRecords from "../assets/project-screenshots/poker-knights-mobile/08-records.png";
import pkmRecordsDuels from "../assets/project-screenshots/poker-knights-mobile/09-records-duels.png";
import pkmGame from "../assets/project-screenshots/poker-knights-mobile/10-game.png";
import pkmGameSettlements from "../assets/project-screenshots/poker-knights-mobile/11-game-settlements.png";
import pkmPlayer from "../assets/project-screenshots/poker-knights-mobile/12-player.png";
import pkmPlayerResume from "../assets/project-screenshots/poker-knights-mobile/13-player-resume.png";

import rrCover from "../assets/project-screenshots/reel-ratings/00-reel-ratings.png"
import rrHomePeople from "../assets/project-screenshots/reel-ratings/01-home-people.png";
import rrHomeTop from "../assets/project-screenshots/reel-ratings/02-home-top.png";
import rrWatchlist from "../assets/project-screenshots/reel-ratings/03-watchlist.png";
import rrDiary from "../assets/project-screenshots/reel-ratings/04-diary.png";
import rrDiaryRecap from "../assets/project-screenshots/reel-ratings/05-diary-recap.png";
import rrMovie from "../assets/project-screenshots/reel-ratings/06-movie.png";
import rrMovieCrew from "../assets/project-screenshots/reel-ratings/07-movie-crew.png";
import rrMovieCast from "../assets/project-screenshots/reel-ratings/08-movie-cast.png";
import rrMovieSuggest from "../assets/project-screenshots/reel-ratings/09-movie-suggest.png";

import rrmCover from "../assets/project-screenshots/reel-ratings-mobile/00-reel-ratings.png"
import rrmHomePeople from "../assets/project-screenshots/reel-ratings-mobile/01-home-people.png";
import rrmHomeTop from "../assets/project-screenshots/reel-ratings-mobile/02-home-top.png";
import rrmWatchlist from "../assets/project-screenshots/reel-ratings-mobile/03-watchlist.png";
import rrmDiary from "../assets/project-screenshots/reel-ratings-mobile/04-diary.png";
import rrmDiaryRecap from "../assets/project-screenshots/reel-ratings-mobile/05-diary-recap.png";
import rrmMovie from "../assets/project-screenshots/reel-ratings-mobile/06-movie.png";
import rrmMovieCrew from "../assets/project-screenshots/reel-ratings-mobile/07-movie-crew.png";
import rrmMovieCast from "../assets/project-screenshots/reel-ratings-mobile/08-movie-cast.png";
import rrmMovieSuggest from "../assets/project-screenshots/reel-ratings-mobile/09-movie-suggest.png";


import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { SiStripe } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiSupabase } from "react-icons/si";

export const projectData = {
  fleaRdam: {
    name: "fleaRdam",
    images: [fleaRdamImg],
    projectType: "Client Project",
    description:
      "fleaRdam is Rotterdam's first urban flea market. This full-stack website handles everything from event listings and ticket purchases to stall applications and vendor payments. Built with Next.js 15 and Sanity CMS, it features a complete stall application flow with admin review, Stripe payments, and automated emails via Resend.",
    features: [
      {
        title: "Stall Application Flow",
        description:
          "Vendors apply for a market stall through a guided form, with submissions routed to an admin review queue before approval.",
      },
      {
        title: "Stripe-Powered Payments",
        description: "Approved vendors pay their stall fee through an integrated Stripe checkout.",
      },
      {
        title: "Automated Email Notifications",
        description:
          "Resend handles transactional emails at every step, from application received to approval and payment confirmation.",
      },
      {
        title: "Sanity-Powered Content",
        description:
          "Event listings and market info are managed through Sanity CMS, so content updates don't require touching code.",
      },
    ],
    languages: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, category: "styling" },
      { name: "Next.js", icon: <SiNextdotjs />, category: "framework" },
      { name: "Sanity", icon: <SiSanity />, category: "cms" },
      { name: "Stripe", icon: <SiStripe />, category: "payments" },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://fleardam.com",
    source: null,
  },
  "Poker Knights": {
    name: "Poker Knights",
    images: [
      pkCover,
      pkHero,
      pkProfileClubs,
      pkProfileBooks,
      pkClub,
      pkStandings,
      pkStandingsLeaderboard,
      pkSettlements,
      pkRecords,
      pkRecordsDuels,
      pkGame,
      pkGameSettlements,
      pkPlayer,
      pkPlayerResume,
    ],
    mobileImages: [
      pkmCover,
      pkmProfileHero,
      pkmProfileClubs,
      pkmProfileBooks,
      pkmClub,
      pkmStandings,
      pkmStandingsLeaderboard,
      pkmSettlements,
      pkmRecords,
      pkmRecordsDuels,
      pkmGame,
      pkmGameSettlements,
      pkmPlayer,
      pkmPlayerResume,
    ],
    projectType: "Personal Project",
    description:
      "Poker Knights is a multi-group poker home game tracker PWA. It handles live game tracking with real-time buy-ins and multi-table support, automated settlement calculations, leaderboards, and push notifications. Built with React and Supabase, it features full RLS-secured multi-tenant groups, tiered subscriptions, and an installable offline-capable PWA experience.",
    features: [
      {
        title: "Live Game Tracking",
        description:
          "Buy-ins, table balances, and player stacks update in real time across every device at the table.",
      },
      {
        title: "Automated Settlement",
        description:
          "At the end of a session, the app calculates who owes who, removing the after-game math.",
      },
      {
        title: "Multi-Tenant Groups",
        description:
          "Each poker group is fully isolated with Supabase Row Level Security, so players only ever see their own group's data.",
      },
      {
        title: "Installable, Offline-Capable PWA",
        description: "Works like a native app, with push notifications and offline support for game night.",
      },
    ],
    languages: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Supabase", icon: <SiSupabase />, category: "data + auth" },
      { name: "Netlify", icon: <SiNetlify />, category: "hosting" },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://poker-knights.netlify.app",
    source: null,
  },
  ReelRatings: {
    name: "ReelRatings",
    images: [
      rrCover,
      rrHomePeople,
      rrHomeTop,
      rrMovie,
      rrMovieCast,
      rrMovieCrew,
      rrMovieSuggest,
      rrWatchlist,
      rrDiary,
      rrDiaryRecap,
    ],
    mobileImages: [
      rrmCover,
      rrmHomePeople,
      rrmHomeTop,
      rrmMovie,
      rrmMovieCast,
      rrmMovieCrew,
      rrmMovieSuggest,
      rrmWatchlist,
      rrmDiary,
      rrmDiaryRecap,
    ],
    projectType: "Personal Project",
    description:
      "ReelRatings is a modern web application for browsing, rating, and discovering movies. Users can explore films by genre, rate and review them, and create personalized profiles with favorites and watchlists. The platform features a sleek UI with custom branding, dynamic backgrounds, and a transparent navbar. Future plans include AI-powered recommendations, trailer previews, and social features for a more interactive experience.",
    features: [
      {
        title: "Genre-Based Discovery",
        description: "Browse and filter films by genre.",
      },
      {
        title: "Ratings & Reviews",
        description: "Rate and review movies, building a personal watch history.",
      },
      {
        title: "Favorites & Watchlists",
        description: "Save films to a watchlist or favorites collection tied to a personal profile.",
      },
      {
        title: "Custom Branding & Dynamic UI",
        description: "A distinct visual identity with dynamic backgrounds and a transparent, scroll-aware navbar.",
      },
    ],
    languages: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, category: "styling" },
      { name: "Supabase", icon: <RiSupabaseFill />, category: "data + auth" },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://reelratings.netlify.app",
    source: null,
  },
  Neighbr: {
    name: "Neighbr",
    images: [NeighbrImg],
    projectType: "Personal Project",
    description:
      "Neighbr is a community-driven platform that connects users with local service providers for tasks and projects. Users can browse, post, and assign jobs across categories like home services, fitness, tutoring, and more. Built with React and TailwindCSS, the app focuses on a clean, responsive interface for easy navigation. Planned features include user profiles with ratings, job tracking, and personalized recommendations for finding the right service providers nearby.",
    features: [
      {
        title: "Category-Based Job Browsing",
        description: "Find local services across categories like home services, fitness, and tutoring.",
      },
      {
        title: "Post & Assign Jobs",
        description: "Post a job listing and assign it directly to a chosen provider.",
      },
      {
        title: "Responsive, Category-Driven UI",
        description: "A clean interface built around quick category navigation on any device.",
      },
    ],
    languages: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, category: "styling" },
      { name: "NodeJS", icon: <FaNodeJs />, category: "runtime" },
      { name: "Express", icon: <SiExpress />, category: "backend" },
      { name: "MongoDB", icon: <SiMongodb />, category: "database" },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://neighbr.netlify.app",
    source: null,
  },
  "DKG E-Commerce Store": {
    name: "DKG E-Commerce Store",
    images: [DrunkGamesImg],
    projectType: "Client Project",
    description:
      "Drunk Games is a personal e-commerce project that sells unique and entertaining drinking games. The platform is built with React and TailwindCSS, featuring a clean and responsive design optimized for mobile and desktop shopping experiences. It includes product listings, a shopping cart, and checkout flow, with future plans to expand into user reviews, bundle offers, and social sharing features.",
    features: [
      {
        title: "Product Catalog",
        description: "Browse a catalog of drinking games with detail pages for each product.",
      },
      {
        title: "Shopping Cart & Checkout",
        description: "A full add-to-cart and checkout flow for completing purchases.",
      },
      {
        title: "Responsive Storefront",
        description: "Layout optimized for both mobile and desktop shopping.",
      },
    ],
    languages: [
      { name: "React", icon: <FaReact />, category: "frontend" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, category: "styling" },
      { name: "Supabase", icon: <RiSupabaseFill />, category: "data + auth" },
    ],
    startYear: 2023,
    endYear: "Present",
    link: "https://drunkknightgames.netlify.app/",
    source: null,
  },
};