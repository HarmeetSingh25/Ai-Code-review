import { SearchX } from 'lucide-react'
import React from 'react'

const ReviewPanel = () => {
  return (
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
  )
}

export default ReviewPanel