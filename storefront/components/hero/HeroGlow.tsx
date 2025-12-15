import React from "react";
import HeroNeon from "@/components/HeroNeon";

/**
 * HeroGlow
 * Wraps the existing neon/glow homepage hero so it can be showcased inside /heroes alongside other variants.
 */
const HeroGlow: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <HeroNeon />
    </div>
  );
};

export default HeroGlow;
