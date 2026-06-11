import React from 'react';
// standard Next.js image optimization (optional if not using as background directly)
import Image from 'next/image'; 
import { Button, Card } from "@heroui/react"; 
import { Briefcase, Building2, Users2, Star, Search, MapPin } from "lucide-react";

export default function StatsHero() {
  const stats = [
    {
      id: 1,
      value: "50K",
      label: "Active Jobs",
      icon: <Briefcase className="w-5 h-5 text-gray-400" />,
    },
    {
      id: 2,
      value: "12K",
      label: "Companies",
      icon: <Building2 className="w-5 h-5 text-gray-400" />,
    },
    {
      id: 3,
      value: "2M",
      label: "Job Seekers",
      icon: <Users2 className="w-5 h-5 text-gray-400" />,
    },
    {
      id: 4,
      value: "97%",
      label: "Satisfaction Rate",
      icon: <Star className="w-5 h-5 text-gray-400" />,
    },
  ];

  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative w-full min-h-[600px] bg-black text-white flex flex-col justify-end items-center px-4 pb-16 overflow-hidden">
      
      {/* Globe Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{ 
          backgroundImage: `url('/images/globe.png')`, 
        }}
      />
      
      {/* Optional: Atmospheric Top Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-12">

        <section className="relative w-full mb-120 text-white flex flex-col justify-center items-center px-4 pt-24 pb-12 overflow-hidden">
      
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
              className="px-4 py-1.5 rounded-full text-xs text-zinc-300  border border-zinc-800/60 hover:bg-zinc-800 hover:text-white transition-all duration-200"
            >
              {position}
            </button>
          ))}
        </div>

      </div>

      {/* Bottom atmospheric glow that blends nicely into your globe image component below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-blue-500/10 blur-[100px] pointer-events-none" />
    </section>
        
        {/* Header Text */}
        <div className="text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-snug text-gray-200">
            Assisting over <span className="font-semibold text-white">15,000 job seekers</span> <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Grid - Now Transparent & Glossy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {stats.map((stat) => (
            <Card 
              key={stat.id} 
              variant="flat" /* Uses a flatter visual style as base */
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <Card.Content className="flex flex-col justify-between items-start h-36 p-0 gap-y-4">
                {/* Gravity-style Icon */}
                <div className="p-1">
                  {stat.icon}
                </div>
                
                {/* Metric and Label */}
                <div>
                  <span className="block text-4xl font-semibold tracking-tight text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-sm text-zinc-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}