import { Copy, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import APIRequestTabs from "./api-request-tabs";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// ✅ Steps data extracted for clarity
const steps = [
  {
    title: "Step 1",
    link: "Create Account",
    href: "#",
    desc: "Sign up and create your account to get started with Kidjig API",
  },
  {
    title: "Step 2",
    link: "Get Your API Key",
    href: "#",
    desc: "Generate your API key right in your dashboard",
  },
  {
    title: "Step 3",
    link: "Make API Calls",
    href: "#",
    desc: "Use our API to make calls to the AI of your choice",
  },
];

const QuickStart = () => {
  return (
    <section className="w-full px-4 py-12 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-3xl font-bold text-white">Let's Get You Started</h2>
        <Button asChild>
          <Link href={"#"} className="flex items-center gap-2 underline">
            Docs: Quick Start <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Steps */}
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              {step.title}: <br />
              <Link href={step.href} className="underline">
                {step.link}
              </Link>
            </h3>
            <p className="text-sm text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Outro */}
      <div className="mt-10 space-y-4">
        <p className="text-gray-300">
          Now, you are set to go. To learn more, read our docs.
        </p>
        <Button asChild>
          <Link href={"#"} className="flex items-center gap-2 underline">
            Read Full Docs <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* API Call Section */}
      <div className="mt-16 space-y-10">
        <h2 className="text-3xl font-bold text-white">
          Make Your First API Call
        </h2>

        {/* Base URL */}
        <div>
          <h3 className="mb-2 text-lg font-medium text-white">Base URL</h3>
          <Card className="bg-gray-900 p-4">
            <CardContent className="flex items-center justify-between overflow-auto px-4 py-3 font-mono text-sm whitespace-nowrap text-green-400">
              https://api.kidjig.com/provider
              <Copy className="text-foreground ml-4 h-4 w-4 cursor-pointer" />
            </CardContent>
          </Card>
        </div>

        {/* Authorization */}
        <div>
          <h3 className="mb-2 text-lg font-medium text-white">Authorization</h3>
          <Card className="bg-gray-900 p-4">
            <CardContent className="space-y-4 px-4 py-3 text-gray-100">
              <span>
                Include your API key in the <code>X-Api-Key</code> header for
                all requests:
              </span>
              <Card className="mt-3 w-fit bg-blue-700 p-1 text-white">
                <CardContent className="px-4 py-2 font-mono text-sm">
                  X-Api-Key: YOUR_API_KEY
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Code Tabs */}
        <div>
          <h3 className="mb-2 text-lg font-medium text-white">Request:</h3>
          <APIRequestTabs />
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
