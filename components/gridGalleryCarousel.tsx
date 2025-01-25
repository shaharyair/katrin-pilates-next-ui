"use client";

import dynamic from "next/dynamic";
import NextImage from "next/image";
import { useMemo } from "react";
import {
  Gallery,
  GalleryProps,
  Image,
  ThumbnailImageProps,
} from "react-grid-gallery";

import { siteConfig } from "../config/site";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setLightboxImage } from "../features/lightbox/lightboxSlice";

import { Container } from "./container";
import { EmblaCarousel, EmblaCarouselSlide } from "./emblaCarousel";

const Lightbox = dynamic(() => import("./lightbox/lightbox"));

export const GridGalleryCarousel = () => {
  const lightbox = useAppSelector((state) => state.lightbox.value);
  const dispatch = useAppDispatch();

  const onLightboxClose = () => {
    dispatch(setLightboxImage(null));
  };

  const lightboxSlides = useMemo(() => {
    const images = siteConfig.galleryGridImages.flatMap((arr) =>
      arr.map((item) => ({ src: item.src })),
    );

    return images;
  }, []);

  const currentLightboxIndex = useMemo(() => {
    const index = lightboxSlides.findIndex(
      (slide) => slide.src === lightbox?.src,
    );

    return index;
  }, [lightboxSlides, lightbox]);

  return (
    <>
      <Lightbox
        close={onLightboxClose}
        index={currentLightboxIndex}
        open={!!lightbox}
        slides={lightboxSlides}
      />
      <Container className="max-w-none px-0 drop-shadow-sm" id="gallery">
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
  const dispatch = useAppDispatch();

  const handleImageClick = (index: number, image: Image) => {
    dispatch(setLightboxImage(image));
  };

  return (
    <EmblaCarouselSlide className="basis-full sm:basis-1/2 lg:basis-1/3">
      <Gallery
        enableImageSelection={false}
        images={props.images}
        margin={1}
        maxRows={2}
        thumbnailImageComponent={thumbnailImageComponent}
        onClick={handleImageClick}
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
