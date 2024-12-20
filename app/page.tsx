import { Metadata } from "next";

import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "הסטודיו של קאתרין",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
    </div>
  );
}
