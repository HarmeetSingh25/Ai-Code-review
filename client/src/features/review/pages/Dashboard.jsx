import {
  Upload,
  RotateCcw,
  Shield,
  Zap,
  Wand2,
  SearchX,
  Code2,
  History,
  Library,
  Settings,
  Globe,
  Sparkles,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Codeeditor from "../../../features/review/ui/CodeEditor";
import Sidebar from "../../../components/sidebar";
import useReview from "../hooks/useReview";
import { useState } from "react";
import PromptInput from "../ui/PromptInput";
import ChatWindow from "../ui/ChatWindow";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [code, setcode] = useState("");
  const [language, setlanguage] = useState("javascript");
  const [messages, setmessages] = useState([
   { role: "assitant",
    content: "👋 Hello! Paste your code into the editor and ask me anything.",}
  ]);
  let { handelReview, review, loading } = useReview();
  // console.log(review, 'review');

  const handleSend = async (prompt) => {

  setmessages((prev) => [
    ...prev,
    {
      role: "user",
      content: prompt,
    },
  ]);

  const response = await handelReview(
    language,
    code,
    prompt
  );

  setmessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: response,
    },
  ]);
};

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-10 flex-1">
          <h1 className="text-5xl font-bold">Optimize Your Code</h1>

          <p className="text-gray-400 mt-4 text-lg max-w-4xl">
            Leverage professional AI insights to identify bugs, security
            vulnerabilities, and performance bottlenecks in seconds.
          </p>

          {/* Editor + Review */}
          <ChatWindow
            messages={messages}
            loading={loading}
            onsend={handleSend}
          />
        </div>
      </main>
    </div>
  );
}

//
