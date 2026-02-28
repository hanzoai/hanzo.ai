export interface Integration {
  slug: string
  name: string
  description: string
  category: 'sdk' | 'framework' | 'platform' | 'infra' | 'language'
  icon: string
  examples: { lang: string; label: string; code: string }[]
  upstream: string
  creator: string
  creatorUrl: string
  license: string
}

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'openai-sdk',
    name: 'OpenAI Python SDK',
    description: 'Use the official OpenAI Python SDK with Hanzo AI by pointing it to our OpenAI-compatible API endpoint. Access 390+ models with your existing OpenAI code — no refactor needed.',
    category: 'sdk',
    icon: '🐍',
    upstream: 'https://github.com/openai/openai-python',
    creator: 'OpenAI',
    creatorUrl: 'https://openai.com',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'Install & configure',
        code: `pip install openai

from openai import OpenAI

client = OpenAI(
    api_key="your-hanzo-api-key",
    base_url="https://api.hanzo.ai/v1",
)

response = client.chat.completions.create(
    model="zen4-pro",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)`,
      },
      {
        lang: 'python',
        label: 'Streaming',
        code: `stream = client.chat.completions.create(
    model="openai/gpt-4.1",
    messages=[{"role": "user", "content": "Write a haiku"}],
    stream=True,
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")`,
      },
      {
        lang: 'python',
        label: 'Vision model',
        code: `response = client.chat.completions.create(
    model="google/gemini-2.0-flash",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What is in this image?"},
            {"type": "image_url", "image_url": {"url": "https://example.com/img.png"}},
        ],
    }],
)`,
      },
      {
        lang: 'bash',
        label: 'Environment variable',
        code: `export HANZO_API_KEY="your-hanzo-api-key"
export OPENAI_API_KEY="$HANZO_API_KEY"
export OPENAI_BASE_URL="https://api.hanzo.ai/v1"`,
      },
    ],
  },
  {
    slug: 'anthropic-sdk',
    name: 'Anthropic SDK',
    description: 'Use the Anthropic Python or TypeScript SDK with Hanzo AI to access Claude models alongside 390+ other models through a single API key and billing account.',
    category: 'sdk',
    icon: '🤖',
    upstream: 'https://github.com/anthropics/anthropic-sdk-python',
    creator: 'Anthropic',
    creatorUrl: 'https://anthropic.com',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'Python setup',
        code: `pip install anthropic

import anthropic

client = anthropic.Anthropic(
    api_key="your-hanzo-api-key",
    base_url="https://api.hanzo.ai/v1",
)

message = client.messages.create(
    model="anthropic/claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello, Claude!"}],
)
print(message.content[0].text)`,
      },
      {
        lang: 'typescript',
        label: 'TypeScript setup',
        code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.HANZO_API_KEY,
  baseURL: "https://api.hanzo.ai/v1",
});

const message = await client.messages.create({
  model: "anthropic/claude-sonnet-4-6",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello!" }],
});`,
      },
      {
        lang: 'python',
        label: 'Streaming',
        code: `with client.messages.stream(
    model="anthropic/claude-opus-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Tell me a story"}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)`,
      },
      {
        lang: 'bash',
        label: 'cURL test',
        code: `curl https://api.hanzo.ai/v1/messages \\
  -H "x-api-key: $HANZO_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "content-type: application/json" \\
  -d '{"model":"anthropic/claude-sonnet-4-6","max_tokens":100,"messages":[{"role":"user","content":"Hi"}]}'`,
      },
    ],
  },
  {
    slug: 'langchain',
    name: 'LangChain',
    description: 'Integrate LangChain with Hanzo AI to build chains, agents, and RAG pipelines using any of our 390+ models. Hanzo is OpenAI-compatible so ChatOpenAI just works.',
    category: 'framework',
    icon: '⛓️',
    upstream: 'https://github.com/langchain-ai/langchain',
    creator: 'LangChain AI',
    creatorUrl: 'https://langchain.com',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'LangChain Python',
        code: `pip install langchain langchain-openai

from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="zen4-pro",
    openai_api_key="your-hanzo-api-key",
    openai_api_base="https://api.hanzo.ai/v1",
)

response = llm.invoke("What is the capital of France?")
print(response.content)`,
      },
      {
        lang: 'python',
        label: 'Chain with prompt',
        code: `from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_template("Summarize: {text}")
llm = ChatOpenAI(
    model="openai/gpt-4.1-mini",
    openai_api_key="your-hanzo-api-key",
    openai_api_base="https://api.hanzo.ai/v1",
)
chain = prompt | llm
result = chain.invoke({"text": "LangChain is a framework..."})`,
      },
      {
        lang: 'typescript',
        label: 'LangChain TypeScript',
        code: `import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  modelName: "zen4-pro",
  openAIApiKey: process.env.HANZO_API_KEY,
  configuration: {
    baseURL: "https://api.hanzo.ai/v1",
  },
});

const response = await model.invoke("Hello!");`,
      },
      {
        lang: 'python',
        label: 'RAG with Hanzo',
        code: `from langchain_openai import ChatOpenAI, OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    openai_api_key="your-hanzo-api-key",
    openai_api_base="https://api.hanzo.ai/v1",
    model="openai/text-embedding-3-large",
)

llm = ChatOpenAI(
    model="zen4-pro",
    openai_api_key="your-hanzo-api-key",
    openai_api_base="https://api.hanzo.ai/v1",
)`,
      },
    ],
  },
  {
    slug: 'llamaindex',
    name: 'LlamaIndex',
    description: 'Use LlamaIndex with Hanzo AI to build powerful RAG applications, data agents, and query pipelines. Drop in Hanzo as your LLM provider with zero friction.',
    category: 'framework',
    icon: '🦙',
    upstream: 'https://github.com/run-llama/llama_index',
    creator: 'LlamaIndex',
    creatorUrl: 'https://llamaindex.ai',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'Basic setup',
        code: `pip install llama-index llama-index-llms-openai

from llama_index.llms.openai import OpenAI
from llama_index.core import Settings

Settings.llm = OpenAI(
    model="zen4-pro",
    api_key="your-hanzo-api-key",
    api_base="https://api.hanzo.ai/v1",
)`,
      },
      {
        lang: 'python',
        label: 'RAG pipeline',
        code: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding

Settings.llm = OpenAI(
    model="zen4-pro",
    api_key="your-hanzo-api-key",
    api_base="https://api.hanzo.ai/v1",
)
Settings.embed_model = OpenAIEmbedding(
    api_key="your-hanzo-api-key",
    api_base="https://api.hanzo.ai/v1",
)

documents = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
response = query_engine.query("What is in these docs?")`,
      },
      {
        lang: 'python',
        label: 'Chat engine',
        code: `chat_engine = index.as_chat_engine(
    chat_mode="condense_plus_context",
    verbose=True,
)
response = chat_engine.chat("Tell me more about this topic")`,
      },
      {
        lang: 'python',
        label: 'Streaming query',
        code: `streaming_response = query_engine.query(
    "Summarize the key points",
    streaming=True,
)
streaming_response.print_response_stream()`,
      },
    ],
  },
  {
    slug: 'vercel-ai-sdk',
    name: 'Vercel AI SDK',
    description: 'Use the Vercel AI SDK with Hanzo AI to build streaming AI UIs, chatbots, and generative interfaces in Next.js, React, and other frameworks.',
    category: 'framework',
    icon: '▲',
    upstream: 'https://github.com/vercel/ai',
    creator: 'Vercel',
    creatorUrl: 'https://vercel.com',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'typescript',
        label: 'Setup provider',
        code: `npm install ai @ai-sdk/openai

import { createOpenAI } from "@ai-sdk/openai";

const hanzo = createOpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});`,
      },
      {
        lang: 'typescript',
        label: 'generateText',
        code: `import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const hanzo = createOpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

const { text } = await generateText({
  model: hanzo("zen4-pro"),
  prompt: "Write a poem about AI",
});`,
      },
      {
        lang: 'typescript',
        label: 'Streaming route handler',
        code: `// app/api/chat/route.ts
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const hanzo = createOpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: hanzo("zen4-pro"),
    messages,
  });
  return result.toDataStreamResponse();
}`,
      },
      {
        lang: 'typescript',
        label: 'useChat hook',
        code: `"use client";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleSubmit, handleInputChange } = useChat({
    api: "/api/chat",
  });
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange} />
      <button type="submit">Send</button>
      {messages.map((m) => <p key={m.id}>{m.content}</p>)}
    </form>
  );
}`,
      },
    ],
  },
  {
    slug: 'huggingface',
    name: 'Hugging Face',
    description: 'Access Hugging Face models and use the HF Inference API through Hanzo\'s unified gateway. Also use Hanzo AI models with HuggingFace Hub tooling.',
    category: 'sdk',
    icon: '🤗',
    upstream: 'https://github.com/huggingface/transformers',
    creator: 'Hugging Face',
    creatorUrl: 'https://huggingface.co',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'python',
        label: 'InferenceClient via Hanzo',
        code: `pip install huggingface_hub

from huggingface_hub import InferenceClient

client = InferenceClient(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)

output = client.chat.completions.create(
    model="meta-llama/llama-4-scout",
    messages=[{"role": "user", "content": "Hello!"}],
)`,
      },
      {
        lang: 'python',
        label: 'hf CLI with Hanzo endpoint',
        code: `# Use hf for model downloads, Hanzo for inference
hf download meta-llama/Llama-4-Scout-17B-16E-Instruct

# Then serve via Hanzo API
from openai import OpenAI
client = OpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)`,
      },
      {
        lang: 'typescript',
        label: 'JS InferenceClient',
        code: `import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("your-hanzo-api-key");

const chatCompletion = await client.chatCompletion({
  model: "meta-llama/llama-4-scout",
  messages: [{ role: "user", content: "Hello!" }],
  provider: "hanzo",
  endpointUrl: "https://api.hanzo.ai/v1",
});`,
      },
      {
        lang: 'bash',
        label: 'cURL inference',
        code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"meta-llama/llama-4-maverick","messages":[{"role":"user","content":"Hi"}]}'`,
      },
    ],
  },
  {
    slug: 'autogen',
    name: 'AutoGen',
    description: 'Build multi-agent systems with Microsoft AutoGen using Hanzo AI as the LLM backend. Hanzo\'s OpenAI-compatible API works seamlessly with AutoGen\'s agent orchestration.',
    category: 'framework',
    icon: '🤝',
    upstream: 'https://github.com/microsoft/autogen',
    creator: 'Microsoft Research',
    creatorUrl: 'https://microsoft.com/en-us/research',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'AutoGen setup',
        code: `pip install pyautogen

import autogen

config_list = [{
    "model": "zen4-pro",
    "api_key": "your-hanzo-api-key",
    "base_url": "https://api.hanzo.ai/v1",
}]

assistant = autogen.AssistantAgent(
    name="assistant",
    llm_config={"config_list": config_list},
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
)

user_proxy.initiate_chat(assistant, message="Write a Python script to sort a list.")`,
      },
      {
        lang: 'python',
        label: 'Multi-agent conversation',
        code: `coder = autogen.AssistantAgent(
    name="coder",
    llm_config={"config_list": config_list},
    system_message="You write clean Python code.",
)

reviewer = autogen.AssistantAgent(
    name="reviewer",
    llm_config={"config_list": config_list},
    system_message="You review code for bugs.",
)

groupchat = autogen.GroupChat(agents=[user_proxy, coder, reviewer], messages=[])
manager = autogen.GroupChatManager(groupchat=groupchat, llm_config={"config_list": config_list})`,
      },
      {
        lang: 'python',
        label: 'Code execution agent',
        code: `user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
    code_execution_config={"work_dir": "coding", "use_docker": False},
)`,
      },
      {
        lang: 'bash',
        label: 'Environment setup',
        code: `export HANZO_API_KEY="your-hanzo-api-key"
# AutoGen picks up OAI_CONFIG_LIST or inline config
# No extra env vars needed — just point base_url to Hanzo`,
      },
    ],
  },
  {
    slug: 'crewai',
    name: 'CrewAI',
    description: 'Use CrewAI to build collaborative AI agent teams powered by Hanzo AI models. CrewAI\'s role-based agents work with any OpenAI-compatible provider.',
    category: 'framework',
    icon: '🚢',
    upstream: 'https://github.com/crewAIInc/crewAI',
    creator: 'CrewAI / João Moura',
    creatorUrl: 'https://crewai.com',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'CrewAI with Hanzo',
        code: `pip install crewai

import os
os.environ["OPENAI_API_KEY"] = "your-hanzo-api-key"
os.environ["OPENAI_API_BASE"] = "https://api.hanzo.ai/v1"
os.environ["OPENAI_MODEL_NAME"] = "zen4-pro"

from crewai import Agent, Task, Crew

researcher = Agent(
    role="Researcher",
    goal="Find accurate information on AI trends",
    backstory="Expert AI researcher with deep knowledge",
)

writer = Agent(
    role="Writer",
    goal="Write compelling summaries",
    backstory="Technical writer specializing in AI",
)`,
      },
      {
        lang: 'python',
        label: 'Tasks and Crew',
        code: `task1 = Task(
    description="Research the latest LLM benchmarks",
    expected_output="A list of top 5 models and their scores",
    agent=researcher,
)

task2 = Task(
    description="Write a blog post based on the research",
    expected_output="500-word blog post in markdown",
    agent=writer,
)

crew = Crew(agents=[researcher, writer], tasks=[task1, task2])
result = crew.kickoff()`,
      },
      {
        lang: 'python',
        label: 'Custom LLM config',
        code: `from crewai import LLM

hanzo_llm = LLM(
    model="zen4-pro",
    api_key="your-hanzo-api-key",
    base_url="https://api.hanzo.ai/v1",
)

agent = Agent(
    role="Analyst",
    goal="Analyze data",
    backstory="Data analyst",
    llm=hanzo_llm,
)`,
      },
      {
        lang: 'bash',
        label: 'Quick start',
        code: `pip install crewai
export OPENAI_API_KEY="your-hanzo-api-key"
export OPENAI_BASE_URL="https://api.hanzo.ai/v1"
crewai create my-crew`,
      },
    ],
  },
  {
    slug: 'dspy',
    name: 'DSPy',
    description: 'Use DSPy to program (not prompt) Hanzo AI models. DSPy\'s systematic approach to LM prompting works with any OpenAI-compatible provider.',
    category: 'framework',
    icon: '🔬',
    upstream: 'https://github.com/stanfordnlp/dspy',
    creator: 'Stanford NLP / Omar Khattab',
    creatorUrl: 'https://dspy.ai',
    license: 'MIT',
    examples: [
      {
        lang: 'python',
        label: 'DSPy + Hanzo setup',
        code: `pip install dspy

import dspy

lm = dspy.LM(
    model="openai/zen4-pro",
    api_key="your-hanzo-api-key",
    api_base="https://api.hanzo.ai/v1",
)
dspy.configure(lm=lm)`,
      },
      {
        lang: 'python',
        label: 'Signature and module',
        code: `class QA(dspy.Signature):
    """Answer questions with short factual answers."""
    question: str = dspy.InputField()
    answer: str = dspy.OutputField(desc="often 1-3 sentences")

qa = dspy.Predict(QA)
response = qa(question="What is the Hanzo AI LLM gateway?")
print(response.answer)`,
      },
      {
        lang: 'python',
        label: 'Chain of thought',
        code: `class CoTQA(dspy.Signature):
    """Answer with step-by-step reasoning."""
    question: str = dspy.InputField()
    reasoning: str = dspy.OutputField(desc="think step by step")
    answer: str = dspy.OutputField()

cot = dspy.ChainOfThought(CoTQA)
result = cot(question="Why is AI important for developers?")`,
      },
      {
        lang: 'python',
        label: 'Optimization with MIPROv2',
        code: `from dspy.teleprompt import MIPROv2

teleprompter = MIPROv2(metric=my_metric, auto="medium")
optimized = teleprompter.compile(program, trainset=train_data)`,
      },
    ],
  },
  {
    slug: 'haystack',
    name: 'Haystack',
    description: 'Build production-ready NLP pipelines and RAG systems with Haystack using Hanzo AI as the LLM provider. Haystack\'s OpenAI integration works seamlessly.',
    category: 'framework',
    icon: '🌾',
    upstream: 'https://github.com/deepset-ai/haystack',
    creator: 'deepset.ai',
    creatorUrl: 'https://haystack.deepset.ai',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'python',
        label: 'Haystack + Hanzo',
        code: `pip install haystack-ai

from haystack.components.generators.chat import OpenAIChatGenerator
from haystack.dataclasses import ChatMessage
from haystack.utils import Secret

generator = OpenAIChatGenerator(
    model="zen4-pro",
    api_key=Secret.from_token("your-hanzo-api-key"),
    api_base_url="https://api.hanzo.ai/v1",
)

messages = [ChatMessage.from_user("What is RAG?")]
result = generator.run(messages=messages)`,
      },
      {
        lang: 'python',
        label: 'RAG pipeline',
        code: `from haystack import Pipeline
from haystack.components.builders import PromptBuilder
from haystack.components.generators.chat import OpenAIChatGenerator

prompt_template = """
Context: {% for doc in documents %}{{ doc.content }}{% endfor %}
Question: {{ question }}
Answer:
"""

pipeline = Pipeline()
pipeline.add_component("prompt", PromptBuilder(template=prompt_template))
pipeline.add_component("llm", OpenAIChatGenerator(
    model="zen4-pro",
    api_key=Secret.from_token("your-hanzo-api-key"),
    api_base_url="https://api.hanzo.ai/v1",
))`,
      },
      {
        lang: 'python',
        label: 'Embeddings',
        code: `from haystack.components.embedders import OpenAITextEmbedder

embedder = OpenAITextEmbedder(
    model="openai/text-embedding-3-large",
    api_key=Secret.from_token("your-hanzo-api-key"),
    api_base_url="https://api.hanzo.ai/v1",
)`,
      },
      {
        lang: 'bash',
        label: 'Install',
        code: `pip install haystack-ai
export HANZO_API_KEY="your-hanzo-api-key"`,
      },
    ],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    description: 'Use Hanzo AI models inside Cursor IDE by adding a custom API provider. Access Zen, GPT-4.1, Claude Sonnet, and 390+ other models directly in your editor.',
    category: 'platform',
    icon: '🖱️',
    upstream: 'https://github.com/getcursor/cursor',
    creator: 'Anysphere',
    creatorUrl: 'https://cursor.com',
    license: 'Proprietary',
    examples: [
      {
        lang: 'json',
        label: 'Cursor settings',
        code: `// Settings > Models > Add custom model
{
  "provider": "openai-compatible",
  "name": "Hanzo AI",
  "baseUrl": "https://api.hanzo.ai/v1",
  "apiKey": "your-hanzo-api-key",
  "models": ["zen4-pro", "zen4-max", "openai/gpt-4.1", "anthropic/claude-sonnet-4-6"]
}`,
      },
      {
        lang: 'bash',
        label: 'Available models',
        code: `# Query Hanzo models list
curl https://api.hanzo.ai/v1/models \\
  -H "Authorization: Bearer $HANZO_API_KEY" | jq '.data[].id'`,
      },
      {
        lang: 'bash',
        label: 'Test connection',
        code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"zen4-pro","messages":[{"role":"user","content":"Hello from Cursor!"}],"max_tokens":50}'`,
      },
      {
        lang: 'bash',
        label: 'Tips',
        code: `# zen4-pro: best for code generation
# zen4-coder: specialized code model
# zen4-thinking: step-by-step reasoning
# openai/gpt-4.1: advanced reasoning
# All available at api.hanzo.ai/v1`,
      },
    ],
  },
  {
    slug: 'continue-dev',
    name: 'Continue.dev',
    description: 'Configure Continue.dev VS Code / JetBrains extension to use Hanzo AI as your coding assistant. Add Hanzo as a custom OpenAI-compatible provider in your config.',
    category: 'platform',
    icon: '🔄',
    upstream: 'https://github.com/continuedev/continue',
    creator: 'Continue.dev',
    creatorUrl: 'https://continue.dev',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'json',
        label: '~/.continue/config.json',
        code: `{
  "models": [
    {
      "title": "Hanzo zen4-pro",
      "provider": "openai",
      "model": "zen4-pro",
      "apiKey": "your-hanzo-api-key",
      "apiBase": "https://api.hanzo.ai/v1"
    },
    {
      "title": "Hanzo zen4-coder",
      "provider": "openai",
      "model": "zen4-coder",
      "apiKey": "your-hanzo-api-key",
      "apiBase": "https://api.hanzo.ai/v1"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Hanzo Autocomplete",
    "provider": "openai",
    "model": "zen4-coder",
    "apiKey": "your-hanzo-api-key",
    "apiBase": "https://api.hanzo.ai/v1"
  }
}`,
      },
      {
        lang: 'json',
        label: 'Embeddings config',
        code: `{
  "embeddingsProvider": {
    "provider": "openai",
    "model": "openai/text-embedding-3-large",
    "apiKey": "your-hanzo-api-key",
    "apiBase": "https://api.hanzo.ai/v1"
  }
}`,
      },
      {
        lang: 'bash',
        label: 'Install Continue',
        code: `# VS Code
code --install-extension Continue.continue

# JetBrains: install from marketplace
# Then edit ~/.continue/config.json`,
      },
      {
        lang: 'bash',
        label: 'Test API',
        code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -d '{"model":"zen4-coder","messages":[{"role":"user","content":"Complete this: def hello():"}]}'`,
      },
    ],
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Extend your GitHub Copilot workflow with Hanzo AI for access to additional models and capabilities via the API. Use Hanzo for tasks Copilot can\'t handle.',
    category: 'platform',
    icon: '🐙',
    upstream: 'https://github.com/features/copilot',
    creator: 'GitHub / Microsoft',
    creatorUrl: 'https://github.com',
    license: 'Proprietary',
    examples: [
      {
        lang: 'python',
        label: 'Hanzo API alongside Copilot',
        code: `# Use GitHub Copilot in editor, Hanzo API in code
from openai import OpenAI

# Hanzo for programmatic access
client = OpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)

# Access 390+ models not in Copilot
response = client.chat.completions.create(
    model="zen4-pro",
    messages=[{"role": "user", "content": "Review this code..."}],
)`,
      },
      {
        lang: 'typescript',
        label: 'GitHub Actions with Hanzo',
        code: `// In CI: use Hanzo AI for code review
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

const review = await client.chat.completions.create({
  model: "zen4-pro",
  messages: [{
    role: "user",
    content: \`Review this PR diff:\n\${diff}\`,
  }],
});`,
      },
      {
        lang: 'yaml',
        label: 'GitHub Actions workflow',
        code: `name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Review
        env:
          HANZO_API_KEY: \${{ secrets.HANZO_API_KEY }}
        run: |
          pip install openai
          python scripts/ai_review.py`,
      },
      {
        lang: 'bash',
        label: 'API key setup',
        code: `# Add to GitHub repo secrets
# Settings > Secrets > Actions > New secret
# Name: HANZO_API_KEY
# Value: your-hanzo-api-key`,
      },
    ],
  },
  {
    slug: 'docker',
    name: 'Docker',
    description: 'Deploy Hanzo AI-powered services in Docker containers. Use the Hanzo API from any containerized application with proper environment configuration.',
    category: 'infra',
    icon: '🐳',
    upstream: 'https://github.com/moby/moby',
    creator: 'Docker / Moby Project',
    creatorUrl: 'https://docker.com',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'dockerfile',
        label: 'Dockerfile',
        code: `FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

ENV HANZO_API_KEY=""
ENV OPENAI_API_BASE="https://api.hanzo.ai/v1"

CMD ["python", "main.py"]`,
      },
      {
        lang: 'yaml',
        label: 'compose.yml',
        code: `services:
  app:
    build: .
    environment:
      - HANZO_API_KEY=\${HANZO_API_KEY}
      - OPENAI_API_BASE=https://api.hanzo.ai/v1
    ports:
      - "8000:8000"
    restart: unless-stopped`,
      },
      {
        lang: 'bash',
        label: 'Run with env',
        code: `# .env file
HANZO_API_KEY=your-hanzo-api-key

# Start
docker compose up -d

# Or direct run
docker run -e HANZO_API_KEY=your-key -p 8000:8000 my-ai-app`,
      },
      {
        lang: 'python',
        label: 'App code',
        code: `import os
from openai import OpenAI

client = OpenAI(
    base_url=os.environ.get("OPENAI_API_BASE", "https://api.hanzo.ai/v1"),
    api_key=os.environ["HANZO_API_KEY"],
)`,
      },
    ],
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    description: 'Deploy Hanzo AI-powered workloads on Kubernetes. Securely manage your Hanzo API key as a K8s secret and inject it into pods.',
    category: 'infra',
    icon: '⚓',
    upstream: 'https://github.com/kubernetes/kubernetes',
    creator: 'CNCF / Google',
    creatorUrl: 'https://kubernetes.io',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'yaml',
        label: 'K8s Secret',
        code: `apiVersion: v1
kind: Secret
metadata:
  name: hanzo-credentials
  namespace: default
type: Opaque
stringData:
  api-key: "your-hanzo-api-key"`,
      },
      {
        lang: 'yaml',
        label: 'Deployment manifest',
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ai-service
  template:
    spec:
      containers:
        - name: app
          image: my-ai-app:latest
          env:
            - name: HANZO_API_KEY
              valueFrom:
                secretKeyRef:
                  name: hanzo-credentials
                  key: api-key
            - name: OPENAI_API_BASE
              value: "https://api.hanzo.ai/v1"`,
      },
      {
        lang: 'bash',
        label: 'Apply to cluster',
        code: `kubectl create secret generic hanzo-credentials \\
  --from-literal=api-key="your-hanzo-api-key"

kubectl apply -f deployment.yaml
kubectl get pods -l app=ai-service`,
      },
      {
        lang: 'yaml',
        label: 'HPA for AI workloads',
        code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`,
      },
    ],
  },
  {
    slug: 'python',
    name: 'Python',
    description: 'Use Hanzo AI in Python with the official OpenAI SDK (fully compatible), the Anthropic SDK, or via HTTP with httpx/requests. Zero lock-in, standard interfaces.',
    category: 'language',
    icon: '🐍',
    upstream: 'https://github.com/python/cpython',
    creator: 'Python Software Foundation',
    creatorUrl: 'https://python.org',
    license: 'PSF License',
    examples: [
      {
        lang: 'python',
        label: 'OpenAI SDK (recommended)',
        code: `pip install openai

from openai import OpenAI

client = OpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)

response = client.chat.completions.create(
    model="zen4-pro",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)`,
      },
      {
        lang: 'python',
        label: 'httpx (raw HTTP)',
        code: `import httpx, json

response = httpx.post(
    "https://api.hanzo.ai/v1/chat/completions",
    headers={"Authorization": "Bearer your-hanzo-api-key"},
    json={
        "model": "zen4-pro",
        "messages": [{"role": "user", "content": "Hello!"}],
    },
)
print(response.json()["choices"][0]["message"]["content"])`,
      },
      {
        lang: 'python',
        label: 'Async with asyncio',
        code: `import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)

async def main():
    response = await client.chat.completions.create(
        model="zen4-pro",
        messages=[{"role": "user", "content": "Hello async!"}],
    )
    print(response.choices[0].message.content)

asyncio.run(main())`,
      },
      {
        lang: 'python',
        label: 'Environment setup',
        code: `# .env
HANZO_API_KEY=your-hanzo-api-key

# Load in code
from dotenv import load_dotenv
import os

load_dotenv()

from openai import OpenAI
client = OpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key=os.environ["HANZO_API_KEY"],
)`,
      },
    ],
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    description: 'Use Hanzo AI in TypeScript and Node.js with the OpenAI SDK, Vercel AI SDK, or raw fetch. Full type safety and async/streaming support.',
    category: 'language',
    icon: '🟦',
    upstream: 'https://github.com/microsoft/TypeScript',
    creator: 'Microsoft',
    creatorUrl: 'https://typescriptlang.org',
    license: 'Apache-2.0',
    examples: [
      {
        lang: 'typescript',
        label: 'OpenAI SDK',
        code: `npm install openai

import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

const response = await client.chat.completions.create({
  model: "zen4-pro",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(response.choices[0].message.content);`,
      },
      {
        lang: 'typescript',
        label: 'Streaming',
        code: `const stream = await client.chat.completions.create({
  model: "zen4-pro",
  messages: [{ role: "user", content: "Stream this" }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}`,
      },
      {
        lang: 'typescript',
        label: 'Next.js API route',
        code: `// app/api/generate/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await client.chat.completions.create({
    model: "zen4-pro",
    messages: [{ role: "user", content: prompt }],
  });
  return NextResponse.json(response.choices[0].message);
}`,
      },
      {
        lang: 'typescript',
        label: 'List models',
        code: `const models = await client.models.list();
console.log(\`Available: \${models.data.length} models\`);
models.data.slice(0, 5).forEach((m) => console.log(m.id));`,
      },
    ],
  },
  {
    slug: 'go',
    name: 'Go',
    description: 'Use Hanzo AI in Go using the official OpenAI Go client or any OpenAI-compatible Go library. Hanzo\'s standard REST API works with all HTTP clients.',
    category: 'language',
    icon: '🐹',
    upstream: 'https://github.com/golang/go',
    creator: 'Go Authors / Google',
    creatorUrl: 'https://go.dev',
    license: 'BSD-3-Clause',
    examples: [
      {
        lang: 'go',
        label: 'OpenAI Go client',
        code: `go get github.com/openai/openai-go

package main

import (
	"context"
	"fmt"
	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

func main() {
	client := openai.NewClient(
		option.WithBaseURL("https://api.hanzo.ai/v1"),
		option.WithAPIKey("your-hanzo-api-key"),
	)

	resp, _ := client.Chat.Completions.New(context.Background(),
		openai.ChatCompletionNewParams{
			Model: openai.F("zen4-pro"),
			Messages: openai.F([]openai.ChatCompletionMessageParamUnion{
				openai.UserMessage("Hello from Go!"),
			}),
		},
	)
	fmt.Println(resp.Choices[0].Message.Content)
}`,
      },
      {
        lang: 'go',
        label: 'Raw HTTP client',
        code: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	body, _ := json.Marshal(map[string]any{
		"model":    "zen4-pro",
		"messages": []map[string]string{{"role": "user", "content": "Hello!"}},
	})

	req, _ := http.NewRequest("POST", "https://api.hanzo.ai/v1/chat/completions", bytes.NewReader(body))
	req.Header.Set("Authorization", "Bearer "+os.Getenv("HANZO_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	resp, _ := http.DefaultClient.Do(req)
	defer resp.Body.Close()
	io.Copy(os.Stdout, resp.Body)
	fmt.Println()
}`,
      },
      {
        lang: 'go',
        label: 'Streaming',
        code: `stream, _ := client.Chat.Completions.NewStreaming(context.Background(),
	openai.ChatCompletionNewParams{
		Model: openai.F("zen4-pro"),
		Messages: openai.F([]openai.ChatCompletionMessageParamUnion{
			openai.UserMessage("Write a poem"),
		}),
	},
)
defer stream.Close()

for stream.Next() {
	chunk := stream.Current()
	if len(chunk.Choices) > 0 {
		fmt.Print(chunk.Choices[0].Delta.Content)
	}
}`,
      },
      {
        lang: 'bash',
        label: 'Environment',
        code: `export HANZO_API_KEY="your-hanzo-api-key"
go run main.go`,
      },
    ],
  },
  {
    slug: 'rust',
    name: 'Rust',
    description: 'Use Hanzo AI in Rust via the async-openai crate or raw reqwest HTTP calls. Full async support with Tokio, streaming, and type-safe API access.',
    category: 'language',
    icon: '🦀',
    upstream: 'https://github.com/rust-lang/rust',
    creator: 'Rust Foundation',
    creatorUrl: 'https://rust-lang.org',
    license: 'MIT / Apache-2.0',
    examples: [
      {
        lang: 'toml',
        label: 'Cargo.toml',
        code: `[dependencies]
async-openai = "0.26"
tokio = { version = "1", features = ["full"] }`,
      },
      {
        lang: 'rust',
        label: 'async-openai',
        code: `use async_openai::{config::OpenAIConfig, Client, types::*};

#[tokio::main]
async fn main() {
    let config = OpenAIConfig::new()
        .with_api_base("https://api.hanzo.ai/v1")
        .with_api_key(std::env::var("HANZO_API_KEY").unwrap());

    let client = Client::with_config(config);

    let request = CreateChatCompletionRequestArgs::default()
        .model("zen4-pro")
        .messages([ChatCompletionRequestUserMessageArgs::default()
            .content("Hello from Rust!")
            .build()
            .unwrap()
            .into()])
        .build()
        .unwrap();

    let response = client.chat().create(request).await.unwrap();
    println!("{}", response.choices[0].message.content.as_ref().unwrap());
}`,
      },
      {
        lang: 'rust',
        label: 'reqwest raw HTTP',
        code: `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() {
    let client = Client::new();
    let resp = client
        .post("https://api.hanzo.ai/v1/chat/completions")
        .bearer_auth(std::env::var("HANZO_API_KEY").unwrap())
        .json(&json!({
            "model": "zen4-pro",
            "messages": [{"role": "user", "content": "Hello!"}]
        }))
        .send()
        .await
        .unwrap();
    println!("{}", resp.text().await.unwrap());
}`,
      },
      {
        lang: 'bash',
        label: 'Build and run',
        code: `export HANZO_API_KEY="your-hanzo-api-key"
cargo build --release
./target/release/my-ai-app`,
      },
    ],
  },
]

export const INTEGRATION_CATEGORIES = {
  sdk: 'AI SDKs',
  framework: 'Frameworks',
  platform: 'Platforms & Editors',
  infra: 'Infrastructure',
  language: 'Languages',
} as const

export function getIntegration(slug: string): Integration | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug)
}

export function getIntegrationsByCategory(category: Integration['category']): Integration[] {
  return INTEGRATIONS.filter((i) => i.category === category)
}
