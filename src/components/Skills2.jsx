"use client";
import React, { useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud.jsx";

import reelRatingsLogo from "../assets/project-logos/logo-2 - Copy.png";
import recipeXLogo from "../assets/project-logos/recipeX-icon.png";


// Skills array with src, name, description
const skills = [
  { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
  { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
    { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
  { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
   { src: reelRatingsLogo, name: "ReelRatings", description: "Movie Website." },
  { src: recipeXLogo, name: "RecipeX", description: "Online Recipe Cook Book" },
];

export default function Skills2() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="flex items-start gap-8 p-4 text-white">
      {/* Icon cloud keeps rotating; selecting an icon shows info */}
      <div className="relative w-[600px] h-[600px] overflow-hidden">
        <IconCloud
          icons={skills.map((skill) => ({ src: skill.src }))}
          onSelect={(icon) => {
            const skill = skills.find((s) => s.src === icon.src);
            setSelectedSkill(skill);
          }}
          iconSize={80} // optional prop to make icons bigger in the component
        />
      </div>

      {/* Display selected skill info */}
      {selectedSkill && (
        <div className="w-64 p-4 bg-gray-900 rounded-lg">
          <h3 className="text-lg font-bold">{selectedSkill.name}</h3>
          <p className="text-sm">{selectedSkill.description}</p>
        </div>
      )}
    </div>
  );
}
