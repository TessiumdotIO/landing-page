import Link from "next/link";
import React from "react";

const Page = () => {
  const date = new Date;
  const getYear = date.getFullYear();
  return (
    <footer className="bg-purple-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Company</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href={''} className="block hover:text-purple-300 cursor-pointer">Launch App</Link>
                <Link target="parent" href={'https://waitlist.tessium.io/'} className="hover:text-purple-300 block cursor-pointer">Waitlist</Link>
              </div>
              <div className="space-y-2">
                <Link href={''} className="block hover:text-purple-300 cursor-pointer">About</Link>
                <Link href={''} className="hover:text-Linkurple-300 cursor-pointer">Partners</Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <Link href={''} className="hover:text-purple-300 block cursor-pointer">Careers</Link>
            <Link href={''} className="hover:text-purple-300 cursor-pointer">Contact us</Link>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-6 text-center text-sm text-purple-300">
          <p>{getYear} Teselum.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Page;