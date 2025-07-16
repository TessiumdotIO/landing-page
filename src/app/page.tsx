import Footer from "@/components/footer/page"
import Navbar from "@/components/navbar/page"
import { Rocket } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160.07deg, #FFFFFF 21.01%, #461DA1 74.76%)",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        className="mt-0 text-white px-5 min-h-[80vh] pt-28 sm:pt-40 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1A0F3D 0%, #2D1A5C 100%)", 
        }}
      >
        {/* Subtle Glowing Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-violet-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>

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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl text-white font-['Neue Machina'] mb-6">
                Enter Web3 <br />
                Evolve Onchain
              </h1>
              <p className="text-white/80 text-lg sm:text-xl font-['Aeonik'] mb-8">
                The New Layer for Web3 Content: Gamified, Social, and <br className="hidden sm:block" />
                Powered by Real Creators
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <button className="flex items-center gap-1 text-white bg-[#461da1] px-6 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer">
                  <p>Launch App</p>
                  <Rocket size={25} />
                </button>
                <a
                  href="https://waitlist.tessium.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                    Join Waitlist
                  </button>
              </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={"/tessium-extend.svg"} 
                width={600}
                height={600}
                alt="Tessium Hexagonal Graphic"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tess Rank Banner Section */}
      <section className="relative overflow-hidden py-16 px-5">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
          </div>
          <div
  className="max-w-fit mx-auto mb-8 px-6 py-4 border border-[#461DA1] rounded-xl bg-white/20 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#461DA1]/40"
>
  <h2
    className="font-['Neue Machina'] text-[#461DA1]"
    style={{
      fontSize: "64px",
      fontWeight: 400,
      lineHeight: "100%",
      letterSpacing: "-5%",
      textAlign: "center",
    }}
  >
    Tess Rank
  </h2>
</div>




          <div
            className="mx-auto rounded-2xl relative"
            style={{
              width: "min(1135px, 100%)",
              minHeight: "617px",
              background: "#8B5FBF",
              padding: "50px 30px",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-['Aeonik']">
                Your evolving onchain versatility score
              </h3>
              <p className="text-lg sm:text-xl mb-12 max-w-4xl leading-relaxed font-['Aeonik']">
                Built from every module, game, onchain checkpoint, wave, AI prompt and creator activity you complete
                across Tessium
              </p>

              {/* Medal Image */}
              <div className="mb-12">
                <Image
                  src="/medal.png"
                  width={150}
                  height={180}
                  alt="Tessium Medal"
                  className="w-auto h-40 sm:h-48"
                  priority
                />
              </div>

              {/* Feature Boxes */}
              <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
                <div
                  className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                  style={{
                    width: "160.36px",
                    height: "56.22px",
                    padding: "7.29px 14.58px",
                    borderRadius: "11.66px",
                    borderWidth: "0.73px",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">∞</span>
                    </div>
                    <div>
                      <div className="text-white font-['Aeonik'] text-sm">Dynamic</div>
                      <div className="text-white/80 font-['Aeonik'] text-xs">always evolving</div>
                    </div>
                  </div>
                </div>

                <div
                  className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                  style={{
                    width: "160.36px",
                    height: "56.22px",
                    padding: "7.29px 14.58px",
                    borderRadius: "11.66px",
                    borderWidth: "0.73px",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⛓</span>
                    </div>
                    <div>
                      <div className="text-white font-['Aeonik'] text-sm">Onchain</div>
                      <div className="text-white/80 font-['Aeonik'] text-xs">Verified progress</div>
                    </div>
                  </div>
                </div>

                <div
                  className="border border-white/30 backdrop-blur-sm flex items-center justify-center"
                  style={{
                    width: "160.36px",
                    height: "56.22px",
                    padding: "7.29px 14.58px",
                    borderRadius: "11.66px",
                    borderWidth: "0.73px",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">👤</span>
                    </div>
                    <div>
                      <div className="text-white font-['Aeonik'] text-sm">Unique</div>
                      <div className="text-white/80 font-['Aeonik'] text-xs">User Journey</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold transition-all duration-300 hover:scale-105 font-['Aeonik']"
                style={{
                  width: "218px",
                  height: "56px",
                  padding: "16px 22px",
                  borderRadius: "12px",
                  fontSize: "16px",
                }}
              >
                Track your progress
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffc884]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#ff5f6d]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#a022f5]/20 rounded-full blur-xl"></div>
      </section>

      {/* Core Features Section */}
      <section
        className="px-4 sm:px-16 mx-auto py-16"
        style={{
          maxWidth: "1238px",
          minHeight: "913px",
        }}
      >
        <h1 className="text-center text-3xl sm:text-5xl mb-12 text-white font-['Neue Machina']">Our Core Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-0" style={{ gap: "88px" }}>
          {/* Tessium Edu */}
          <div className="bg-[#ffc8841A] py-5 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-white/20">
            <Image src={"/tessium-edu.svg"} width={40} height={40} alt="Tessium Edu" className="mb-3" />
            <p className="font-bold text-lg mb-3 font-['Neue Machina'] text-white">Tessium Edu</p>
            <ul className="text-sm sm:text-base font-['Aeonik'] list-disc list-inside space-y-2 text-white">
              <li>Gamified, structured web3 edtech for onboarding builders</li>
              <li>Interactive learning tracks with AI companions</li>
              <li>Onchain tracking and earning for sustained progress</li>
              <li>Community connections and integration</li>
            </ul>
            <div className="flex items-center gap-2 flex-wrap text-xs mt-4 text-black">
              <p className="py-1 px-2 bg-[#ffc884] rounded-md">Learn</p>
              <p className="py-1 px-2 bg-[#ffc884] rounded-md">Evolve</p>
              <p className="py-1 px-2 bg-[#ffc884] rounded-md">Rewards</p>
            </div>
          </div>

          {/* Tessium Waves */}
          <div className="bg-[#461da11A] py-5 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-white/20">
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#461da1] to-[#5a2db6] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#ffc884] rounded-full animate-pulse"></div>
                Releasing Soon
              </span>
            </div>
            <Image src={"/tessium-waves.svg"} width={40} height={40} alt="Tessium Waves" className="mb-3" />
            <p className="font-bold text-lg mb-3 font-['Neue Machina'] text-white">Tessium Waves</p>
            <ul className="text-sm sm:text-base font-['Aeonik'] list-disc list-inside space-y-2 text-white">
              <li>High-value community building for projects</li>
              <li>Custom campaigns for engagement</li>
              <li>Immersive experiences for users</li>
            </ul>
            <div className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white">
              <p className="py-1 px-2 bg-[#461da1] rounded-md">Custom Campaigns</p>
              <p className="py-1 px-2 bg-[#461da1] rounded-md">Community Growth</p>
              <p className="py-1 px-2 bg-[#461da1] rounded-md">Immersive Experience</p>
            </div>
          </div>

          {/* Tessium Games */}
          <div className="bg-[#ff5f6d1A] py-5 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-white/20">
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#ff5f6d] to-[#ff7a85] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Releasing Soon
              </span>
            </div>
            <Image src={"/tessium-games.svg"} width={40} height={40} alt="Tessium Games" className="mb-3" />
            <p className="font-bold text-lg mb-3 font-['Neue Machina'] text-white">Tessium Games</p>
            <ul className="text-sm sm:text-base font-['Aeonik'] list-disc list-inside space-y-2 text-white">
              <li>Evolve through competitive, fun web3 games</li>
              <li>Positive-sum games with education at the core</li>
              <li>Real ecosystem onchain games tied to Tess Rank</li>
            </ul>
            <div className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white">
              <p className="py-1 px-2 bg-[#ff5f6d] rounded-md">Level Up</p>
              <p className="py-1 px-2 bg-[#ff5f6d] rounded-md">Onchain</p>
              <p className="py-1 px-2 bg-[#ff5f6d] rounded-md">Tiered Rewards</p>
            </div>
          </div>

          {/* Tessium Creator */}
          <div className="bg-[#a022f51A] py-5 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-white/20">
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#a022f5] to-[#b844f7] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#ffc884] rounded-full animate-pulse"></div>
                Releasing Soon
              </span>
            </div>
            <Image src={"/tessium-creator.svg"} width={40} height={40} alt="Tessium Creator" className="mb-3" />
            <p className="font-bold text-lg mb-3 font-['Neue Machina'] text-white">Tessium Creator</p>
            <ul className="text-sm sm:text-base font-['Aeonik'] list-disc list-inside space-y-2 text-white">
              <li>Next-generation creator engine</li>
              <li>Create and scale content effortlessly</li>
              <li>Earn rewards through creative contributions</li>
            </ul>
            <div className="flex items-center gap-2 flex-wrap text-xs mt-4 text-white">
              <p className="py-1 px-2 bg-[#a022f5] rounded-md">Create</p>
              <p className="py-1 px-2 bg-[#a022f5] rounded-md">Scale</p>
              <p className="py-1 px-2 bg-[#a022f5] rounded-md">Earn</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
