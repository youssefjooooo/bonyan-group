"use client";

import { motion } from "motion/react";
import { ArrowRight, Home } from "lucide-react";
import "./globals.css";
export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#df352c]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#1b343b]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-9xl font-bold text-[#df352c]/10 mb-4">
              404
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#1b343b] mb-6">
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
              Sorry, the page you are looking for does not exist or has been
              moved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-[#df352c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c52e25] transition-all transform hover:scale-105 shadow-md">
                <Home className="w-5 h-5" />
                Back to Home
              </a>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
