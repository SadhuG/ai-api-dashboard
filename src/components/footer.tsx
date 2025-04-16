import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProductHuntFeatured from "@/assets/featured.svg";
import KidjgLogo from "@/assets/kidjig-logo.png";
import MicrosoftLogo from "@/assets/microsoft.svg";

const Footer = () => {
  return (
    <footer className="bg-background/50 border-border border-t backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-2">
              <Image src={KidjgLogo} alt="kidjig" className="h-10 w-10" />
              <span className="text-foreground text-lg font-semibold">
                Kidjig
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-sm">
              Building the future of AI Products. Empowering creators and
              developers with powerful AI tools.
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Link
                href="https://twitter.com/kidjigtech"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/kidjig"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/company/kidjigtech"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contact@kidjig.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://discord.gg/ptXkdZ72UW"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* discord icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="bg-accent/30 flex items-center gap-4 rounded-lg p-4">
                <Image
                  src={MicrosoftLogo}
                  alt="Microsoft"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col">
                  <h3 className="text-foreground text-sm font-semibold">
                    Microsoft Startup
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Founders Hub Member
                  </p>
                </div>
              </div>
              <div className="bg-accent/30 rounded-lg p-4">
                <Link
                  href="https://www.producthunt.com/posts/kidjig-api-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-90"
                >
                  <Image
                    src={ProductHuntFeatured}
                    alt="Kidjig API Platform - Your AI API marketplace for seamless integration | Product Hunt"
                    height="54"
                    className="h-[54px] w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="bg-accent/30 rounded-lg p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-sm font-medium text-transparent">
                    Public Beta
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Join our early access program and shape the future of AI APIs
                </p>
                <Link
                  href="https://discord.gg/ptXkdZ72UW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-purple-600"
                >
                  {/* discord icon */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>
                  Join Discord Community
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-border justify-between border-t py-6 md:flex">
          <p className="text-muted-foreground text-center text-sm">
            © 2025 Kidjig. All rights reserved.
          </p>
          <div className="flex items-center justify-center-safe gap-3 underline">
            <Link
              href="https://kidjig.com/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://kidjig.com/terms-conditions"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
