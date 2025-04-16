import React from "react";

import Anthropic from "@/assets/anthropic.svg";
import DeepSeek from "@/assets/deepseek-color.png";
import Google from "@/assets/google.png";
import Meta from "@/assets/meta-color.png";
import Mistral from "@/assets/mistral-color.png";
import OpenAI from "@/assets/openai.png";
import Qwen from "@/assets/qwen-color.png";
import Image from "next/image";

const LogoBanner = () => {
  const companies = [
    {
      name: "Google",
      image: Google,
    },
    {
      name: "Anthropic",
      image: Anthropic,
    },
    {
      name: "Mistral",
      image: Mistral,
    },
    {
      name: "Meta AI",
      image: Meta,
    },
    {
      name: "Open AI",
      image: OpenAI,
    },
    {
      name: "Qwen",
      image: Qwen,
    },
    {
      name: "DeepSeek",
      image: DeepSeek,
    },
  ];
  return (
    <div className="max-w-full overflow-hidden py-12">
      <div className="relative w-full">
        <div className="animate-scroll-left flex w-max gap-8">
          {Array(3)
            .fill(companies)
            .flat()
            .map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center gap-3"
              >
                <Image
                  src={company.image}
                  alt={`Logo ${company.name}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-medium whitespace-nowrap text-white md:text-2xl">
                  {company.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
