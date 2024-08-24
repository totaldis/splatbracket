import React from 'react'
import { useNavigate } from '@tanstack/react-router'

const Styles: React.FC = () => {
  const navigate = useNavigate()

  const handleStyleSelect = (style: string) => {
    // You might want to store the selected style in a global state or context
    // For now, we'll just navigate to the counts page
    navigate({ to: '/counts' })
  }

  return (
    <div className="flex flex-col h-[calc(100vh-88px)]">
      <div className="flex flex-col sm:flex-row flex-grow">
        <button 
          onClick={() => handleStyleSelect('Round Robin')}
          className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 py-8 sm:py-0"
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
            Round Robin
          </span>
        </button>
        <button 
          onClick={() => handleStyleSelect('Jungle')}
          className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 py-8 sm:py-0"
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
            Jungle
          </span>
        </button>
      </div>
    </div>
  )
}

export default Styles