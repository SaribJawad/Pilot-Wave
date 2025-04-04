"use client";

import { Button } from "@/app/_components/ui/button";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

interface IUpcomingPostEditPanelProps {
  platform: string[];
}

function UpcomingPostEditPanel({ platform }: IUpcomingPostEditPanelProps) {
  const icon = platform.map((platform) => {
    if (platform === "x") {
      return <FaXTwitter size={15} style={{ color: "#000000" }} />;
    } else if (platform === "instagram") {
      return (
        <FaInstagram size={15} style={{ color: "var(--color-instagram)" }} />
      );
    } else if (platform === "facebook") {
      return (
        <SlSocialFacebook
          size={15}
          style={{ color: "var(--color-facebook)" }}
        />
      );
    } else {
      return (
        <FaLinkedin size={15} style={{ color: "var(--color-linkedin)" }} />
      );
    }
  });

  return (
    <div className="flex items-center  justify-between gap-3">
      <div className="flex gap-1 items-center">
        {icon.map((icon, index) => (
          <span key={index} className="text-facebook">
            {icon}
          </span>
        ))}
      </div>
      <Button variant="link" size="sm" className="font-medium">
        Edit
      </Button>
    </div>
  );
}

export default UpcomingPostEditPanel;
