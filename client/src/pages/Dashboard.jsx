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
import Navbar from "../components/Navbar";
import Codeeditor from "../components/Codeeditor";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
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
          <Codeeditor />
        </div>
      </main>
    </div>
  );
}

//
