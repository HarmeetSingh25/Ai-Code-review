import { RotateCcw, SearchX, Shield, Sparkles, Upload, Wand2, Zap   } from "lucide-react";
import React, { useState } from "react";
import ReviewPanel from "../ui/ReviewPanel";

const CodeEditor = ({
code , setcode ,handelReview, review, loading ,language ,setlanguage
}) => {
  
  //   const inputCode = (event)=>{
  //   setcode(event.target.value)
    
  // }
  // console.log(code);
  return (
    <div className="grid grid-cols-12 gap-6 mt-10">
      {/* Editor */}
      <div className="col-span-8">
        <div className="rounded-xl overflow-hidden border border-[#343845]">
          <div className="h-12 bg-[#242731] flex justify-between items-center px-5 border-b border-[#343845]">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <span className="text-gray-500 tracking-widest">EDITOR.TS</span>
          </div>

          <textarea onChange={(e)=>{setcode(e.target.value)}}
            placeholder="Paste your code here..."
            className="w-full h-[500px] bg-[#181B23] resize-none outline-none p-8 text-gray-400"
          />
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex gap-4">
            <button className="border border-[#343845] rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-[#242731]">
              <Upload size={18} />
              Upload File
            </button>

            <button className="border border-[#343845] rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-[#242731]">
              <RotateCcw size={18} />
              Clear
            </button>
          </div>

          <button onClick={()=>{handelReview(code , language) 
          }} className="bg-emerald-500 text-black rounded-xl px-10 py-3 font-semibold flex gap-3 items-center hover:bg-emerald-400">
            <Sparkles size={20} />
            {loading ? "Reviewing..." :"Review"}
          </button>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-3 gap-5 mt-8">
          <Card
            icon={<Shield className="text-indigo-300" />}
            title="Security Audit"
            text="Checks for SQL injection, XSS and hardcoded secrets."
          />

          <Card
            icon={<Zap className="text-green-300" />}
            title="Performance"
            text="Optimizes loops, memory allocation and async patterns."
          />

          <Card
            icon={<Wand2 className="text-orange-300" />}
            title="Refactoring"
            text="Improves readability and follows SOLID principles."
          />
        </div>
      </div>

      {/* Review */}
      <div className="col-span-4">
        <div className="border border-[#343845] rounded-xl overflow-hidden h-full flex flex-col">
          <div className="bg-[#242731] h-16 flex items-center justify-between px-6 border-b border-[#343845]">
            <h3 className="text-3xl font-semibold">Review</h3>

            <span className="bg-[#3B3F4B] px-3 py-1 rounded text-xs">
              PENDING
            </span>
          </div>

          <ReviewPanel/>
        </div>
      </div>
    </div>
  );
  
};
function Card({ icon, title, text }) {
return (
  <div className="bg-[#1B1D26] border border-[#343845] rounded-xl p-6 flex gap-4">
    <div className="w-12 h-12 rounded-lg bg-[#252933] flex items-center justify-center">
      {icon}
    </div>

    <div>
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-400 text-sm mt-2 leading-6">{text}</p>
    </div>
  </div>
);
}


export default CodeEditor;
