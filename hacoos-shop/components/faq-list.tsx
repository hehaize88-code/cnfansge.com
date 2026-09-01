"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqByLocale, type Locale } from "@/lib/site";

export function FaqList({ locale, limit }: { locale: Locale; limit?: number }) {
  return (
    <Accordion type="multiple" className="faq-list">
      {faqByLocale[locale].slice(0, limit).map((item, index) => (
        <AccordionItem value={`faq-${index}`} key={item.q}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent><p>{item.a}</p></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
