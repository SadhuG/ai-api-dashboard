import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

import EasyToIntgr from "@/assets/easy-to-intgr.png";
import Graph from "@/assets/graph-pic.svg";
import { ChartNoAxesColumnIncreasing, Settings } from "lucide-react";

const Features = () => {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <Card>
        <CardHeader>
          <Settings />
          Simple Integration
        </CardHeader>
        <CardContent>
          <div className="h-full w-full">
            <Image src={EasyToIntgr} alt="Simple Integration" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <ChartNoAxesColumnIncreasing />
          Infinite Scalability
        </CardHeader>
        <CardContent>
          <div className="h-full w-full border-b border-l border-gray-600">
            <Image src={Graph} alt="Infinite Scalability" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Features;
