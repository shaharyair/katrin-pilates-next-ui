import { Image } from "@heroui/image";
import NextImage from "next/image";

import { siteConfig } from "../config/site";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

const sectionWrapperProps = {
  title: siteConfig.aboutUs.title,
  subtitle: siteConfig.aboutUs.subtitle,
  classNames: {
    childrenWrapper:
      "flex flex-col-reverse items-center justify-between gap-12 lg:grid lg:grid-cols-2 lg:gap-24",
  },
};

export const AboutUs = () => {
  return (
    <Container id="studio">
      <SectionWrapper {...sectionWrapperProps}>
        <div className="flex flex-col gap-6">
          {siteConfig.aboutUs.text.map((text, index) => (
            <p
              key={`about_us_paragraph_${index}`}
              className="text-lg leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
        <Image
          isBlurred
          alt="about us example"
          as={NextImage}
          className="object-cover"
          height={400}
          loading="lazy"
          src="/hero/example.jpg"
          width={650}
        />
      </SectionWrapper>
    </Container>
  );
};
