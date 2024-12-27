import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.benefits.title,
  classNames: {
    childrenWrapper:
      "w-full grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto",
  },
};

export const Benefits = () => {
  return (
    <Container>
      <SectionWrapper {...sectionWrapperProps}>
        {siteConfig.benefits.items.map((item, i) => (
          <BenefitsCard key={i} {...item} />
        ))}
      </SectionWrapper>
    </Container>
  );
};

const BenefitsCard = (props: (typeof siteConfig.benefits.items)[0]) => {
  const iconWithProps = React.cloneElement(props.icon, {
    width: 40,
    height: 40,
  });

  return (
    <Card
      isHoverable
      classNames={{
        base: "p-4",
        header: "flex justify-center",
        body: "text-center",
      }}
    >
      <CardHeader>{iconWithProps}</CardHeader>
      <CardBody>
        <p>{props.text}</p>
      </CardBody>
    </Card>
  );
};
