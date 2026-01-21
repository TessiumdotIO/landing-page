"use client";
import Navbar from "@/components/navbar/page";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/footer/page";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="min-h-screen  w-full flex items-center justify-center p-2 sm:p-4 relative overflow-x-hidden">
          {/* Background image */}
          <Image
            src="/assets/hero.png"
            alt=""
            fill
            className="inset-0 w-full h-full object-cover pointer-events-none z-10"
            priority
          />
          {/* Subtle Glowing Effects */}
          <div className="">
            <motion.div
              className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-violet-500/10 rounded-full mix-blend-screen filter blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              ></div>
            </div>
          </div>

          <div className=" mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl sm:text-[60px] text-white  mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    fontFamily:
                      'var(--font-neue-machina), "Neue Machina", system-ui, sans-serif',
                  }}
                >
                  The AI Edutainment Layer for Interactive Journeys
                </motion.h1>
                <motion.p
                  className="text-white/80 text-lg sm:text-xl font-aeonik mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Powering the Real User Economy for the Next Phase of Web3
                  Adoption
                </motion.p>
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    className="flex items-center gap-1 text-white bg-[#461da1] px-6 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p>Launch App</p>
                    <Rocket size={25} />
                  </motion.button>
                  <a
                    href="https://waitlist.tessium.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Waitlist
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right side - Image */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={"/tessium-extend.svg"}
                    width={600}
                    height={600}
                    alt="Tessium Hexagonal Graphic"
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div
          className="pt-8"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #461DA1 100%)",
          }}
        >
          {/* Tess Rank Banner Section */}
          <section className="relative overflow-hidden  py-16 px-5">
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <motion.div
                className="max-w-fit mx-auto mb-8 px-6 py-4  rounded-xl bg-[#461DA1] shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="font-neue-machina text-white"
                  style={{
                    fontSize: "64px",
                    fontFamily:
                      'var(--font-neue-machina), "Neue Machina", system-ui, sans-serif',
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-5%",
                    textAlign: "center",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(70, 29, 161, 0)",
                      "0 0 15px rgba(70, 29, 161, 0.5)",
                      "0 0 5px rgba(70, 29, 161, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Tess Rank
                </motion.h2>
              </motion.div>

              <motion.div
                className="mx-auto rounded-2xl relative"
                style={{
                  width: "min(1135px, 100%)",
                  minHeight: "617px",
                  background: "#8B5FBF",
                  padding: "50px 30px",
                  borderRadius: "16px",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center  text-white">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold mb-7 font-aeonik"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Your evolving onchain versatility score
                  </motion.h3>
                  {/* <motion.p
                    className="text-lg sm:text-xl mb-12 md:max-w-xl leading-relaxed "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{ fontFamily: '"Aeonik", system-ui, sans-serif' }}
                  >
                    Built from every module, game, onchain checkpoint, wave, AI
                    prompt and creator activity you complete across Tessium
                  </motion.p> */}

                  {/* Medal Image */}
                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      // repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/medal.png"
                      width={150}
                      height={180}
                      alt="Tessium Medal"
                      className="w-auto h-40 sm:h-48"
                      priority
                    />
                  </motion.div>

                  {/* Feature Boxes */}
                  <motion.div
                    className="flex justify-center items-center gap-6 mb-12 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                      style={{
                        width: "160.36px",
                        height: "56.22px",
                        padding: "7.29px 14.58px",
                        borderRadius: "11.66px",
                        borderWidth: "0.73px",
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255,255,255,0.6)",
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">∞</span>
                        </div>
                        <div>
                          <div className="text-white font-aeonik text-sm">
                            Dynamic
                          </div>
                          <div className="text-white/80 font-aeonik text-xs">
                            always evolving
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                      style={{
                        width: "160.36px",
                        height: "56.22px",
                        padding: "7.29px 14.58px",
                        borderRadius: "11.66px",
                        borderWidth: "0.73px",
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255,255,255,0.6)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">⛓</span>
                        </div>
                        <div>
                          <div className="text-white font-aeonik text-sm">
                            Onchain
                          </div>
                          <div className="text-white/80 font-aeonik text-xs">
                            Verified progress
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                      style={{
                        width: "160.36px",
                        height: "56.22px",
                        padding: "7.29px 14.58px",
                        borderRadius: "11.66px",
                        borderWidth: "0.73px",
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255,255,255,0.6)",
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">👤</span>
                        </div>
                        <div>
                          <div className="text-white font-aeonik text-sm">
                            Unique
                          </div>
                          <div className="text-white/80 font-aeonik text-xs">
                            User Journey
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="bg-[#FF6B6B] text-white font-semibold font-aeonik"
                    style={{
                      width: "218px",
                      height: "56px",
                      padding: "16px 22px",
                      borderRadius: "12px",
                      fontSize: "16px",
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#FF5252" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    Track your progress
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-[#ffc884]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 right-10 w-32 h-32 bg-[#ff5f6d]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#a022f5]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </section>

          {/* Core Features Section */}
          <section
            className="px-4 sm:px-16 mx-auto md:mt-19 pb-28 pt-16"
            style={{
              maxWidth: "1238px",
              minHeight: "913px",
            }}
          >
            <motion.div
              className="max-w-fit mx-auto mb-12 px-6 py-4  rounded-xl bg-[#461DA1] shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="font-neue-machina text-white"
                style={{
                  fontSize: "64px",
                  fontFamily:
                    'var(--font-neue-machina), "Neue Machina", system-ui, sans-serif',
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                  textAlign: "center",
                }}
                animate={{
                  textShadow: [
                    "0 0 5px rgba(70, 29, 161, 0)",
                    "0 0 15px rgba(70, 29, 161, 0.5)",
                    "0 0 5px rgba(70, 29, 161, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Our Core Features
              </motion.h2>
            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-0"
              style={{
                gap: "30px",
                fontFamily:
                  'var(--font-aeonik), "Aeonik", system-ui, sans-serif',
              }}
            >
              <motion.div
                className="hover:bg-[#ffc8841A] py-6 px-10 rounded-2xl shadow-md relative overflow-hidden border border-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(255, 200, 132, 0.2)",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={"/tessium-edu.svg"}
                    width={100}
                    height={100}
                    alt="Tessium Edu"
                    className="mb-3"
                  />
                </motion.div>
                <motion.p
                  className="font-bold text-[32px] mb-3 font-neue-machina text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Tessium Edu
                </motion.p>
                <motion.ul
                  className="text-sm sm:text-base font-aeonik list-disc list-inside space-y-2 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <li>
                    Gamified, structured web3 edtech for onboarding builders
                  </li>
                  <li>Interactive learning tracks with AI companions</li>
                  <li>Onchain tracking and earning for sustained progress</li>
                  <li>Community connections and integration</li>
                </motion.ul>
                <motion.div
                  className="flex items-center gap-2 flex-wrap text-xs mt-4 text-black"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="py-1 px-2 bg-[#ffc884] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Interactive classes
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#ffc884] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    NFT Certificates
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#ffc884] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Progress Tracking
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Tessium Waves */}
              <motion.div
                className="hover:bg-[#461da11A]  py-6 px-10 rounded-2xl shadow-md relative overflow-hidden border border-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(70, 29, 161, 0.2)",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={"/tessium-waves.svg"}
                    width={100}
                    height={100}
                    alt="Tessium Waves"
                    className="mb-3"
                  />
                </motion.div>
                <motion.p
                  className="font-bold text-[32px] mb-3 font-neue-machina text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Tessium Waves
                </motion.p>
                <motion.ul
                  className="text-sm sm:text-base font-aeonik list-disc list-inside space-y-2 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <li>High-value community building for projects</li>
                  <li>Custom campaigns for engagement</li>
                  <li>Immersive experiences for users</li>
                </motion.ul>
                <motion.div
                  className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="py-1 px-2 bg-[#461da1] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Custom campaigns{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#461da1] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Community Building{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#461da1] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Analytics
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Tessium Games */}
              <motion.div
                className="hover:bg-[#ff5f6d1A] py-6 px-10 rounded-2xl shadow-md relative overflow-hidden border border-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(255, 95, 109, 0.2)",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={"/tessium-games.svg"}
                    width={100}
                    height={100}
                    alt="Tessium Games"
                    className="mb-3"
                  />
                </motion.div>
                <motion.p
                  className="font-bold text-[32px] mb-3 font-neue-machina text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Tessium Games
                </motion.p>
                <motion.ul
                  className="text-sm sm:text-base font-aeonik list-disc list-inside space-y-2 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <li>Evolve through competitive, fun web3 games</li>
                  <li>Positive-sum games with education at the core</li>
                  <li>Real ecosystem onchain games tied to Tess Rank</li>
                </motion.ul>
                <motion.div
                  className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="py-1 px-2 bg-[#ff5f6d] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Quiz Challenges{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#ff5f6d] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Onchain Games{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#ff5f6d] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Rewards System{" "}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Tessium Creator */}
              <motion.div
                className="bg-[#a022f51A] py-6 px-10 rounded-2xl shadow-md relative overflow-hidden border border-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(160, 34, 245, 0.2)",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={"/tessium-creator.svg"}
                    width={100}
                    height={100}
                    alt="Tessium Creator"
                    className="mb-3"
                  />
                </motion.div>
                <motion.p
                  className="font-bold text-[32px] mb-3 font-neue-machina text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  Tessium Creator
                </motion.p>
                <motion.ul
                  className="text-sm sm:text-base font-aeonik list-disc list-inside space-y-2 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <li>Next-generation creator engine</li>
                  <li>Create and scale content effortlessly</li>
                  <li>Earn rewards through creative contributions</li>
                </motion.ul>
                <motion.div
                  className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="py-1 px-2 bg-[#a022f5] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Content tools{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#a022f5] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Monetization{" "}
                  </motion.p>
                  <motion.p
                    className="py-1 px-2 bg-[#a022f5] rounded-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Creator Network{" "}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
