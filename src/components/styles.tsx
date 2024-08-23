import React from 'react'

const Styles: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-88px)]">
      <h2 className="text-3xl text-center mb-8">Choose Style</h2>
      <div className="flex flex-col sm:flex-row flex-grow">
        <button className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 py-8 sm:py-0">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
            Round Robin
          </span>
        </button>
        <button className="flex-1 bg-purple-800 hover:bg-purple-900 font-bold text-6xl transition-colors duration-300 py-8 sm:py-0">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-stroke-purple">
            Jungle
          </span>
        </button>
      </div>
    </div>
  )
}

export default Styles