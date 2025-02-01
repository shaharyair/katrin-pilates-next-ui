import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.classOfferings.title,
  subtitle: siteConfig.classOfferings.subtitle,
  classNames: {
    childrenWrapper: "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto",
  },
};

export const ClassOfferings = () => {
  return (
    <Container id="class-offerings">
      <SectionWrapper {...sectionWrapperProps}>
        {siteConfig.classOfferings.items.map((item, i) => (
          <ClassOfferingsItem key={i} {...item} />
        ))}
      </SectionWrapper>
    </Container>
  );
};

const ClassOfferingsItem = (
  props: (typeof siteConfig.classOfferings.items)[0],
) => {
  return (
    <Card
      isHoverable
      classNames={{
        base: "p-4",
        body: "text-center flex flex-col gap-2",
      }}
    >
      <CardHeader>
        <Image
          isZoomed
          alt={props.title}
          as={NextImage}
          classNames={{
            wrapper: "size-full !max-w-none",
            img: "size-full object-cover object-center",
          }}
          height={450}
          src={props.image}
          width={450}
        />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <div className="flex flex-col items-center justify-center gap-1">
          {props.text.map((item, index) => (
            <p key={`${index}`} className="text-lg">
              {item}
            </p>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
