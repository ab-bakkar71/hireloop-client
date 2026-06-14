"use client"

import React, { useState } from 'react';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import { Building, Globe, LocationEditIcon, Pencil, SquarePlus, Users } from 'lucide-react';
import { CircleInfo } from '@gravity-ui/icons';

export default function MyCompanyPage() {

  const [company, setCompany] = useState("");

  // স্ট্যাটাস ব্যাজের ডাইনামিক কালার এবং স্টাইল ডিটারমাইন করার হেল্পার ফাংশন
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
      case 'rejected':
        return 'bg-rose-500/10 border-rose-500/20 text-rose-400';
      case 'pending':
      default:
        return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-8 lg:p-12 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Ambience Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D470FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl relative z-10 flex flex-col gap-6">
        
        {/* ================= CASE 1: NO COMPANY REGISTERED ================= */}
        {!company ? (
          <div className="w-full bg-[#161616] border border-zinc-800/80 rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-6 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500">
              <Building className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2 max-w-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 tracking-tight">No Company Registered Yet</h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                To start posting jobs and hosting talent on HireLoop, you must register your legal entity or firm specifications first.
              </p>
            </div>
            {/* আপনার তৈরি করা নতুন কোম্পানি ফর্ম রাউটে নিয়ে যাওয়ার বাটন */}
            <Link
              href="/dashboard/recruiter/company/new"
              className="px-6 py-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl flex items-center gap-2 transition-all"
            >
              <SquarePlus className="w-4 h-4" />
              Register Company
            </Link>
          </div>
        ) : (
          
          // ================= CASE 2: COMPANY DETAILED DASHBOARD VIEW =================
          <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Top Action Header */}
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-5">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">My Company Profile</h1>
                <p className="text-xs text-zinc-500 mt-0.5">Manage and monitor your business entity presence info.</p>
              </div>
              
              {/* কোম্পানি ইনফরমেশন এডিট বাটন */}
              <Button 
                as={Link}
                href="/dashboard/recruiter/company/edit" // আপনার এডিট পেজের রুট পাথ দিন
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
              >
                <Pencil className="w-3.5 h-3.5" />
                Edit Profile
              </Button>
            </div>

            {/* Core Overview Card */}
            <Card variant="flat" className="bg-[#161616] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
              <Card.Content className="p-0 flex flex-col sm:flex-row items-start gap-6 w-full">
                
                {/* Company Cloud Logo Preview */}
                <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                  <img 
                    src={company.logoUrl} 
                    alt={`${company.name} logo`} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Main Identity and Status Block */}
                <div className="flex flex-col gap-2.5 flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                      {company.name}
                    </h2>
                    
                    {/* Dynamic Status Badge (Pending / Approved / Rejected) */}
                    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${getStatusBadge(company.status)}`}>
                      {company.status}
                    </span>
                  </div>

                  {/* Meta Specifications Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-2">
                    <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <CircleInfo className="w-4 h-4 text-zinc-600 shrink-0" />
                      <span>Industry: <b className="text-zinc-300 font-medium">{company.industry}</b></span>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <Globe className="w-4 h-4 text-zinc-600 shrink-0" />
                      <a href={company.website} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                        {company.website.replace("https://", "")}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <LocationEditIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                      <span>Location: <b className="text-zinc-300 font-medium">{company.location}</b></span>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <Users className="w-4 h-4 text-zinc-600 shrink-0" />
                      <span>Scale: <b className="text-zinc-300 font-medium">{company.employeeCount}</b></span>
                    </div>
                  </div>
                </div>

              </Card.Content>

              {/* Company Long Description Section */}
              <div className="border-t border-zinc-800/60 pt-5 mt-2 flex flex-col gap-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">About Company</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {company.description}
                </p>
              </div>

              {/* Admin Approval Restriction Banner Notice */}
              {company.status === "pending" && (
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 flex items-start gap-3 mt-2">
                  <span className="text-amber-500 text-sm mt-0.5">⚠️</span>
                  <p className="text-xs text-amber-400/80 leading-normal font-light">
                    <b>Notice:</b> Your company details have been recorded and are currently awaiting system admin verification. You will be permitted to push your open listings to the public board as soon as approval is confirmed.
                  </p>
                </div>
              )}
            </Card>

          </div>
        )}

      </div>
    </div>
  );
}