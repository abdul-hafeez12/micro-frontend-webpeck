import React, { Suspense, lazy } from 'react';
import { loadRemoteComponent } from './loadRemoteComponent';

const DynamicRemoteComponent = ({ remoteKey, config }) => {
  if (!remoteKey || !config[remoteKey]) {
    return <div className="text-gray-500">Select a remote component to load.</div>;
  }

  const { scope, module, url } = config[remoteKey];

  const LazyComponent = lazy(loadRemoteComponent(scope, module, url));


  return (
    <Suspense fallback={<div>Loading remote...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default DynamicRemoteComponent;
