import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black ">
      <div className="md:flex justify-between md:px-20 px-6 py-10">
        <div className="md:flex gap-20">
          <div className="flex flex-col gap-2 text-sm text-[#667085]">
            <Image
              src={"/tessium-logo.svg"}
              alt="Logo"
              width={150}
              height={150}
            />
            <Link href={"/"}>Launch App</Link>
            <Link href={"/"}>Waitlist</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[#667085] mt-2">
            <p className="text-xl text-black">Company</p>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Partners</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
        <div className="mt-2 mb-10 md:mb-28">
          <p className="text-xl">Connect with us</p>
          <div className="flex items-center gap-4 mt-2">
            <Link href={"https://x.com/Tessium_io"}>
              <Image src={"/tess-x.svg"} alt="Logo" width={23} height={23} />
            </Link>
            <Link href={"https://t.me/tessium_io"}>
              <Image
                src={"/tess-telegram.svg"}
                alt="Logo"
                width={23}
                height={23}
              />
            </Link>
            <Link href={"https://discord.com/invite/7M8qjGA4GK"}>
              <Image
                src={"/tess-discord.svg"}
                alt="Logo"
                width={23}
                height={23}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden items-center justify-between border-t border-gray-300 py-4 px-20 text-xs text-[#667085]">
        <p className="text-center">© 2023 Tessium.io. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
