import Link from "next/link";
import {LogoLinkedin, LogoGithub} from '@gravity-ui/icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800 bg-[#121212] text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Footer Links & Branding Grid */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand/Logo Section */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-tight">
              <span className="text-[#3b82f6]">hire</span>
              <span className="text-[#f97316]">loop</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
              Connecting exceptional talent with world-class engineering teams. Simplify your hiring loop today.
            </p>
            {/* Social Icons Container */}
            <div className="flex space-x-4 pt-2">
              {/* <a href="#" className="text-neutral-500 transition-colors hover:text-white" aria-label="Twitter">
                <LogoTwitter width={20} height={20} />
              </a> */}
              <a href="#" className="text-neutral-500 transition-colors hover:text-white" aria-label="LinkedIn">
                <LogoLinkedin width={20} height={20} />
              </a>
              <a href="#" className="text-neutral-500 transition-colors hover:text-white" aria-label="GitHub">
                <LogoGithub width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Links Columns Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-3">
            
            {/* Column 1: For Candidates */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
                For Job Seekers
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/jobs" className="transition-colors hover:text-white">Browse Jobs</Link>
                </li>
                <li>
                  <Link href="/dashboard" className="transition-colors hover:text-white">Candidate Dashboard</Link>
                </li>
                <li>
                  <Link href="/applications" className="transition-colors hover:text-white">Track Applications</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: For Employers */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
                For Recruiters
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/post-job" className="transition-colors hover:text-white">Post a Job</Link>
                </li>
                <li>
                  <Link href="/recruiter/dashboard" className="transition-colors hover:text-white">Recruiter Portal</Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition-colors hover:text-white">Pricing Plans</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform & Admin */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/company" className="transition-colors hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} hireloop. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-neutral-600">
            <span>Designed for Next.js and Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}