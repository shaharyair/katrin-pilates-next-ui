"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.faq.title,
};

export const Faq = () => {
  return (
    <Container>
      <SectionWrapper {...sectionWrapperProps}>
        <Accordion selectionMode="multiple">
          {siteConfig.faq.items.map((item, i) => (
            <AccordionItem
              key={`faq_item_${i}`}
              classNames={{ base: "text-right" }}
              title={item.question}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </SectionWrapper>
    </Container>
  );
};
