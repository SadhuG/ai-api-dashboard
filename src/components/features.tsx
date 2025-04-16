import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

import EasyToIntgr from "@/assets/easy-to-intgr.png";
import Graph from "@/assets/graph-pic.svg";
import { ChartNoAxesColumnIncreasing, Settings } from "lucide-react";

const Features = () => {
  return (
    <section className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:p-12">
      <Card className="rounded-2xl bg-gray-900">
        <CardHeader className="text-foreground flex flex-col gap-3 text-xl font-semibold">
          <Settings className="h-10 w-10 text-indigo-400" />
          <span>Simple Integration</span>
          <p className="text-sm font-normal">
            Simply change the endpoints in your existing setup, and you're ready
            to go.
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-full w-full">
            <Image src={EasyToIntgr} alt="Simple Integration" />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl bg-gray-900">
        <CardHeader className="text-foreground flex flex-col gap-3 text-xl font-semibold">
          <ChartNoAxesColumnIncreasing className="h-10 w-10 text-indigo-400" />
          <span>Infinite Scalability</span>
          <p className="text-sm font-normal">
            Experience low latency with our AI API, deploy instantly, and
            surpass rate limits without impact.
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-full w-full">
            <div className="h-full w-full border-b border-l border-gray-600">
              <Image src={Graph} alt="Infinite Scalability" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Features;
