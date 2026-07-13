import { Code2, History, Library, Settings } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
<>
 <aside className="w-72 bg-[#1B1D26] border-r border-[#31343E] flex flex-col justify-between">
        <div>
          <div className="h-20 flex items-center px-8 text-3xl font-bold text-blue-200">
            CodeCritique AI
          </div>

          <nav className="px-5 space-y-3">
            <button className="w-full flex items-center gap-4 bg-emerald-500 text-black rounded-xl px-5 py-4 font-semibold">
              <Code2 size={20} />
              Dashboard
            </button>

            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 hover:bg-[#252933]">
              <History size={20} />
              History
            </button>

            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 hover:bg-[#252933]">
              <Library size={20} />
              Library
            </button>

            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 hover:bg-[#252933]">
              <Settings size={20} />
              Settings
            </button>
          </nav>
        </div>

        <div className="border-t border-[#31343E] p-6">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center font-bold">
              DM
            </div>

            <div>
              <h4 className="font-semibold">Dev Mode</h4>
              <p className="text-xs text-gray-400">PRO PLAN</p>
              <span className="text-xs text-gray-500">v1.0.4</span>
            </div>
          </div>
        </div>
      </aside>

</>
  )
}

export default Sidebar