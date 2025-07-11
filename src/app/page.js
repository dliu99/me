import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
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
        <h1 className="text-4xl font-bold ">Devin Liu</h1>
        <div className=""><ModeToggle/></div>
      </header>
      <p className="  text-left text-secondary">Hey, I'm Devin! I'm  
        <Tooltip>
          <TooltipTrigger><b className="px-1 rounded-md bg-slate-200 dark:bg-slate-800">17</b></TooltipTrigger>
          <TooltipContent>March 21, 2008</TooltipContent>
        </Tooltip>
          and currently a senior at <b>Monte Vista High School</b> (Danville, CA)</p>
      <p className="text-secondary">i'm a wrestler, life scout, and 190lb bench haver :p</p>
      <section className="">
          
          
          <h2 className="text-xl font-semibold mb-2">what im doing:</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
          <li><a className="line-through">startup bro larping</a> building <Link href="https://metrics.cx" target="_blank" className="text-primary bg-gradient-to-r from-primary to-primary
      bg-no-repeat [background-position:0_95%]
      [background-size:100%_0.05em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_0.15em]
      focus:[background-size:100%_0.15em]">metrics.cx</Link></li>
          <li>winning hackathons (3 for 3!)</li>
            <li>helping my teachers automate grading <i>(ongoing)</i></li>
            <li><Link href="https://feed-fwd.org" target="_blank" className="text-primary bg-gradient-to-r from-primary to-primary
      bg-no-repeat [background-position:0_97%]
      [background-size:100%_0.05em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_0.15em]
      focus:[background-size:100%_0.15em]">feed forward</Link> — food rescue org, 5k lbs+ produce donated <i>(ongoing)</i></li>
            <li>social media — managed team pushing daily videos to 10k followers (20m views, $6k/m in &lt;2months) </li>
            <li>ecom — ran stores on shopify, etsy & tiktok shop sellin everything from <Link href="https://web.archive.org/web/20230712232415/https://beamblade.shop/" target="_blank" className="text-primary bg-gradient-to-r from-primary to-primary
      bg-no-repeat [background-position:0_97%]
      [background-size:100%_0.05em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_0.15em]
      focus:[background-size:100%_0.15em]">epilators</Link> to hair growth oils to <Link href="https://www.etsy.com/shop/bloomweaveco" target="_blank" className="text-primary bg-gradient-to-r from-primary to-primary
      bg-no-repeat [background-position:0_97%]
      [background-size:100%_0.05em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_0.15em]
      focus:[background-size:100%_0.15em]">crochet flowers</Link> (5 figs rev.)</li>
            <ul className="pl-3 space-y-1 text-secondary">
            <li >- also built & sold tools for other store owners to find & contact affiliates</li>
            </ul>
          </ul>
        </section>

      </div>
    </div>
  );
}
