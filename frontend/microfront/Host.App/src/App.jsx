import React, {lazy} from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const AuthTestControl = lazy(() => import('Auth/AuthTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
);

const App = () => (
  <div className="container">
    <AuthTestControl></AuthTestControl>
  </div>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)