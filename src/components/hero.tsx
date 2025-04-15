import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      <div className="flex h-full w-full items-center justify-center bg-[#03030b]/50 p-10">
        <div className="flex w-[70%] flex-col text-center text-white">
          <h1 className="text-8xl font-bold">Enterprise AI Gateway</h1>
          <p className="mt-3 text-lg">
            Unify, secure, and scale your enterprise AI infrastructure through a
            single, powerful gateway. Access and manage multiple AI providers
            with enterprise-grade security.
          </p>
          <div className="mx-auto mt-8 flex gap-3">
            <Button>Get API Key</Button>
            <Button>Schedule Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
