
export interface MessageInterface {
  role: "assistant" | "user";
  content: string;
}

export interface ModelInterface {
  id: string;
  name: string;
  provider: string;
}
