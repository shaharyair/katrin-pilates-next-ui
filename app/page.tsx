import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contactForm";
import { AboutUs } from "@/components/aboutUs";
import { GridGalleryCarousel } from "@/components/gridGalleryCarousel";
import { ClassOfferings } from "@/components/classOfferings";

export const metadata: Metadata = {
  title: "הסטודיו של קאתרין - דף הבית",
  description: "הסטודיו של קאתרין הוא סטודיו פילאטיס ויוגה ברמת גן",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Benefits />
      <AboutUs />
      <ClassOfferings />
      <GridGalleryCarousel />
      <Testimonials />
      <Faq />
      <ContactForm />
    </div>
  );
}
