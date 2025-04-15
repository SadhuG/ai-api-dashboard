import React from "react";

const LogoBanner = () => {
  const companies = [
    {
      name: "Google",
      image: "",
    },
    {
      name: "Anthropic",
      image: "",
    },
    {
      name: "Mistral",
      image: "",
    },
    {
      name: "Meta AI",
      image: "",
    },
    {
      name: "Open AI",
      image: "",
    },
    {
      name: "Qwen",
      image: "",
    },
    {
      name: "DeepSeek",
      image: "",
    },
  ];
  return (
    <div className="max-w-full py-12">
      <div className="relative mx-auto overflow-hidden">
        <div className="flex">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {companies.map((company) => (
              <div key={company.name} className="mx-4 flex-none">
                <span className="text-2xl font-bold">{company.name}</span>
              </div>
            ))}
          </div>
          <div className="animate-scroll-left flex whitespace-nowrap">
            {companies.map((company) => (
              <div key={company.name} className="mx-4 flex-none">
                <span className="text-2xl font-bold">{company.name}</span>
              </div>
            ))}
          </div>
          <div className="animate-scroll-left flex whitespace-nowrap">
            {companies.map((company) => (
              <div key={company.name} className="mx-4 flex-none">
                <span className="text-2xl font-bold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
