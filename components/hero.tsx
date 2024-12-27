import { Button } from "@nextui-org/button";
import Image from "next/image";

import { SectionWrapper } from "./sectionWrapper";
import { Container } from "./container";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.hero.title,
  subtitle: siteConfig.hero.subtitle,
  size: "sm" as "sm",
  classNames: {
    root: "w-full gap-6 md:gap-10",
    subtitle: "!mt-0",
    childrenWrapper: "!mt-1",
  },
};

export const Hero = () => {
  return (
    <section
      className="relative flex h-[100svh] w-full flex-col items-center justify-center"
      id="hero"
    >
      <Image
        alt="hero example"
        className="size-full object-cover brightness-[40%]"
        height={1080}
        src="/hero/example.jpg"
        width={1920}
      />

      <Container className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SectionWrapper {...sectionWrapperProps}>
          <div className="flex items-center justify-center gap-3">
            <Button color="primary" href={"#"}>
              {siteConfig.hero.primaryAction}
            </Button>
            <Button color="secondary" href={"#"}>
              {siteConfig.hero.secondaryAction}
            </Button>
          </div>
        </SectionWrapper>
      </Container>
    </section>
  );
};
