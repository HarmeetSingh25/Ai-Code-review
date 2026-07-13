import { Code2, Globe, Settings } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
  <header className="h-20 border-b border-[#31343E] px-10 flex items-center justify-between">
          <div className="flex items-center gap-3 text-3xl font-bold">
            <Code2 className="text-blue-300" />
            AI Code Review Assistant
          </div>

          <div className="flex items-center gap-5">
            <button className="border border-[#3B3F4B] rounded-lg px-5 py-2 flex items-center gap-2 bg-[#1C1F27]">
              <Globe size={18} />
              TypeScript
            </button>

            <Settings />
          </div>
        </header>
  )
}

export default Navbar