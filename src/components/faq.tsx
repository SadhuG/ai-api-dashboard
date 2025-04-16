import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQSection = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-8 md:px-16 lg:px-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-lg text-gray-400">
          Answers to the most common questions about KidJig API.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-3xl space-y-4"
      >
        <AccordionItem
          value="item-1"
          className="rounded-lg border border-gray-800 bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-left text-white hover:bg-gray-800">
            What is Kidjig API?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            KidJig API Provider - your gateway to multiple AI language models
            through a single, unified API interface. Our API allows you to
            interact with various AI models from different providers while
            maintaining a consistent request and response format.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="rounded-lg border border-gray-800 bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-left text-white hover:bg-gray-800">
            How to get started?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            To get started with the KidJig API, please create an account and
            generate your unique API Key. This key will grant you access to our
            powerful AI functionalities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="rounded-lg border border-gray-800 bg-gray-900"
        >
          <AccordionTrigger className="px-4 py-3 text-left text-white hover:bg-gray-800">
            How do I contact support?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            You can reach out to us for support through our Discord community or
            via email founder@kidjig.com. We&apos;re here to help!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
