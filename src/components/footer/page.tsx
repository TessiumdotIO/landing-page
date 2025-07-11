import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A0F3D 0%, #2D1A5C 100%)",
      }}
    >
      {/* Lightning Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-16 w-1 h-12 bg-gradient-to-b from-[#ffc884] to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute top-20 right-32 w-1 h-8 bg-gradient-to-b from-[#ff5f6d] to-transparent opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-6 bg-gradient-to-b from-[#a022f5] to-transparent opacity-35 animate-pulse delay-1000"></div>
        {/* Diagonal lightning streaks */}
        <div className="absolute top-16 right-1/4 w-12 h-0.5 bg-gradient-to-r from-[#ffc884] to-transparent opacity-25 rotate-45 animate-pulse delay-700"></div>
        <div className="absolute bottom-16 left-1/4 w-10 h-0.5 bg-gradient-to-r from-[#ff5f6d] to-transparent opacity-20 -rotate-45 animate-pulse delay-300"></div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/5 w-1.5 h-1.5 bg-[#ffc884] rounded-full opacity-40 animate-ping delay-200"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-[#ff5f6d] rounded-full opacity-30 animate-ping delay-800"></div>
        <div className="absolute top-2/3 right-2/3 w-1 h-1 bg-[#a022f5] rounded-full opacity-35 animate-ping delay-1200"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="md:flex justify-between md:px-20 px-6 py-10">
          <div className="md:flex gap-20">
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <Image src={"/tessium-logo.svg"} alt="Logo" width={150} height={150} />
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                Launch App
              </Link>
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                Waitlist
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/60 mt-2">
              <p className="text-xl text-white font-['Neue_Machina']">Company</p>
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                About
              </Link>
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                Partners
              </Link>
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                Careers
              </Link>
              <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-2 mb-10 md:mb-28">
            <p className="text-xl font-['Neue_Machina'] text-white">Connect with us</p>
            <div className="flex items-center gap-4 mt-2">
              <Link
                href={"https://x.com/Tessium_io"}
                className="hover:scale-110 transition-transform duration-300 hover:opacity-80"
              >
                <Image src={"/tess-x.svg"} alt="X" width={23} height={23} />
              </Link>
              <Link
                href={"https://t.me/tessium_io"}
                className="hover:scale-110 transition-transform duration-300 hover:opacity-80"
              >
                <Image src={"/tess-telegram.svg"} alt="Telegram" width={23} height={23} />
              </Link>
              <Link
                href={"https://discord.com/invite/7M8qjGA4GK"}
                className="hover:scale-110 transition-transform duration-300 hover:opacity-80"
              >
                <Image src={"/tess-discord.svg"} alt="Discord" width={23} height={23} />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:flex hidden items-center justify-between border-t border-white/20 py-4 px-20 text-xs text-white/60">
          <p className="text-center">© {new Date().getFullYear()} Tessium.io. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href={"/"} className="hover:text-[#ffc884] transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
