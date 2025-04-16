import { Copy, Terminal } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const APIRequestTabs = () => {
  return (
    <Tabs defaultValue="javascript" className="w-full">
      {/* Tabs selector */}
      <TabsList className="flex h-fit flex-wrap gap-4 rounded-lg bg-transparent">
        <TabsTrigger
          value="javascript"
          className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:border-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
        >
          <Terminal className="h-4 w-4" />
          JavaScript
        </TabsTrigger>

        <TabsTrigger
          value="python"
          className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:border-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
        >
          <Terminal className="h-4 w-4" />
          Python
        </TabsTrigger>

        <TabsTrigger
          value="curl"
          className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 text-sm font-medium text-white transition-colors data-[state=active]:border-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
        >
          <Terminal className="h-4 w-4" />
          cURL
        </TabsTrigger>
      </TabsList>
      {/* JavaScript tab */}
      <TabsContent value="javascript">
        <div className="relative overflow-x-auto rounded-xl bg-gray-900 p-4">
          <pre className="text-sm text-green-400">
            <code>{`const axios = require('axios');

const baseUrl = 'https://api.kidjig.com/provider';

const response = await axios.post(
  \`\${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo\`,
  {
    prompt: "What is the capital of France?",
    stream: false,
    config: {
      temperature: 0.7,
      maxOutputTokens: 4096,
      topP: 1,
      topK: 40
    }
  },
  {
    headers: {
      'X-Api-Key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`}</code>
          </pre>
          <Copy className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </TabsContent>
      {/* Python tab */}
      <TabsContent value="python">
        <div className="relative overflow-x-auto rounded-xl bg-gray-900 p-4">
          <pre className="text-sm text-green-400">
            <code>{`import requests

base_url = 'https://api.kidjig.com/provider'

response = requests.post(
    f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",
    json={
        "prompt": "What is the capital of France?",
        "stream": False,
        "config": {
            "temperature": 0.7,
            "maxOutputTokens": 4096,
            "topP": 1,
            "topK": 40
        }
    },
    headers={
        'X-Api-Key': 'YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)

print(response.json())`}</code>
          </pre>
          <Copy className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </TabsContent>
      {/* Curl tab (scroll fix) */}
      <TabsContent value="curl">
        <div className="relative max-w-full overflow-x-auto rounded-xl bg-gray-900 p-4">
          <pre className="text-sm break-words whitespace-pre-wrap text-green-400">
            <code>{`curl -X POST 'https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo' \\
  -H 'X-Api-Key: YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "prompt": "What is the capital of France?",
    "stream": false,
    "config": {
      "temperature": 0.7,
      "maxOutputTokens": 4096,
      "topP": 1,
      "topK": 40
    }
  }'`}</code>
          </pre>
          <Copy className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default APIRequestTabs;
