"use client";

import { useSidebar } from "@/app/_components/ui/sidebar";
import { IconType } from "react-icons";

interface ICustomSideBarTriggerProps {
  icon: React.ReactNode;
}

function CustomSideBarTrigger({ icon }: ICustomSideBarTriggerProps) {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      onClick={toggleSidebar}
      className="p-1 rounded-md cursor-pointer flex items-center justify-center hover:bg-zinc-200 transition-colors"
    >
      {icon}
    </div>
  );
}

export default CustomSideBarTrigger;
