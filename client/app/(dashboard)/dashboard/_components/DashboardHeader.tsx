"use client";

import { Button } from "@/app/_components/ui/button";
import SectionHeading from "../../_components/SectionHeading";

function DashboardHeader() {
  return (
    <section className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-5">
      <SectionHeading
        description="Welcome back, here's what's happening with your accounts today."
        heading="Dashboard"
      />
      <Button>Create Post</Button>
    </section>
  );
}

export default DashboardHeader;
