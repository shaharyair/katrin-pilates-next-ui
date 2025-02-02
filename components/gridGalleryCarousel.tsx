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
import { type Slide as LightboxSlide } from "yet-another-react-lightbox";

import { siteConfig } from "../config/site";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setLightboxImage } from "../lib/features/gridGalleryCarousel/gridGalleryCarouselSlice";

import { Container } from "./container";
import { EmblaCarousel, EmblaCarouselSlide } from "./emblaCarousel";

const Lightbox = dynamic(() => import("./lightbox/lightbox"));

export const GridGalleryCarousel = () => {
  const lightboxImage = useAppSelector(
    (state) => state.gridGalleryCarousel.lightboxImage,
  );
  const dispatch = useAppDispatch();

  const onLightboxClose = () => {
    dispatch(setLightboxImage(null));
  };

  const lightboxSlides = useMemo<LightboxSlide[]>(() => {
    const images = siteConfig.galleryGridImages.flatMap((arr) =>
      arr.map((item) => ({ src: item.src })),
    );

    return images;
  }, []);

  const currentLightboxIndex = useMemo(() => {
    const index = lightboxSlides.findIndex(
      (slide) => slide.src === lightboxImage?.src,
    );

    return index;
  }, [lightboxSlides, lightboxImage]);

  const isLightBoxOpen = useMemo(
    () => currentLightboxIndex > -1,
    [lightboxImage],
  );

  return (
    <>
      <Lightbox
        close={onLightboxClose}
        index={currentLightboxIndex}
        open={isLightBoxOpen}
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
    <EmblaCarouselSlide className="max-w-lg basis-full">
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
