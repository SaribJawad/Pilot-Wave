"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import dynamic from "next/dynamic";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
// import EditCreatePostDialog from "./EditCreatePostDialog";

interface IUpcomingPostEditPanelProps {
  platform: string[];
}

const EditCreatePostDialog = dynamic(() => import("./EditCreatePostDialog"), {
  ssr: false, // optional, usually dialogs don't need SSR
  loading: () => <p>Loading...</p>, // optional loading fallback
});

function UpcomingPostEditPanel({ platform }: IUpcomingPostEditPanelProps) {
  const icon = platform.map((platform, index) => {
    if (platform === "x") {
      return (
        <FaXTwitter
          key={`icon-${platform}-${index}`}
          size={15}
          style={{ color: "#000000" }}
        />
      );
    } else if (platform === "instagram") {
      return (
        <FaInstagram
          key={`icon-${platform}-${index}`}
          size={15}
          style={{ color: "var(--color-instagram)" }}
        />
      );
    } else if (platform === "facebook") {
      return (
        <SlSocialFacebook
          key={`icon-${platform}-${index}`}
          size={15}
          style={{ color: "var(--color-facebook)" }}
        />
      );
    } else {
      return (
        <FaLinkedin
          key={`icon-${platform}-${index}`}
          size={15}
          style={{ color: "var(--color-linkedin)" }}
        />
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
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" size="sm" className="font-medium">
            Edit
          </Button>
        </DialogTrigger>
        <EditCreatePostDialog title="Edit Scheduled Post" />
      </Dialog>
    </div>
  );
}

export default UpcomingPostEditPanel;
