
import React, { Suspense } from 'react';
// Lazy load remote module
const RemoteComponentWithCentering = React.lazy(() => import('commonComponents/RemoteComponentWithCentering'));


function App() {

  return (

    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Sidebar: hidden on small screens, visible on md and up */}
      <aside className="hidden md:block row-span-3 bg-gray-100 p-4">Sidebar</aside>

      {/* Header: will always span the full width */}
      <header className="bg-blue-500 p-4 md:col-start-2">Header</header>

      {/* Main Content: Ensure this takes up the available height and doesn't exceed the screen */}
      <main className="bg-white p-4 md:col-start-2 flex flex-col h-full overflow-hidden">
        {/* Add your remote content here */}
        <Suspense fallback={<div>Loading remote...</div>}>
        <div className='p-2'><RemoteComponentWithCentering />
        </div>
        </Suspense>
      </main>

      {/* Footer: will always span the full width */}
      <footer className="bg-blue-500 p-4 md:col-start-2">Footer</footer>
    </div>
  )
}

export default App
