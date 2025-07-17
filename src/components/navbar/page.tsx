"use client"
import { Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "@/lib/motion"
import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform scroll position to background opacity
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50 // Adjust this value
      setIsScrolled(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <motion.div
    className="fixed top-0 left-0 right-0 z-50 w-full"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Background layer that fades in on scroll */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, #1A0F3D 0%, #2D1A5C 100%)",
        opacity: backgroundOpacity,
      }}
    />
    
    {/* Backdrop blur effect */}
    <motion.div
      className="absolute inset-0"
      style={{
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
    />

    <nav className="relative flex items-center justify-between my-5 mx-5 sm:my-7 sm:mx-auto sm:max-w-[85%]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image 
          src={"/assets/main.svg"} 
          alt="Logo" 
          width={170} 
          height={170} 
        />
      </motion.div>
        <div>
          <motion.button 
            className="sm:flex hidden items-center gap-1 text-white bg-[#461da1] px-4 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>Launch App</p>
            <Rocket size={25} />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden"
          >
            <Image
              src={"/menu-icon.svg"}
              alt="menu"
              width={40}
              height={40}
              className="bg-[#461da1] p-2 rounded-sm sm:hidden"
              onClick={() => setShowMenu(true)}
            />
          </motion.div>
        </div>
      </nav>
      <AnimatePresence>
        {showMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="z-50 w-[70%] max-w-md border border-white/10 px-6 pt-8 shadow-xl absolute top-0 right-0 h-full text-white"
              style={{
                background: "linear-gradient(180deg, #1A0F3D 0%, #2D1A5C 100%)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div></div>
                <motion.button
                  className="rounded-md p-1 text-white hover:bg-white/10 hover:text-gray-300"
                  onClick={() => setShowMenu(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.ul 
                onClick={() => setShowMenu(false)} 
                className="flex flex-col gap-4 items-end pb-20 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.li 
                  className="text-[#ffc884] font-bold"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <Link href={"/"}>Home</Link>
                </motion.li>
                <motion.li 
                  className="text-white hover:text-[#461da1] transition-colors"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <Link href={"/"}>Launch App</Link>
                </motion.li>
                <motion.li 
                  className="text-white hover:text-[#461da1] transition-colors"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <Link href={"/"}>Join Waitlist</Link>
                </motion.li>
                <motion.li 
                  className="text-white hover:text-[#461da1] transition-colors"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <Link href={"/"}>About</Link>
                </motion.li>
                <motion.li 
                  className="text-white hover:text-[#461da1] transition-colors"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <Link href={"/"}>Contact us</Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
export default Navbar
