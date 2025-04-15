import { Copy, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import APIRequestTabs from "./api-request-tabs";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const QuickStart = () => {
  return (
    <section>
      {/* Heading */}
      <div>
        <h2>Let's Get You Started</h2>
        <Button asChild>
          <Link href={"#"} className="underline">
            Docs:Quick Start
          </Link>
        </Button>
      </div>

      {/* Steps */}
      <div>
        <div>
          <h3>
            Step 1:{" "}
            <Link href={"#"} className="underline">
              Create Account
            </Link>
          </h3>
          <p>Sign up and create your account to get started with Kidjig API</p>
        </div>
        <div>
          <h3>
            Step 2:{" "}
            <Link href={"#"} className="underline">
              Get Your API Key
            </Link>
          </h3>
          <p>Generate your API key right in your dashboard</p>
        </div>
        <div>
          <h3>
            Step 3:{" "}
            <Link href={"#"} className="underline">
              Make API Calls
            </Link>
          </h3>
          <p>Use our API to make calls to the AI of your choice</p>
        </div>

        {/* steps outro to docs */}
        <div>
          <p>Now, you are set to go. To learn more read our docs.</p>
          <Button asChild>
            <Link href={"#"} className="underline">
              Full Docs{" "}
              <span>
                <ExternalLink />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <div>
        <h2>Make Your First API Call</h2>
        <div>
          <h3>Base URL</h3>
          <Card>
            <CardContent className="flex justify-between">
              <span className="font-mono">https://api.kidjig.com/provider</span>
              <Copy />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3>Authorization</h3>
          <Card>
            <CardContent>
              <span>
                Include your API key in the X-Api-Key header for all requests:
              </span>
              <Card className="w-fit">
                <CardContent>X-Api-Key: YOUR_API_KEY</CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3>Request:</h3>
          <APIRequestTabs />
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
