// loadRemoteComponent.js

// Load remoteEntry script dynamically
function loadRemoteEntry(url, scope) {
    return new Promise((resolve, reject) => {
      if (window[scope]) {
        return resolve();
      }
  
      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
      script.async = true;
  
      script.onload = () => {
        resolve();
      };
  
      script.onerror = () => {
        reject(new Error(`Failed to load remote entry: ${url}`));
      };
  
      document.head.appendChild(script);
    });
  }
  
  // Main loader function
  export function loadRemoteComponent(scope, module, remoteUrl) {
    return async () => {
      // Load remote script if not loaded yet
      await loadRemoteEntry(remoteUrl, scope);
  
      await __webpack_init_sharing__('default');
      const container = window[scope];
      await container.init(__webpack_share_scopes__.default);
  
      const factory = await container.get(module);
      const Module = factory();
      return Module;
    };
  }
  