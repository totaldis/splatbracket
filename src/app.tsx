import { Outlet, useNavigate } from '@tanstack/react-router'

export function App() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate({ to: '/' })
  }

  return (
    <div className="h-screen bg-purple-950 text-white">
      <div className="flex justify-between items-center py-2 px-4">
        <h1 className="text-4xl">SPLAT BRACKET</h1>
        <button
          onClick={handleBack}
          className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded text-xl transition-colors duration-300"
        >
          Back
        </button>
      </div>
      <Outlet />
    </div>
  )
}