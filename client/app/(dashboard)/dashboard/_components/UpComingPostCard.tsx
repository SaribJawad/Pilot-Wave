import React from "react";
import UpcomingPostEditPanel from "./UpcomingPostEditPanel";

interface IUpComingPostCardProps {
  caption: string;
  date: string;
  time: string;
  platform: string[];
}

function UpComingPostCard({
  caption,
  date,
  platform,
  time,
}: IUpComingPostCardProps) {
  return (
    <div className="p-4 border-t border-foreground/10 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm text-foreground/60">
        <h5>{date},</h5> <p>{time}</p>
      </div>
      <p className="text-sm ">{caption.slice(0, 100) + "..."}</p>
      <UpcomingPostEditPanel platform={platform} />
    </div>
  );
}

export default UpComingPostCard;
