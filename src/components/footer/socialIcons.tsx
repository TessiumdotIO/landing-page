import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaTelegram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Twitter/X Icon */}
      <a
        href="https://twitter.com/tessium_io?s=21"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white transition-colors duration-200"
        aria-label="Twitter"
      >
        <FaXTwitter className="w-7 h-7" />
      </a>

      {/* Discord Icon */}
      <a
        href="https://discord.gg/pXmADX7qMe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white transition-colors duration-200"
        aria-label="Discord"
      >
        <FaDiscord className="w-7 h-7" />
      </a>

      {/* Telegram Icon */}
      <a
        href="https://t.me/tessium_io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white transition-colors duration-200"
        aria-label="Telegram"
      >
        <FaTelegram className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
