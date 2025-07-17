import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import UnderlineLink from "@/components/underline-link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen ">
      {/* header */}
      <div className="flex flex-col gap-2 w-full md:max-w-[500px] m-6 md:m-20 md:mt-[60px] px-5">
      <header className="w-full max-w-xl flex justify-between items-center">
        <h1 className="text-3xl font-bold ">Devin Liu</h1>
        <div className="flex items-center gap-3">
          
          <Link href="https://docs.google.com/document/d/1vwbNC7WgtRsSaZw74gMA3fxJyUoVVkAXYkN0ixg5kBg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-primary">[resume]</Link>
          <ModeToggle/>
        </div>
      </header>
      <p className="  text-left text-secondary">Hey, I'm Devin! I'm  
        <Tooltip>
          <TooltipTrigger><b className="px-1 rounded-md bg-slate-200 dark:bg-slate-800">17</b></TooltipTrigger>
          <TooltipContent>March 21, 2008</TooltipContent>
        </Tooltip>
          and currently a senior at <b>Monte Vista High School</b> (Danville, CA)</p>
      <p className="text-secondary">i'm a developer, wrestler, soon-to-be eagle scout, and go to the gym (225 bench otw)</p>
      <section className="">
          
          
          <h2 className="text-xl font-semibold mb-2">what im doing:</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
          <li>building new things</li>
          <li>winning hackathons at <UnderlineLink href="https://devpost.com/software/flamesense">los altos hacks</UnderlineLink>, <UnderlineLink href="https://devpost.com/software/callsense-jo4hg3">milpitas hacks</UnderlineLink>, and <UnderlineLink href="https://lu.ma/hacknight-at-github-07-08-25">hack night @ github</UnderlineLink></li>
            <li>helping my teachers automate grading</li>
            <li><UnderlineLink href="https://feed-fwd.org">feed forward</UnderlineLink> — food rescue org, 5k lbs+ produce donated <i>(ongoing)</i></li>
            <li>social media — managed team of 2 pushing daily videos to 10k followers (20m views, $6k/m in &lt;2months) </li>
            <li>ecom — ran stores, built & sold tools for other store owners to find & contact affiliates</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
