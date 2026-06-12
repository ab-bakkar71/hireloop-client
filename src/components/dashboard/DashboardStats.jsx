import React from 'react';
import { Card } from "@heroui/react";
import { FileText, Users, Zap, CheckCircle2 } from "lucide-react";

const DashboardStats = () => {
    const stats = [
    {
      id: 1,
      label: "Total Job Posts",
      value: "48",
      icon: <FileText className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 2,
      label: "Total Applicants",
      value: "1,284",
      icon: <Users className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 3,
      label: "Active Jobs",
      value: "18",
      icon: <Zap className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 4,
      label: "Jobs Closed",
      value: "32",
      icon: <CheckCircle2 className="w-5 h-5 text-zinc-400" />,
    },
  ];
    return (
        <div className="w-full  p-6">
      {/* 4-Column Grid for Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
        {stats.map((stat) => (
          <Card 
            key={stat.id} 
            variant="flat" 
            className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] shadow-sm transition-all duration-200 hover:border-zinc-700"
          >
            {/* Note the use of Card.Content instead of CardBody for HeroUI v3 */}
            <Card.Content className="p-0 flex flex-col justify-between h-full w-full">
              
              {/* Top Section: Small Icon Box */}
              <div className="w-10 h-10 bg-zinc-800/40 border border-zinc-700/30 rounded-xl flex items-center justify-center mb-6">
                {stat.icon}
              </div>

              {/* Bottom Section: Label & Numeric Value */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium tracking-wide">
                  {stat.label}
                </span>
                <span className="text-3xl font-semibold text-white tracking-tight">
                  {stat.value}
                </span>
              </div>

            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
    );
};

export default DashboardStats;