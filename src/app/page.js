import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col justify-center items-center min-h-screen ">
      {/* header */}
      <div className="flex flex-col gap-2 w-full md:max-w-[500px] m-6 md:m-20 md:mt-[60px] px-5">
      <header className="w-full max-w-xl flex justify-between items-center">
        <h1 className="text-4xl font-bold ">Devin Liu</h1>
        <div className=""><ModeToggle/></div>
      </header>
      <p className=" italic text-left text-secondary">17, junior @ Monte Vista High School (Danville, CA)</p>
      <p className="text-secondary">wrestling, life scout, 185 bench</p>
      <section className="">
          
          
          <h2 className="text-xl font-semibold mb-2">my projects:</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>helping my teachers grade with ai <i>(ongoing)</i></li>
            <li><Link href="https://feed-fwd.org" className="text-primary bg-gradient-to-r from-primary to-primary
      bg-no-repeat [background-position:0_97%]
      [background-size:100%_0.05em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_0.15em]
      focus:[background-size:100%_0.15em]">feed forward</Link> — food rescue org, 1k lbs+ produce donated <i>(ongoing)</i></li>
            <li>social media — managed team pushing daily videos to 10k followers (20m views, $6k mrr in &lt;2months) </li>
            <li>ecom — ran stores on shopify and tiktok shop, built tools for other store owners to find & contact affiliates (5 figures rev.)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
