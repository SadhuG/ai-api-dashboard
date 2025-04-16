import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(138,0,192,0.5)_0%,rgba(18,18,18,0.5)_100%)] p-6 backdrop-blur-[2px]">
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="flex w-full max-w-4xl flex-col px-4 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
            Enterprise AI Gateway
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Unify, secure, and scale your enterprise AI infrastructure through a
            single, powerful gateway. Access and manage multiple AI providers
            with enterprise-grade security.
          </p>
          <div className="mx-auto mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant={"primary"}>Get API Key</Button>
            <Button variant={"primary"}>Schedule Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
