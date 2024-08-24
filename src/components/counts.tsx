import React, { useState } from 'react';

const CountsPage: React.FC = () => {
  const [counts, setCounts] = useState({
    players: 8,
    courts: 5,
    games: 10,
    pointsToWin: 15,
    finalists: 4,
  });

  const handleChange = (key: keyof typeof counts, value: number) => {
    setCounts(prev => ({ ...prev, [key]: Math.max(0, value) }));
  };

  const renderInput = (label: string, key: keyof typeof counts) => (
    <div className="mb-4">
      <label className="block text-xl mb-2">{label}</label>
      <div className="flex items-center bg-purple-900 rounded-lg">
        <button
          className="px-6 sm:py-3 bg-purple-800 text-purple-100 text-lg sm:text-xl font-bold hover:bg-purple-700 transition-colors duration-300 rounded-l-lg"
          onClick={() => handleChange(key, counts[key] - 1)}
        >
          -
        </button>
        <input
          type="number"
          value={counts[key]}
          onChange={(e) => handleChange(key, parseInt(e.target.value) || 0)}
          className="flex-grow bg-transparent text-center text-3xl font-bold focus:outline-none"
        />
        <button
          className="px-6 sm:py-3 bg-purple-800 text-purple-100 text-lg sm:text-xl font-bold hover:bg-purple-700 transition-colors duration-300 rounded-r-lg"
          onClick={() => handleChange(key, counts[key] + 1)}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col  bg-purple-950 text-purple-300 p-4">
      <main className="flex-grow overflow-y-auto">
        {renderInput('Number of players', 'players')}
        {renderInput('Number of courts available', 'courts')}
        {renderInput('Number of games to play', 'games')}
        {renderInput('Number of points to win the game', 'pointsToWin')}
        {renderInput('How many players make the finals', 'finalists')}
      </main>
      <footer className="mt-4 flex justify-between">
        <button className="px-6 sm:py-3 bg-purple-800 text-purple-100 rounded-lg text-lg sm:text-xl font-bold hover:bg-purple-700 transition-colors duration-300">Back</button>
        <button className="px-6 sm:py-3 bg-purple-800 text-purple-100 rounded-lg text-lg sm:text-xl font-bold hover:bg-purple-700 transition-colors duration-300">Next</button>
      </footer>
    </div>
  );
};

export default CountsPage;