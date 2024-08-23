import React from 'react'
import { Link } from '@tanstack/react-router'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-88px)]">
      <Link
        to="/styles"
        className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 flex items-center justify-center"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
          New Bracket
        </span>
      </Link>
      <Link
        to="/load"
        className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 flex items-center justify-center"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
          Load Bracket
        </span>
      </Link>
    </div>
  )
}

export default HomePage