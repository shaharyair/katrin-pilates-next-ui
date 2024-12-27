import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.testimonials.title,
  subtitle: siteConfig.testimonials.subtitle,
  classNames: {
    childrenWrapper:
      "w-full grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto",
  },
};

export const Testimonials = () => {
  return (
    <Container>
      <SectionWrapper {...sectionWrapperProps}>
        {siteConfig.testimonials.items.map((item, i) => (
          <TestimonialsCard key={i} {...item} />
        ))}
      </SectionWrapper>
    </Container>
  );
};

const TestimonialsCard = (props: (typeof siteConfig.testimonials.items)[0]) => {
  return (
    <Card
      isHoverable
      classNames={{
        base: "p-4",
        header: "flex gap-3",
        body: "text-right",
      }}
    >
      <CardHeader>
        <div className="flex w-full items-center justify-start gap-4">
          <Avatar size="lg" src={props.avatar} />
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg">{props.name || "example name"}</p>
            <p className="text-gray-500 dark:text-gray-400">{props.job}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <q>{props.text}</q>
      </CardBody>
      <CardFooter />
    </Card>
  );
};
