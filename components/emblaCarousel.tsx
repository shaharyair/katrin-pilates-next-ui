"use client";

import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface EmblaCarouselProps {
  options?: EmblaOptionsType & { displayButtons?: boolean };
  children: React.ReactNode;
}

interface EmblaCarouselSlideProps {
  className?: string;
  children: React.ReactNode;
}

export const EmblaCarousel = (props: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...props?.options,
    direction: "rtl",
  });

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  return (
    <section className="relative w-full">
      <div ref={emblaRef} className="touch-pan-y overflow-hidden">
        <div className="flex">{props.children}</div>
      </div>
      {props.options?.displayButtons && (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Button isIconOnly className="opacity-60" onPress={scrollNext}>
              <ChevronLeftIcon className="size-8" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Button isIconOnly className="opacity-60" onPress={scrollPrev}>
              <ChevronRightIcon className="size-8" />
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export const EmblaCarouselSlide = (props: EmblaCarouselSlideProps) => {
  return (
    <div
      className={clsx(
        "m-0 min-w-0 flex-shrink-0 flex-grow-0 basis-full",
        props.className || "",
      )}
    >
      {props.children}
    </div>
  );
};
