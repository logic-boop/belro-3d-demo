'use client'

import React from 'react'
import Navbar from '@/app/components/Navbar'
import ToiletScene from '@/app/components/ToiletScene'

export default function Home() {
  return (
    <main id="main-container" className="relative bg-[#000814] min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <ToiletScene />

      {/* 3. Hero Section - Centered */}
      <section className="relative h-[80vh] md:h-screen flex flex-col items-center justify-center z-20 pointer-events-none px-6">
        <h1 className="text-[18vw] md:text-[12rem] font-bold text-white tracking-[0.1em] md:tracking-[0.2em] uppercase leading-[0.8] text-center">
          BELRO
        </h1>
        <p className="text-blue-400 font-mono text-[10px] md:text-base tracking-[0.3em] md:tracking-[0.6em] mt-6 md:mt-8 uppercase animate-pulse text-center">
          Design Intelligence Lab
        </p>
      </section>

      {/* 4. Description Section - Centered for Mobile, Right-aligned for Desktop */}
      <section className="relative min-h-[50vh] md:h-screen flex items-center justify-center md:justify-end px-8 md:px-32 z-20 pointer-events-none">
        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 max-w-[90%] md:max-w-md shadow-2xl">
          <p className="text-white text-xl md:text-2xl font-light leading-relaxed opacity-90 text-center md:text-left">
            It’s not just a studio. <br />
            <span className="text-blue-400 font-semibold">It’s a design intelligence lab.</span>
          </p>
          <div className="w-12 h-[1px] bg-blue-500 mt-6 mx-auto md:ml-0"></div>
        </div>
      </section>

      {/* 5. Product Catalog Section - STRICT CENTERING & GUTTER SPACE */}
      <section className="relative min-h-screen bg-white/30 backdrop-blur-3xl z-30 py-24 md:py-48 rounded-t-[4rem] md:rounded-t-[6rem] -mt-20 shadow-[0_-40px_80px_rgba(0,0,0,0.7)]">

        {/* Main Wrapper: Better centering + consistent gutters */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-black">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
            <h2 className="text-[14vw] md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              The Catalog
            </h2>
            <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed mb-12 px-4">
              A curated selection of 54 design intelligence assets from the BELRO 2026 collection.
            </p>

            <div className="flex flex-col items-center bg-black/5 px-8 py-5 rounded-[2rem] border border-black/5">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">
                System Status
              </span>
              <div className="bg-black text-white px-6 py-2.5 font-mono text-xs md:text-sm rounded-full tracking-widest">
                54 / 54 ASSETS LOADED
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 place-items-center">
            {Array.from({ length: 54 }).map((_, i) => (
              <div
                key={i}
                className="group relative w-full max-w-[420px] aspect-square bg-white overflow-hidden rounded-[3rem] md:rounded-[4.5rem] border border-gray-100 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-4"
              >
                <img
                  src={`/catalog/product${i + 1}.jpg`}
                  alt={`Belro Product ${i + 1}`}
                  className="w-full h-full object-contain p-10 md:p-16 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-x-0 bottom-10 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-6">
                  <div className="bg-white/95 backdrop-blur-2xl py-5 px-10 rounded-3xl shadow-2xl border border-gray-100 text-center">
                    <p className="text-blue-600 font-mono text-[10px] font-bold mb-1 uppercase tracking-[0.3em]">
                      ASSET_B00{i + 1}
                    </p>
                    <h3 className="text-black font-bold text-sm md:text-base uppercase tracking-tight">
                      Intelligence Unit
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-32 md:mt-56 pt-16 border-t border-gray-100 flex flex-col items-center gap-8 pb-16">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center font-bold text-white text-xl">
              B
            </div>
            <p className="font-bold tracking-[0.8em] uppercase text-black text-sm md:text-lg">
              BELRO © 2026
            </p>
            <p className="text-gray-400 font-mono text-[11px] tracking-[0.4em]">
              IBADAN // NIGERIA // GLOBAL
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}