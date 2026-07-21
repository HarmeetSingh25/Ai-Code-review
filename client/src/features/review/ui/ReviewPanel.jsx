import { SearchX, Sparkles } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ReviewPanel = ({ review }) => {
  return review ? (
    <>
      <div className="flex-1 overflow-y-auto p-6 min-h-0">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Sparkles className="text-emerald-400" size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">AI Review</h3>
            <p className="text-sm text-gray-400">Generated successfully</p>
          </div>
        </div>

        <div className="bg-[#181B23] border border-[#343845] rounded-xl p-5 overflow-auto">
          <div className="prose prose-invert max-w-none break-words overflow-x-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => (
                  <pre className="bg-[#0D1117] p-4 rounded-lg overflow-x-auto text-sm">
                    {children}
                  </pre>
                ),
                code: ({ inline, children }) =>
                  inline ? (
                    <code className="bg-[#2A2D36] px-1 py-0.5 rounded text-emerald-400">
                      {children}
                    </code>
                  ) : (
                    <code>{children}</code>
                  ),
              }}
            >
              {review}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="border-t border-[#343845] p-5 text-sm text-gray-500">
        AI model: CodeGen-Ultra v2
      </div>
    </>
  ) : (
    <>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10">
        <div className="w-24 h-24 rounded-2xl bg-[#242731] flex items-center justify-center">
          <SearchX size={45} className="text-gray-500" />
        </div>

        <h4 className="mt-8 text-2xl font-semibold">No review yet.</h4>

        <p className="text-gray-500 mt-3">
          Submit your code to generate AI insights and improvements.
        </p>
      </div>

      <div className="border-t border-[#343845] p-5 text-sm text-gray-500">
        AI model: CodeGen-Ultra v2
      </div>
    </>
  );
};

export default ReviewPanel;
