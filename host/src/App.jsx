
import React, { Suspense, lazy, useState } from 'react';
// Lazy load remote module
// const RemoteComponentWithCentering = React.lazy(() => import('commonComponents/RemoteComponentWithCentering'));

import DynamicRemoteComponent from './utility/DynamicRemoteComponent.jsx';

// const RemoteComponentWithCenteringB = lazy(
//   loadRemoteComponent('remoteApp', './RemoteComponentWithCenteringB', 'http://localhost:3001/remoteEntry.js')
// );

// const RemoteComponentWithCenteringA = lazy(
//   loadRemoteComponent('remoteApp', './RemoteComponentWithCenteringA', 'http://localhost:3001/remoteEntry.js')
// );


const remoteConfigs = {
  remoteA: {
    url: 'http://localhost:3001/remoteEntry.js',
    scope: 'remoteApp',
    module: './RemoteComponentWithCenteringA',
  },
  remoteB: {
    url: 'http://localhost:3001/remoteEntry.js',
    scope: 'remoteApp',
    module: './RemoteComponentWithCenteringB',
  },
};




function App() {
  const [selectedRemote, setSelectedRemote] = useState(null);

  return (

    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Sidebar: hidden on small screens, visible on md and up */}
      <aside className="hidden md:block row-span-3 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        {Object.keys(remoteConfigs).map(key => (
          <button
            key={key}
            onClick={() => setSelectedRemote(key)}
            className="block w-full mb-2 px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded"
          >
            Load {key}
          </button>
        ))}
      </aside>

      {/* Header: will always span the full width */}
      <header className="bg-blue-500 p-4 md:col-start-2">Header</header>

      {/* Main Content: Ensure this takes up the available height and doesn't exceed the screen */}
      <main className="bg-white p-4 md:col-start-2 flex flex-col h-full overflow-hidden">
        {/* Add your remote content here */}
        {/* <Suspense fallback={<div>Loading remote...</div>}>
        <div className='p-2'><RemoteComponentWithCentering />
        </div>
        </Suspense> */}

         <DynamicRemoteComponent remoteKey={selectedRemote} config={remoteConfigs} />

        {/* {selectedRemote == 'remoteA' ? (
          <Suspense fallback={<div>Loading remote...</div>}>
            <div className="p-2">
              <RemoteComponentWithCenteringA />
            </div>
          </Suspense>
        ) : selectedRemote == 'remoteB' ? (
          <Suspense fallback={<div>Loading remote...</div>}>
            <div className="p-2">
              <RemoteComponentWithCenteringB />
            </div>
          </Suspense>
        ) : (
          <div className="text-gray-500">Select a remote component to load.</div>
        )} */}

      </main>
      {/* Footer: will always span the full width */}
      <footer className="bg-blue-500 p-4 md:col-start-2">Footer</footer>
    </div >
  )
}

export default App;
