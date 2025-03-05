
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bot, Send, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type MessageRole = "user" | "assistant";

interface Message {
  role: MessageRole;
  content: string;
}

const NotFound = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage("");

    // Simulate AI response - Replace with actual AI integration
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `I noticed you're trying to access ${location.pathname}. This page doesn't exist, but I can help you find what you're looking for! What were you trying to find?`
      };
      setMessages([...newMessages, aiMessage]);
    }, 1000);

    toast({
      title: "Message sent!",
      description: "The AI assistant will respond shortly.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-gray-500 hover:text-gray-700 underline">
          Return to Home
        </a>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="fixed bottom-4 right-4 rounded-full p-4 bg-black hover:bg-gray-800 text-white shadow-lg animate-bounce"
            size="icon"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[500px] p-4 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-gray-500" />
                <h2 className="text-lg font-semibold">AI Assistant</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <XCircle className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.role === "user" 
                      ? "bg-gray-500 text-white ml-auto" 
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NotFound;
