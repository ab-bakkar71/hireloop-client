import React from 'react';
// HeroUI v3 input and button system
import { Input, Button } from "@heroui/react"; 
import { Search, MapPin, Briefcase } from "lucide-react";

export default function JobHero() {
  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative w-full min-h-[80vh]  text-white flex flex-col justify-center items-center px-4 pt-24 pb-12 overflow-hidden">
      
      {/* Subtle Star Particles or Top Ambient Light (Optional CSS effects) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8">
        
        {/* Top Badge (50,000+ New Jobs) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.03)]">
          <Briefcase className="w-4 h-4 text-amber-500 fill-amber-500/20" />
          <span className="text-xs tracking-wider font-mono text-zinc-400">
            <span className="text-white font-bold">50,000+</span> NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300 max-w-3xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-3xl mt-4 p-2 bg-[#0D0D0D]/90 border border-zinc-800/80 backdrop-blur-xl rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2">
          
          {/* Job Title Input */}
          <div className="flex items-center flex-1 w-full px-3 gap-2">
            <Search className="w-5 h-5 text-zinc-500 shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company"
              className="w-full bg-transparent py-3 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Divider Line (Only visible on desktop) */}
          <div className="hidden sm:block h-8 w-[1px] bg-zinc-800" />

          {/* Location Input */}
          <div className="flex items-center flex-1 w-full px-3 gap-2">
            <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote"
              className="w-full bg-transparent py-3 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <Button 
            isIconOnly 
            size="lg" 
            className="w-full sm:w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shrink-0 shadow-lg shadow-blue-600/20 transition-all duration-200"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-sm">
          <span className="text-zinc-500">Trending Position:</span>
          {trendingPositions.map((position, index) => (
            <button 
              key={index} 
              className="px-4 py-1.5 rounded-full text-xs text-zinc-300 bg-zinc-900/50 border border-zinc-800/60 hover:bg-zinc-800 hover:text-white transition-all duration-200"
            >
              {position}
            </button>
          ))}
        </div>

      </div>

      {/* Bottom atmospheric glow that blends nicely into your globe image component below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-blue-500/10 blur-[100px] pointer-events-none" />
    </section>
  );
}