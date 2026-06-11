"use client"
import React, { useState } from 'react';
import { Card, Button, Input, Checkbox } from "@heroui/react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D470FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Glassmorphic Login Container */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        
        {/* Brand Logo / Name */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            HIRE<span className="text-blue-500">LOOP</span>
          </Link>
          <p className="text-zinc-400 text-sm mt-2 font-light">
            Welcome back! Please enter your details.
          </p>
        </div>

        <Card 
          variant="flat"
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <Card.Content className="p-0 flex flex-col gap-6">
            
            {/* Header Text inside Card */}
            <div>
              <h1 className="text-xl font-medium tracking-tight text-zinc-100">Sign In</h1>
              <p className="text-xs text-zinc-400 mt-1">To connect with your dream job</p>
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

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs text-zinc-400 font-medium tracking-wide">Password</label>
                <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-blue-600 rounded-xl px-3 py-1 transition-all duration-200">
                <Lock className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
                <input 
                  type={isVisible ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none"
                  required
                />
                <button 
                  type="button" 
                  onClick={toggleVisibility} 
                  className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
                >
                  {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Box */}
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded bg-zinc-900 border-zinc-800 text-blue-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-zinc-400 select-none cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Sign In Button */}
            <Button 
              className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2 transition-all duration-200 mt-2"
            >
              Sign In to Account
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Divider */}
            <div className="flex items-center my-1">
              <div className="flex-1 h-[1px] bg-zinc-800" />
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest px-3">Or continue with</span>
              <div className="flex-1 h-[1px] bg-zinc-800" />
            </div>

            {/* Google OAuth Option */}
            <button 
              type="button"
              className="w-full h-11 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200"
            >
              {/* Simple inline Google SVG Icon */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.923 15.474 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.74-.08-1.303-.178-1.709H12.24z"/>
              </svg>
              Continue with Google
            </button>

            {/* Sign up Link */}
            <p className="text-center text-xs text-zinc-400 mt-2">
              Don&apos;t have an account?{' '}
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Create one free
              </Link>
            </p>

          </Card.Content>
        </Card>

      </div>
    </section>
  );
}