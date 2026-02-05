import React, { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navigation/Navbar"
import FullNav from "../Navigation/FullNav"

const Stair = () => {
  const stairParent = useRef(null)
  const appRef = useRef(null)
  const location = useLocation().pathname

  const [isNavOpen, setIsNavOpen] = useState(false)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Hide app first
      gsap.set(appRef.current, { opacity: 0 })

      // Make overlay visible
      gsap.set(stairParent.current, { autoAlpha: 1 })

      // Bars start above screen
      gsap.set(".stair", { y: "-100%" })

      // Bars drop DOWN
      tl.to(".stair", {
        y: "0%",
        duration: 1.2,
        stagger: {
          each: 0.15,
          from: "start",
        },
        ease: "expo.inOut",
      })

      // Reveal app AFTER bars cover screen
      tl.to(appRef.current, {
        opacity: 1,
        duration: 0.3,
      })

      // Bars move down and disappear
      tl.to(".stair", {
        y: "100%",
        duration: 1,
        stagger: {
          each: 0.12,
          from: "start",
        },
        ease: "expo.inOut",
      })

      // Hide overlay
      tl.set(stairParent.current, { autoAlpha: 0 })

      // Reset bars
      tl.set(".stair", { y: "-100%" })
    },
    { scope: stairParent, dependencies: [location] }
  )

  return (
    <>
      {/* STAIR OVERLAY */}
      <div
        ref={stairParent}
        className="fixed top-0 left-0 h-screen w-full z-[9999] pointer-events-none"
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
        </div>
      </div>

      <FullNav isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* App */}
      <div ref={appRef}>
        <Navbar setIsNavOpen={setIsNavOpen} />
        <Outlet />
      </div>
    </>
  )
}

export default Stair
