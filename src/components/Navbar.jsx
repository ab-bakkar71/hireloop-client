"use client"
import { useSession, signOut } from '@/lib/auth-client'; // signOut ইম্পোর্ট করা হয়েছে
import { Button, Avatar, Dropdown } from '@heroui/react'; // HeroUI Avatar ও Dropdown ব্যবহার করতে পারেন
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const user = session?.user;

  // Shared navigation items matching your design
  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully ✅");
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong during logout");
    }
  };

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

            {/* Logo area */}
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

            {/* Thin visual separator */}
            <div className="h-5 w-[1px] bg-neutral-800" aria-hidden="true" />

            {/* Auth Action Area (Conditional Rendering) */}
            <div className="flex items-center gap-4 text-sm font-medium">
              {isPending ? (
                <div className="h-9 w-9 animate-pulse rounded-full bg-neutral-800" /> // লোডিং স্কেলিটন
              ) : user ? (
                /* ইউজার ডাটা থাকলে অবতার ইমেজ দেখানো হবে */
                <div className="flex items-center gap-4">
                  <span className="hidden text-xs text-neutral-400 lg:inline-block">
                    Hi, {user.name?.split(" ")[0]}
                  </span>
                  
                  {/* সিম্পল ইমেজ ট্যাগ বা হিরো ইউআই অবতার দিয়ে ইউজার প্রোফাইল মেনু */}
                  <div className="relative group">
                    <img 
                      src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"} 
                      alt={user.name || "User profile"} 
                      className="h-10 w-10 cursor-pointer rounded-full border border-neutral-700 object-cover hover:border-neutral-500 transition-colors"
                    />
                    
                    {/* একটি ড্রপডাউন হোভার ইফেক্ট বা ক্লিক ইফেক্ট মেনু (লগআউটের জন্য) */}
                    <div className="absolute right-0 top-11 hidden w-40 rounded-xl border border-neutral-800 bg-[#161616] p-2 shadow-xl group-hover:block hover:block">
                      <button 
                        onClick={handleSignOut}
                        className="w-full text-left rounded-lg px-3 py-2 text-sm text-rose-400 hover:bg-neutral-800 hover:text-rose-300 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* ইউজার না থাকলে সাধারণ সাইন ইন ও গেট স্টার্টেড বাটন থাকবে */
                <>
                  <Link href="/login" className="text-[#6366f1] transition-colors hover:text-[#4f46e5]">
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="rounded-xl bg-[#5046e6] px-5 py-2.5 text-white shadow-lg transition-all hover:bg-[#4338ca] hover:shadow-[#5046e6]/20"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="border-t border-neutral-800 bg-[#121212] md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
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
              {isPending ? (
                <div className="h-10 w-full animate-pulse rounded-xl bg-neutral-800" />
              ) : user ? (
                /* মোবাইল মেনুতে ইউজার থাকলে শুধু সাইন আউট বাটন */
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSignOut();
                  }}
                  className="block w-full text-center text-base font-medium text-rose-400 hover:text-rose-300"
                >
                  Sign Out ({user.name})
                </button>
              ) : (
                /* মোবাইল মেনুতে ইউজার না থাকলে সাধারণ বাটন */
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;