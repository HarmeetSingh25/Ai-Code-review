import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ChatMessage = ({ message }) => {
  let isUser = message.role == "user";
  console.log(message);

  return (
    <div className={`flex mb-5 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={` max-w-[85%] rounded-2xl px-5 py-4 ${isUser ? "bg-emerald-500 text-black" : "bg-[#1B1D26] border border-[#343845] text-white"}`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
