import PlaygroundImage from "@/assets/pg-image.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const PlayGroundSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-12 lg:px-20">
      {/* Text Content */}
      <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
        <h2 className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
          CREATE. PLAY. INNOVATE.
        </h2>
        <p className="text-lg text-gray-300 sm:text-xl">
          Explore in our playground and discover AI in a new light.
        </p>
        <Button
          asChild
          className="bg-indigo-600 text-white hover:bg-indigo-500"
        >
          <Link href={"#"}>Go to Playground</Link>
        </Button>
      </div>

      {/* Image Content */}
      <div className="flex w-full justify-center md:w-1/2">
        <Image
          src={PlaygroundImage}
          alt="Image of playground dashboard"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default PlayGroundSection;
