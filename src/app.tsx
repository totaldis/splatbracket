import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const navigate = useNavigate()

  const handleNavigation = (screen: string) => {
    setCurrentScreen(screen)
    navigate({ to: `/${screen === 'home' ? '' : screen}` })
  }

  return (
    <div className="h-screen bg-purple-950 text-white">
      <h1 className="text-4xl py-8">SPLAT BRACKET</h1>
      {currentScreen === 'home' ? (
        <div className="flex flex-col sm:flex-row h-[calc(100vh-88px)]">
          <button
            onClick={() => handleNavigation('new')}
            className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-bold text-2xl transition-colors duration-300"
          >
            New Bracket
          </button>
          <button
            onClick={() => handleNavigation('load')}
            className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-bold text-2xl transition-colors duration-300"
          >
            Load Bracket
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-88px)]">
          <button
            onClick={() => handleNavigation('home')}
            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded text-xl transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  )
}