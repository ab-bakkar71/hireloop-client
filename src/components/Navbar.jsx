"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Shared navigation items matching your design
  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];
    return (
       <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#121212]/90 backdrop-blur-md text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Left: Logo & Mobile Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none md:hidden"
              aria-label="Toggle main menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo area matching 'hireloop' text styling */}
            <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-tight">
              <span className="text-[#3b82f6]">hire</span>
              <span className="text-[#f97316]">loop</span>
            </Link>
          </div>

          {/* Right side: Desktop Menu & Actions */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Nav Links */}
            <ul className="flex items-center gap-6 text-sm font-medium text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Thin visual separator from the reference image */}
            <div className="h-5 w-[1px] bg-neutral-800" aria-hidden="true" />

            {/* Auth Action Buttons */}
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link href="/login" className="text-[#6366f1] transition-colors hover:text-[#4f46e5]">
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-[#5046e6] px-5 py-2.5 text-white shadow-lg transition-all hover:bg-[#4338ca] hover:shadow-[#5046e6]/20"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="border-t border-neutral-800 bg-[#121212] md:hidden">
          <div className="space-y-1 px-4 py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 border-t border-neutral-800 pt-4 space-y-3 px-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center text-base font-medium text-[#6366f1] hover:text-[#4f46e5]"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl bg-[#5046e6] py-2.5 text-center text-base font-medium text-white hover:bg-[#4338ca]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    );
};

export default Navbar;