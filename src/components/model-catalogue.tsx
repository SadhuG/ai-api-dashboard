import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type ModelType = {
  name: string;
  features: string[] | null;
};

const ModelCatalogue = () => {
  const modelList: ModelType[] = [
    {
      name: "Gemini 2.5 Pro",
      features: ["Image", "Search", "PDF", "Reasoning"],
    },
    {
      name: "Gemini 2.0 Flash",
      features: ["Image", "Search", "PDF"],
    },
    {
      name: "Gemini 2.0 Flash Lite",
      features: ["Image", "PDF"],
    },
    {
      name: "GPT 4.1",
      features: ["Image"],
    },
    {
      name: "GPT 4.1 Mini",
      features: ["Image"],
    },
    {
      name: "GPT 4.1 Nano",
      features: ["Image"],
    },
    {
      name: "GPT 4.5",
      features: null,
    },
    {
      name: "o3 Mini",
      features: ["Reasoning"],
    },
    {
      name: "4o",
      features: ["Image"],
    },
    {
      name: "4o Mini",
      features: ["Image"],
    },
    {
      name: "Claude 3.5",
      features: ["Image", "PDF"],
    },
    {
      name: "Claude 3.7",
      features: ["Image", "PDF"],
    },
    {
      name: "Claude 3.7 Reasoning",
      features: ["Image", "PDF", "Reasoning"],
    },
    {
      name: "DeepSeek v3",
      features: [],
    },
    {
      name: "DeepSeek R1",
      features: ["Reasoning"],
    },
    {
      name: "Llama 3.37b",
      features: null,
    },
    {
      name: "Llama 4 Scout",
      features: ["Image"],
    },
    {
      name: "Llama 4 Maverick",
      features: ["Image"],
    },
    {
      name: "Qwen 2.5 32b",
      features: ["Image"],
    },
    {
      name: "Qwen qwq 32b",
      features: ["Reasoning"],
    },
  ];

  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="Image">Image</TabsTrigger>
        <TabsTrigger value="Search">Search</TabsTrigger>
        <TabsTrigger value="PDF">PDF</TabsTrigger>
        <TabsTrigger value="Reasoning">Reasoning</TabsTrigger>
      </TabsList>

      {/* tabs all */}
      <TabsContent
        value="all"
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {modelList.map((model) => (
          <Card key={model.name}>
            <CardContent>
              <div className="flex gap-3">
                {model.features?.map((feature, index) => (
                  <div key={index}>{feature}</div>
                ))}
              </div>
              <div>
                <p>{model.name}</p>
                <Button asChild>
                  <Link href={"#"}>
                    Try {model.name}
                    <ExternalLink />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      {/* tab image */}
      <TabsContent value="Image">
        {modelList.map((model) => {
          if (model.features?.includes("Image")) {
            return (
              <Card key={model.name}>
                <CardContent>
                  <div className="flex gap-3">
                    {model.features?.map((feature, index) => (
                      <div key={index}>{feature}</div>
                    ))}
                  </div>
                  <div>
                    <p>{model.name}</p>
                    <Button asChild>
                      <Link href={"#"}>
                        Try {model.name}
                        <ExternalLink />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}
      </TabsContent>

      {/* tabs search */}
      <TabsContent value="Search">
        {modelList.map((model) => {
          if (model.features?.includes("Search")) {
            return (
              <Card key={model.name}>
                <CardContent>
                  <div className="flex gap-3">
                    {model.features?.map((feature, index) => (
                      <div key={index}>{feature}</div>
                    ))}
                  </div>
                  <div>
                    <p>{model.name}</p>
                    <Button asChild>
                      <Link href={"#"}>
                        Try {model.name}
                        <ExternalLink />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}
      </TabsContent>

      {/* tabs PDF */}
      <TabsContent value="PDF">
        {modelList.map((model) => {
          if (model.features?.includes("PDF")) {
            return (
              <Card key={model.name}>
                <CardContent>
                  <div className="flex gap-3">
                    {model.features?.map((feature, index) => (
                      <div key={index}>{feature}</div>
                    ))}
                  </div>
                  <div>
                    <p>{model.name}</p>
                    <Button asChild>
                      <Link href={"#"}>
                        Try {model.name}
                        <ExternalLink />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}
      </TabsContent>

      {/* tabs reasoning */}
      <TabsContent value="Reasoning">
        {modelList.map((model) => {
          if (model.features?.includes("Reasoning")) {
            return (
              <Card key={model.name}>
                <CardContent>
                  <div className="flex gap-3">
                    {model.features?.map((feature, index) => (
                      <div key={index}>{feature}</div>
                    ))}
                  </div>
                  <div>
                    <p>{model.name}</p>
                    <Button asChild>
                      <Link href={"#"}>
                        Try {model.name}
                        <ExternalLink />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}
      </TabsContent>
    </Tabs>
  );
};

export default ModelCatalogue;
