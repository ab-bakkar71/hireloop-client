import React from 'react';
import { Card } from "@heroui/react";
import { 
  Search, 
  TrendingUp, 
  Building2, 
  Bookmark, 
  MousePointerClick, 
  FileText, 
  Hexagon, 
  ArrowUpRight 
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <Search className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 2,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <TrendingUp className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 3,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <Building2 className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 4,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <Bookmark className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 5,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: <MousePointerClick className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FileText className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 7,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <Hexagon className="w-5 h-5 text-[#D470FF]" />,
    },
    {
      id: 8,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <ArrowUpRight className="w-5 h-5 text-[#D470FF]" />,
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Top Mini Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#5856D6] inline-block"></span>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
            FEATURES JOB
          </span>
          <span className="w-1.5 h-1.5 bg-[#5856D6] inline-block"></span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-center mb-16 max-w-2xl leading-tight">
          Everything you need <br /> to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-full">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              
              {/* Glossy Icon Container */}
              <Card 
                variant="flat" 
                className="bg-zinc-900/40 border border-zinc-800/60 shadow-inner rounded-xl p-3 shrink-0 flex items-center justify-center w-12 h-12"
              >
                <Card.Content className="p-0 flex items-center justify-center">
                  {feature.icon}
                </Card.Content>
              </Card>

              {/* Text Block */}
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="text-sm font-semibold text-zinc-100 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}