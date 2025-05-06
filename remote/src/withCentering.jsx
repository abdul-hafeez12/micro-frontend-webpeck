
// withCentering.js
import React from 'react';

// Higher-Order Component (HOC) with render function
export const withCentering = (WrappedComponent) => {
  return function WithCentering(props) {
    // Render function using React.createElement
    return React.createElement(
        'div',
        {
          className:
            'border border-gray-300 p-6 rounded shadow bg-white inline-block',
        },
        React.createElement(WrappedComponent, props) // Render the wrapped component (Remote content)
    );
  };
};

// RemoteComponent: A simple component that displays content
export const RemoteComponent = () => {
  return React.createElement('div',  { className: 'flex justify-center items-center p-4 rounded' }, '👋 Hello from Remote Project A');
};

// Wrap the RemoteComponent with the HOC
export const RemoteComponentWithCentering = withCentering(RemoteComponent);


export default RemoteComponentWithCentering;


