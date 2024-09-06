import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 ">
      <div className="container relative">
        <section id="home" className="relative">
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs cursor-pointer hover:border-sky-500 hover:bg-slate-800  transition-all rounded-3xl">
                new features is now available.
                <ArrowRightCircle className="w-4 h-4 inline ml-1" />
              </p>
              <Heading title={"A CRM dashboard for engineering teams"} />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
