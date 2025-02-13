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

export default function AuroraRiftLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Marquee */}
      <MarqueeText>
        AURORARIFT (OPERATING SYSTEM) ⟶ THE OPERATING SYSTEM FOR AI AGENTS ⟶ AURORARIFT (OPERATING SYSTEM) ⟶ THE
        OPERATING SYSTEM FOR AI AGENTS ⟶ AURORARIFT IS YOURS ⟶
      </MarqueeText>
