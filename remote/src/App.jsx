import React from "react";
import RemoteComponentWithCenteringA from "./withCenteringA.jsx";
import RemoteComponentWithCenteringB from "./withCenteringB.jsx";



const App = () => {
   
    return (
         <div>
            <RemoteComponentWithCenteringA />
            <RemoteComponentWithCenteringB />

         </div>
    )
}

export default App;