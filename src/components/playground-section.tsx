import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import PlaygroundImage from "@/assets/pg-image.png";

const PlayGroundSection = () => {
  return (
    <section className="flex">
      <div className="h-full w-full">
        <h2>CREATE PLAY INNOVATE</h2>
        <p>Explore in our playground and Discover AI in a new light</p>
        <Button asChild>
          <Link href={"#"}>Go to Playground</Link>
        </Button>
      </div>
      <div className="h-full w-full">
        <Image
          src={PlaygroundImage}
          alt={"Image of playground dashboard"}
        />{" "}
      </div>
    </section>
  );
};

export default PlayGroundSection;
