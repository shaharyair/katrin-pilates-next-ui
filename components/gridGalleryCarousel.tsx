"use client";

import NextImage from "next/image";
import { Gallery, GalleryProps, ThumbnailImageProps } from "react-grid-gallery";

import { siteConfig } from "../config/site";

import { Container } from "./container";
import { EmblaCarousel, EmblaCarouselSlide } from "./emblaCarousel";

export const GridGalleryCarousel = () => {
  return (
    <>
      <Container className="max-w-none px-0 drop-shadow-sm">
        <EmblaCarousel
          options={{ loop: true, slidesToScroll: "auto", displayButtons: true }}
        >
          {siteConfig.galleryGridImages.map((images, index) => (
            <Slide key={`gallery_carousel_slide-${index}`} images={images} />
          ))}
        </EmblaCarousel>
      </Container>
    </>
  );
};

export const Slide = (props: GalleryProps) => {
  return (
    <EmblaCarouselSlide className="basis-full sm:basis-1/2 lg:basis-1/3">
      <Gallery
        enableImageSelection={false}
        images={props.images}
        margin={1}
        maxRows={2}
        thumbnailImageComponent={thumbnailImageComponent}
      />
    </EmblaCarouselSlide>
  );
};

export const thumbnailImageComponent = (props: ThumbnailImageProps) => {
  return (
    <NextImage
      alt={props.imageProps.alt}
      className="size-full object-cover"
      height={500}
      loading="lazy"
      src={props.imageProps.src}
      width={500}
    />
  );
};
