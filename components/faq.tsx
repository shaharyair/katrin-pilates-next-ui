"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig.faq.title,
};

export const Faq = () => {
  return (
    <Container id="faq">
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
