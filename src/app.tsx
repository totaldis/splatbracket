import { Link, Outlet, useRouterState } from '@tanstack/react-router'

const routeTitles: { [key: string]: string } = {
  '/styles': 'Choose Style',
  '/load': 'Load Bracket',
  '/counts': 'Counts',
  // Add more routes and titles as needed
}

export function App() {
  const location = useRouterState({ select: (s) => s.location })
  const isRootRoute = location.pathname === '/'
  const routeTitle = routeTitles[location.pathname] || ''

  const handleBack = () => {
    window.history.back()
  }

  return (
    <div className="h-screen bg-purple-950 text-white">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <h1 className="text-4xl">SPLAT BRACKET</h1>
          {!isRootRoute && (
            <span className="ml-4 text-2xl text-purple-300">{routeTitle}</span>
          )}
        </div>
        <button
          onClick={handleBack}
          className="hover:bg-purple-900 text-white font-bold py-2 px-4 rounded text-xl transition-colors duration-300"
        >
          Back
        </button>
      </div>
      {isRootRoute && <div className="flex flex-col sm:flex-row h-[calc(100vh-88px)]">
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
    </div>}
    {isRootRoute ? null : <Outlet />}
    </div>
  )
}