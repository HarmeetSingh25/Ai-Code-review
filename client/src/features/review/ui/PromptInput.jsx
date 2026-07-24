import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
const PromptInput = ({ onsend }) => {
  const [prompt, setprompt] = useState("");
  const handelSubmit = () => {
    if (!prompt.trim()) return;
    onsend(prompt);
    setprompt("");
  };
  return (
    <div className="border-t border-[#343845] p-4">
      <div className="flex gap-3">
        <input
          onChange={(e) => setprompt(e.target.value)}
          type="text"
          placeholder="Ask anything about this code..."
          className="flex-1 bg-[#181B23] rounded-xl px-5 py-3 outline-none "
        />
        <button
          onClick={handelSubmit}
          className="bg-emerald-500 rounded-xl px-5 "
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
