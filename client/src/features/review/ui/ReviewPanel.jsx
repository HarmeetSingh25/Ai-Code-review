import { SearchX  ,Sparkles} from "lucide-react";
import React from "react";

const ReviewPanel = ({ review }) => {
  return review ? (
        <>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Sparkles className="text-emerald-400" size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">AI Review</h3>
            <p className="text-sm text-gray-400">
              Generated successfully
            </p>
          </div>
        </div>

        <div className="bg-[#181B23] border border-[#343845] rounded-xl p-5">
          <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-sans">
            {review}
          </pre>
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
