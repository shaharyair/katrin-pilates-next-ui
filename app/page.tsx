import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "הסטודיו של קאתרין",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Testimonials />
    </div>
  );
}
