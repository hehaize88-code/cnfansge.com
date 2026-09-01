"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return <Accordion type="single" collapsible className="faq-list">{items.map((item, index) => <AccordionItem value={`item-${index}`} key={item.q}><AccordionTrigger>{item.q}</AccordionTrigger><AccordionContent>{item.a}</AccordionContent></AccordionItem>)}</Accordion>;
}
