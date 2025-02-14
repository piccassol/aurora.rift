"use client"
import type React from "react"
import { useEffect, useState, useMemo } from "react"
import { Button } from "@/components/ui/button"

const MarqueeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap font-mono text-xs tracking-wider bg-gradient-to-r from-black via-purple-900/10 to-black">
      <div className="animate-marquee py-2 pr-4">{children}</div>
      <div className="absolute top-0 animate-marquee2 py-2 pr-4">{children}</div>
    </div>
  )
}

const GlowingText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return <span className={`animate-glow transition-opacity duration-1000 delay-${delay} opacity-0`}>{children}</span>
}

export default function AuroraRift() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationButtons = useMemo(
    () => [
      { href: "/savasai", label: "SAVASAI", desc: "Images" },
      { href: "/hullai", label: "HULLAI", desc: "Videos" },
      { href: "/michelai", label: "MICHÉLAI", desc: "Music" },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-black to-blue-900/20" />

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0ME0gMCAzMCBMIDQwIDMwIE0gMzAgMCBMIDMwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      {/* Top Marquee */}
      <div aria-label="Scrolling banner">
        <MarqueeText>
          AURORARIFT ⟶ EXPLORE AI-GENERATED CREATIONS ⟶ SAVASAI (IMAGES) ⟶ HULLAI (VIDEOS) ⟶ MICHÉLAI (MUSIC) ⟶
        </MarqueeText>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div
          className={`space-y-8 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Title with Glitch Effect */}
          <h1 className="text-4xl md:text-6xl font-mono tracking-wider relative group">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-red-500 animate-glitch-1 opacity-0 group-hover:opacity-100">
                AURORARIFT
              </span>
              <span className="absolute inset-0 text-blue-500 animate-glitch-2 opacity-0 group-hover:opacity-100">
                AURORARIFT
              </span>
              AURORARIFT
            </span>
          </h1>

          {/* Animated Tagline */}
          <p className="text-sm md:text-base font-mono tracking-wide max-w-md mx-auto text-white/80">
            <GlowingText delay={100}>TOKENIZE</GlowingText> <GlowingText delay={200}>YOUR</GlowingText>{" "}
            <GlowingText delay={300}>REALITY</GlowingText>
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            {navigationButtons.map((item) => (
              <a key={item.href} href={item.href} className="inline-block">
                <Button
                  variant="outline"
                  className="w-48 font-mono text-sm tracking-wider border-white/20 bg-black/50 backdrop-blur-sm
                    hover:bg-white/10 hover:border-white/40 hover:scale-105 transform transition-all duration-300
                    flex flex-col items-center py-4"
                >
                  <span className="text-white">{item.label}</span>
                  <span className="text-xs text-white/60">({item.desc})</span>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Marquee */}
      <div aria-label="Scrolling banner">
        <MarqueeText>
          AURORARIFT ⟶ EXPLORE AI-GENERATED CREATIONS ⟶ SAVASAI (IMAGES) ⟶ HULLAI (VIDEOS) ⟶ MICHÉLAI (MUSIC) ⟶
        </MarqueeText>
      </div>
    </div>
  )
}

