import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQSection = () => {
  return (
    <section>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Kidjig API?</AccordionTrigger>
          <AccordionContent>
            KidJig API Provider - your gateway to multiple AI language models
            through a single, unified API interface. Our API allows you to
            interact with various AI models from different providers while
            maintaining a consistent request and response format.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How to get started?</AccordionTrigger>
          <AccordionContent>
            To get started with the KidJig API, please create an account and
            generate your unique API Key. This key will grant you access to our
            powerful AI functionalities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach out to us for support through our Discord community or
            via email founder@kidjig.com. We're here to help!{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
