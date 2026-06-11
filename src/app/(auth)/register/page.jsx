'use client'

import React, { useState } from 'react';
import { Card, Button } from "@heroui/react";
import { User, Mail, Image as ImageIcon, Briefcase, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-4 py-12 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D470FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Glassmorphic Register Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
        
        {/* Brand Logo / Name */}
        <div className="text-center mb-6">
          <Link href="/" className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            HIRE<span className="text-blue-500">LOOP</span>
          </Link>
          <p className="text-zinc-400 text-sm mt-1 font-light">
            Create your account to start your journey.
          </p>
        </div>

        <Card 
          variant="flat"
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <Card.Content className="p-0 flex flex-col gap-5">
            
            <div>
              <h1 className="text-xl font-medium tracking-tight text-zinc-100">Get Started</h1>
              <p className="text-xs text-zinc-400 mt-1">Join thousands of professionals worldwide.</p>
            </div>

            {/* Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-400 font-medium tracking-wide">Full Name</label>
              <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                <User className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-400 font-medium tracking-wide">Email Address</label>
              <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Image URL Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-400 font-medium tracking-wide">Profile Image URL</label>
              <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                <ImageIcon className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                <input 
                  type="url" 
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Role Dropdown Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-400 font-medium tracking-wide">I want to join as a</label>
              <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                <Briefcase className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                <select 
                  className="w-full bg-transparent py-2.5 text-sm text-zinc-400 focus:text-white placeholder-zinc-600 focus:outline-none cursor-pointer appearance-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="bg-zinc-950 text-zinc-600">Select your role</option>
                  <option value="jobseeker" className="bg-zinc-950 text-white">Job Seeker (Looking for opportunities)</option>
                  <option value="employer" className="bg-zinc-950 text-white">Employer (Hiring top talent)</option>
                </select>
              </div>
            </div>

            {/* Grid Layout for Password & Confirm Password on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Password Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium tracking-wide">Password</label>
                <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                  <Lock className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium tracking-wide">Confirm Password</label>
                <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                  <Lock className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Terms and Conditions Note */}
            <p className="text-[11px] text-zinc-500 leading-normal">
              By registering, you agree to our <Link href="#" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </p>

            {/* Register Button */}
            <Button 
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2 transition-all duration-200 mt-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Sign in alternative link */}
            <p className="text-center text-xs text-zinc-400 mt-1">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Sign In
              </Link>
            </p>

          </Card.Content>
        </Card>

      </div>
    </section>
  );
}