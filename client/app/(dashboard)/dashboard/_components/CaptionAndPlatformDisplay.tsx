import React from "react";
import { SlSocialFacebook } from "react-icons/sl";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface ICaptionAndPlatformDisplayProps {
  caption: string;
  user: string;
  platform: string;
}
function CaptionAndPlatformDisplay({
  caption,
  platform,
}: ICaptionAndPlatformDisplayProps) {
  const icon =
    platform === "x" ? (
      <FaXTwitter size={12} />
    ) : platform === "instagram" ? (
      <FaInstagram size={15} />
    ) : platform === "facebook" ? (
      <SlSocialFacebook size={13} />
    ) : (
      <FaLinkedin size={15} />
    );

  const color =
    platform === "x"
      ? "text-black bg-black/20"
      : platform === "facebook"
      ? "text-facebook bg-facebook-light"
      : platform === "instagram"
      ? "text-instagram bg-instagram-light"
      : "text-linkedin bg-linkedin-light";

  return (
    <div className="flex items-center  gap-2">
      <h2 className="text-sm font-medium">{caption}</h2>
      <div
        className={`flex gap-1 font-medium items-center justify-center ${color}  px-2 py-1 rounded-full  w-fit text-xs`}
      >
        {icon} <span className="capitalize">{platform}</span>
      </div>
    </div>
  );
}

export default CaptionAndPlatformDisplay;
