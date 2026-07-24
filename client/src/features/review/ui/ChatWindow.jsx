import React from "react";
import ChatMessage from "./ChatMessage";
import PromptInput from "./PromptInput";

const ChatWindow = ({ messages, loading, onsend }) => {
  return (
    <div className="border border-[#343845] rounded-xl h-700px flex flex-col overflow-hidden">
      <div className="h-16 border-b border-[#343845] px-6 flex items-center">
        <h2 className="text-3xl font-semibold">AI Assitant</h2>
      </div>

        {/* {console.log(messages)} */}
      <div className="flex-1 overflow-y-auto p-5">
        {messages?.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {loading && <div className="text-gray-400">Thinking</div>}
      </div>

      <PromptInput onsend={onsend} />
    </div>
  );
};

export default ChatWindow;
