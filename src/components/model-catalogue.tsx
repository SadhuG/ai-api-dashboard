import {
  BarChart,
  BrainCircuit,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Search,
} from "lucide-react";

import Anthropic from "@/assets/anthropic.svg";
import DeepSeek from "@/assets/deepseek-color.png";
import Google from "@/assets/google.png";
import Meta from "@/assets/meta-color.png";
import OpenAI from "@/assets/openai.png";
import Qwen from "@/assets/qwen-color.png";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type ModelType = {
  name: string;
  features: string[] | null;
  image: StaticImageData;
};

const featureIcons = {
  Image: <ImageIcon className="h-4 w-4 text-indigo-100" />,
  Search: <Search className="h-4 w-4 text-indigo-100" />,
  PDF: <FileText className="h-4 w-4 text-indigo-100" />,
  Reasoning: <BrainCircuit className="h-4 w-4 text-indigo-100" />,
};

const ModelCard = ({ model }: { model: ModelType }) => (
  <Card key={model.name} className="rounded-xl bg-gray-900 shadow-lg">
    <CardContent className="flex h-full flex-col justify-between gap-4 p-5">
      <div className="flex items-center gap-3">
        <Image
          src={model.image}
          alt={model.name}
          width={40}
          height={40}
          className="rounded"
        />
        <p className="text-lg font-semibold text-white md:text-xl">
          {model.name}
        </p>
      </div>

      {model.features?.length ? (
        <div className="flex flex-wrap gap-2">
          {model.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-600/50 px-3 py-1 text-sm font-medium text-white"
            >
              {featureIcons[feature as keyof typeof featureIcons]}
              {feature}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <Button
        asChild
        className="mt-auto w-full truncate border-2 border-indigo-600 bg-indigo-600/50 text-sm font-medium text-white hover:bg-indigo-600/70"
      >
        <Link href="#" className="flex items-center justify-center gap-2">
          Try {model.name}
          <ExternalLink className="h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const ModelCatalogue = () => {
  const modelList: ModelType[] = [
    {
      name: "Gemini 2.5 Pro",
      features: ["Image", "Search", "PDF", "Reasoning"],
      image: Google,
    },
    {
      name: "Gemini 2.0 Flash",
      features: ["Image", "Search", "PDF"],
      image: Google,
    },
    {
      name: "Gemini 2.0 Flash Lite",
      features: ["Image", "PDF"],
      image: Google,
    },
    {
      name: "GPT 4.1",
      features: ["Image"],
      image: OpenAI,
    },
    {
      name: "GPT 4.1 Mini",
      features: ["Image"],
      image: OpenAI,
    },
    {
      name: "GPT 4.1 Nano",
      features: ["Image"],
      image: OpenAI,
    },
    {
      name: "GPT 4.5",
      features: null,
      image: OpenAI,
    },
    {
      name: "o3 Mini",
      features: ["Reasoning"],
      image: OpenAI,
    },
    {
      name: "4o",
      features: ["Image"],
      image: OpenAI,
    },
    {
      name: "4o Mini",
      features: ["Image"],
      image: OpenAI,
    },
    {
      name: "Claude 3.5",
      features: ["Image", "PDF"],
      image: Anthropic,
    },
    {
      name: "Claude 3.7",
      features: ["Image", "PDF"],
      image: Anthropic,
    },
    {
      name: "Claude 3.7 Reasoning",
      features: ["Image", "PDF", "Reasoning"],
      image: Anthropic,
    },
    {
      name: "DeepSeek v3",
      features: [],
      image: DeepSeek,
    },
    {
      name: "DeepSeek R1",
      features: ["Reasoning"],
      image: DeepSeek,
    },
    {
      name: "Llama 3.37b",
      features: null,
      image: Meta,
    },
    {
      name: "Llama 4 Scout",
      features: ["Image"],
      image: Meta,
    },
    {
      name: "Llama 4 Maverick",
      features: ["Image"],
      image: Meta,
    },
    {
      name: "Qwen 2.5 32b",
      features: ["Image"],
      image: Qwen,
    },
    {
      name: "Qwen qwq 32b",
      features: ["Reasoning"],
      image: Qwen,
    },
  ];

  const tabTypes = ["all", "Image", "Search", "PDF", "Reasoning"] as const;

  return (
    <section>
      <div>
        <h2 className="mb-4 text-center text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
          Explore Available Models
        </h2>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex h-fit flex-wrap gap-4 rounded-lg bg-transparent">
          <TabsTrigger
            value="all"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            <BarChart className="h-4 w-4" />
            All
          </TabsTrigger>
          <TabsTrigger
            value="Image"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            <ImageIcon className="h-4 w-4" />
            Image
          </TabsTrigger>
          <TabsTrigger
            value="Search"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            <Search className="h-4 w-4" />
            Search
          </TabsTrigger>
          <TabsTrigger
            value="PDF"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            <FileText className="h-4 w-4" />
            PDF
          </TabsTrigger>
          <TabsTrigger
            value="Reasoning"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            <BrainCircuit className="h-4 w-4" />
            Reasoning
          </TabsTrigger>
        </TabsList>

        {tabTypes.map((tab) => (
          <TabsContent
            key={tab}
            value={tab}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {modelList
              .filter((model) => tab === "all" || model.features?.includes(tab))
              .map((model) => (
                <ModelCard key={model.name} model={model} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ModelCatalogue;
