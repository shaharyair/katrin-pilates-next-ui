import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contactForm";
import { AboutUs } from "@/components/aboutUs";
import { GridGalleryCarousel } from "@/components/galleryGridCarousel";

export const metadata: Metadata = {
  title: "הסטודיו של קאתרין",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Benefits />
      <AboutUs />
      <GridGalleryCarousel />
      <Testimonials />
      <Faq />
      <ContactForm />
    </div>
  );
}
