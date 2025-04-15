import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const APIRequestTabs = () => {
  return (
    <Tabs defaultValue="javascript">
      <TabsList>
        <TabsTrigger value="javascript">&gt;_ JavaScript</TabsTrigger>
        <TabsTrigger value="python">&gt;_ Python</TabsTrigger>
        <TabsTrigger value="curl">&gt;_ Curl</TabsTrigger>
      </TabsList>
      <TabsContent value="javascript">
        <pre>
          <code>{`const axios = require('axios');

// Base URL for all API calls
const baseUrl = 'https://api.kidjig.com/provider';

// Example: Chat completion with GPT-3.5
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

console.log(response.data);
// {
//   success: true,
//   statusCode: 200,
//   message: "Completion generated successfully",
//   data: {
//     id: "msg_xyz123",
//     model: "gpt-3.5-turbo",
//     content: "The capital of France is Paris.",
//     usage: {
//       promptTokens: 12,
//       completionTokens: 180,
//       totalTokens: 192
//     },
//     cost: 0.006
//   }
// }`}</code>
        </pre>
      </TabsContent>
      <TabsContent value="python">
        <pre>
          <code>{`import requests

# Base URL for all API calls
base_url = 'https://api.kidjig.com/provider'

# Example: Chat completion with GPT-3.5
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

print(response.json())
# {
#   "success": True,
#   "statusCode": 200,
#   "message": "Completion generated successfully",
#   "data": {
#     "id": "msg_xyz123",
#     "model": "gpt-3.5-turbo",
#     "content": "The capital of France is Paris.",
#     "usage": {
#       "promptTokens": 12,
#       "completionTokens": 180,
#       "totalTokens": 192
#     },
#     "cost": 0.006
#   }
# }`}</code>
        </pre>
      </TabsContent>
      <TabsContent value="curl">
        <pre>
          <code>{`curl -X POST 'https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo' 
  -H 'X-Api-Key: YOUR_API_KEY' 
  -H 'Content-Type: application/json' 
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
      </TabsContent>
    </Tabs>
  );
};

export default APIRequestTabs;
