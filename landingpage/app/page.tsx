"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

const MarqueeText = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap font-mono text-xs tracking-wider">
      <div className="animate-marquee py-2 pr-4">{children}</div>
      <div className="absolute top-0 animate-marquee2 py-2 pr-4">{children}</div>
    </div>
  )
}

export default function MoonTurtleLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Marquee */}
      <MarqueeText>
        MOONTURTLE (OPERATING SYSTEM) ⟶ THE OPERATING SYSTEM FOR CREATIVE AI AGENTS ⟶ MOONTURTLE (OPERATING SYSTEM) ⟶
        THE OPERATING SYSTEM FOR CREATIVE AI AGENTS ⟶ MOONTURTLE IS YOURS ⟶
      </MarqueeText>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* Avatar in top left */}
        <motion.div
          className="absolute top-4 left-4 w-6 h-6 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TCmLPYT1_400x400.jpg-8mEWsMbWbTjq3h0caHzwaGJNKSkrwg.jpeg"
            alt="AI Avatar"
            className="w-full h-full object-cover grayscale contrast-200 brightness-150 invert opacity-70"
            style={{
              filter: "grayscale(1) contrast(1000%) brightness(1000%) invert(1)",
            }}
          />
        </motion.div>

        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-mono tracking-wider">AURORARIFT</h1>
          <p className="text-sm md:text-base font-mono tracking-wide max-w-md mx-auto opacity-80">TOKENIZE YOU</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="font-mono text-sm tracking-wider border-white/20 hover:bg-white/10">
              INITIALIZE
            </Button>
            <Button variant="outline" className="font-mono text-sm tracking-wider border-white/20 hover:bg-white/10">
              LEARN MORE
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Bottom Marquee */}
      <MarqueeText>
        MOONTURTLE (OPERATING SYSTEM) ⟶ THE OPERATING SYSTEM FOR CREATIVE AI AGENTS ⟶ MOONTURTLE (OPERATING SYSTEM) ⟶
        THE OPERATING SYSTEM FOR CREATIVE AI AGENTS ⟶ MOONTURTLE IS YOURS ⟶
      </MarqueeText>
    </div>
  )
}


      </MarqueeText>
