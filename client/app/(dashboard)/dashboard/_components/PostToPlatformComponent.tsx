"use client";

import { Button } from "@/app/_components/ui/button";
import { useState } from "react";

type Platform = "instagram" | "facebook" | "x" | "linkedin";

function PostToPlatformComponent() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>();
  const platforms = ["facebook", "x", "linkedin", "Instagram"];

  const selectPlatform = (platform: Platform) => {
    setSelectedPlatforms((prevState) => {
      if (prevState) {
        return prevState.includes(platform)
          ? prevState.filter((p) => p !== platform)
          : [...prevState, platform];
      } else {
        return [platform];
      }
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-foreground/80 font-medium text-sm">
        Post to Platforms
      </h4>
      <div className="grid grid-cols-2 gap-2 ">
        {platforms.map((platform, index) => (
          <Button
            key={index}
            onClick={() => selectPlatform(platform as Platform)}
            variant="outline"
            className={`${
              selectedPlatforms?.includes(platform as Platform) &&
              "bg-foreground/20"
            } capitalize font-medium text-foreground/70 border-foreground/20`}
          >
            {platform}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PostToPlatformComponent;
