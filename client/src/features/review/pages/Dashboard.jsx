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

export default function Dashboard() {
  
  const [code, setcode] = useState("");
  const [language, setlanguage] = useState("javascript")
  let { handelReview, review, loading } = useReview();
  // console.log(review, 'review');
  

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
          <Codeeditor
            code={code}
            setcode={setcode}
            handelReview={handelReview}
            review={review}
            loading={loading}
            language={language}
            setlanguage={setlanguage}
          />
        </div>
      </main>
    </div>
  );
}

//
