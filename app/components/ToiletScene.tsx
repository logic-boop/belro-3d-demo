'use client'

import React, { useRef, useLayoutEffect, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Float, Html } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

function Model() {
    const { scene } = useGLTF('/models/toilet.gltf')
    const modelRef = useRef<any>(null)

    // --- Responsive Scale Logic ---
    const [scale, setScale] = useState(1.8)

    useEffect(() => {
        const handleResize = () => {
            // If screen is mobile/tablet width, shrink the model so it fits
            if (window.innerWidth < 768) {
                setScale(0.9)
            } else {
                setScale(1.8)
            }
        }
        handleResize() // Run on mount
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    // ------------------------------

    useLayoutEffect(() => {
        if (!modelRef.current) return
        const ctx = gsap.context(() => {
            gsap.to(modelRef.current.rotation, {
                y: Math.PI * 2,
                scrollTrigger: {
                    trigger: "#main-container",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* Now uses the dynamic scale variable */}
            <primitive ref={modelRef} object={scene} scale={scale} position={[0, -0.8, 0]} />
        </Float>
    )
}

function Loader() {
    return (
        <Html center>
            <div className="text-white text-xs uppercase tracking-widest animate-pulse whitespace-nowrap">
                Loading 3D Assets...
            </div>
        </Html>
    )
}

export default function ToiletScene() {
    return (
        <div className="fixed inset-0 z-10 pointer-events-none w-full h-screen">
            {/* Added alpha:true and antialias for better mobile performance/looks */}
            <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 5], fov: 35 }}>
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <Suspense fallback={<Loader />}>
                    <Model />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}