"use client"

import { useState } from "react"
import Hero from "@/components/ai-studio/Hero"
import StudioLayout from "@/components/ai-studio/StudioLayout"
import { MessageInterface, ModelInterface } from "@/components/ai-studio/types"

export default function AIStudioPage() {
  const [activeTab, setActiveTab] = useState("chat")
  const [promptText, setPromptText] = useState("")
  const [modelSelection, setModelSelection] = useState("gpt-4o")
  const [showSidebar, setShowSidebar] = useState(true)

  const [conversation, setConversation] = useState<MessageInterface[]>([
    {
      role: "assistant",
      content: "Welcome to Hanzo AI Studio. How can I help you today?",
    },
    {
      role: "user",
      content:
        "I need to create a React component that renders a carousel",
    },
    {
      role: "assistant",
      content:
        'Sure! Here\'s a simple React carousel component using Framer Motion:\n\n```jsx\nimport { motion, AnimatePresence } from \'framer-motion\';\nimport { useState } from \'react\';\n\nconst Carousel = ({ images }) => {\n  const [currentIndex, setCurrentIndex] = useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => \n      prevIndex === images.length - 1 ? 0 : prevIndex + 1\n    );\n  };\n\n  const handlePrevious = () => {\n    setCurrentIndex((prevIndex) => \n      prevIndex === 0 ? images.length - 1 : prevIndex - 1\n    );\n  };\n\n  return (\n    <div className="relative overflow-hidden">\n      <div className="flex justify-between absolute inset-x-0 top-1/2 z-10">\n        <button onClick={handlePrevious}>Previous</button>\n        <button onClick={handleNext}>Next</button>\n      </div>\n      <AnimatePresence mode="wait">\n        <motion.img\n          key={currentIndex}\n          src={images[currentIndex]}\n          initial={{ opacity: 0 }}\n          animate={{ opacity: 1 }}\n          exit={{ opacity: 0 }}\n          transition={{ duration: 0.5 }}\n          className="w-full h-64 object-cover"\n        />\n      </AnimatePresence>\n    </div>\n  );\n};\n\nexport default Carousel;\n```\n\nThis component takes an array of image URLs and displays them one at a time with animated transitions. You can customize it further based on your specific needs.',
    },
  ])

  const models: ModelInterface[] = [
    { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI" },
    { id: "claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic" },
    { id: "llama-3-70b", name: "Llama 3 70B", provider: "Meta" },
    { id: "gemini-pro", name: "Gemini Pro", provider: "Google" },
    { id: "mixtral-8x7b", name: "Mixtral 8x7B", provider: "Mistral" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!promptText.trim()) return

    setConversation([
      ...conversation,
      { role: "user", content: promptText },
    ])

    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I received your message: "${promptText}". This is a placeholder response from the AI Studio demo.`,
        },
      ])
    }, 1000)

    setPromptText("")
  }

  return (
    <div className="flex-1 flex flex-col mt-16">
      <Hero />
      <StudioLayout
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        models={models}
        modelSelection={modelSelection}
        setModelSelection={setModelSelection}
        conversation={conversation}
        promptText={promptText}
        setPromptText={setPromptText}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
