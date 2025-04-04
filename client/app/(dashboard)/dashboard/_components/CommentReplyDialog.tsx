import { Button } from "@/app/_components/ui/button";
import image from "@/public/testimonials/image1.jpeg";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { Input } from "@/app/_components/ui/input";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { BsRobot } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function CommentReplyDialog() {
  return (
    <DialogContent className="[&>button]:hidden md:max-w-[655px] max-h-[calc(100vh-2rem)] overflow-auto ">
      <DialogHeader className=" flex-row items-center justify-between">
        <div className="flex  items-center gap-2">
          <div className="px-2 py-1  text-sm flex items-center gap-2 text-instagram bg-instagram-light rounded-full">
            <SlSocialInstagram /> Instagram
          </div>
          <DialogTitle className="">Comment</DialogTitle>
        </div>
        <DialogClose asChild>
          <Button type="button" size="sm" variant="secondary">
            <IoClose />
          </Button>
        </DialogClose>
      </DialogHeader>
      <div className="flex lg:flex-row flex-col  gap-4 py-4 px-4 overflow-auto">
        <div className="lg:w-[250px] w-full lg:h-[140px] sm:h-[350px] h-[200px]  relative rounded-lg overflow-hidden">
          <Image src={image} alt="user" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div>
            <h4 className="text-foreground/60 font-medium text-sm">Post</h4>
            <h2 className="font-medium text-lg">
              Summer collection launch announcement
            </h2>
          </div>
          <h4 className="text-foreground/60 font-medium text-sm">Comment</h4>
          {/* user comment */}
          <div className="flex items-start gap-2 h-full ">
            <div className=" relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={image} alt="user" fill className="object-cover" />
            </div>
            <div className="flex-1 max-h-[200px] overflow-auto ">
              <div className="flex items-end text-sm gap-2 text-wrap">
                <h4 className="font-semibold text-nowrap">Sarah Johnson</h4>
                <span className="text-xs font-semibold text-foreground/50 text-nowrap">
                  2 minutes ago
                </span>
              </div>
              <p className="text-sm text-foreground/80">
                Love the new collection! Will these be available
                internationally? Love the new collection! Will these be
                available internationally? Love the new collection! Will these b
                available internationally? Love the new collection! Will
              </p>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <div className="w-full relative">
          <Input placeholder="Reply to this comment..." />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 cursor-pointer hover:text-primary transition-colors duration-300">
            <BsRobot size={22} />
          </span>
        </div>
        <Button type="submit" size="icon">
          <LuSend />
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default CommentReplyDialog;
