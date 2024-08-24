import React, { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

const LoadBracket: React.FC = () => {
  const [bracketId, setBracketId] = useState('')
  const navigate = useNavigate()
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBracketId(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement logic to load the bracket with the given ID
    console.log('Loading bracket with ID:', bracketId)
  }

  const handleQuickLink = (id: string) => {
    // TODO: Implement logic to load the bracket with the given ID
    console.log('Loading bracket with ID:', id)
  }

  const recentBrackets = [
    { id: '6x6 Custom 10-92-01', date: '10-92-01' },
    { id: '12 man show 14-20-33', date: '14-20-33' },
    { id: 'power hour 14-20-33', date: '14-20-33' },
  ]
  return (
    <div className="flex flex-col max-h-screen bg-purple-950 text-purple-300 p-4 sm:p-6 overflow-hidden">
      <main className="flex-grow overflow-y-auto">
        <div className="mb-4 sm:mb-6">
          <label htmlFor="bracketId" className="block text-xl sm:text-2xl mb-2">
            Bracket ID
          </label>
          <input
            id="bracketId"
            type="text"
            value={bracketId}
            onChange={handleInputChange}
            className="w-full bg-purple-900 text-purple-100 text-lg sm:text-xl p-2 sm:p-3 rounded-lg border border-purple-700 focus:outline-none focus:border-purple-500"
            placeholder="Enter Bracket ID"
          />
        </div>
        
        <div>
          <h2 className="text-xl sm:text-2xl mb-2 sm:mb-4">Last Used</h2>
          <ul className="space-y-1 sm:space-y-2">
            {recentBrackets.map((bracket, index) => (
              <li
                key={index}
                className="text-lg sm:text-xl cursor-pointer hover:text-purple-100 transition-colors duration-300"
                onClick={() => handleQuickLink(bracket.id)}
              >
                {bracket.id}
              </li>
            ))}
          </ul>
        </div>
      </main>
      
      <footer className="mt-4 sm:mt-6">
        <button
          onClick={handleSubmit}
          className="w-full py-2 sm:py-3 bg-purple-900 text-purple-100 rounded-lg text-lg sm:text-xl font-bold hover:bg-purple-800 transition-colors duration-300"
        >
          Open Bracket
        </button>
      </footer>
    </div>
  );

}

export default LoadBracket