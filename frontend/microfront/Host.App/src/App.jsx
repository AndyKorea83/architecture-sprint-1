import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";


const AuthTestControl = lazy(() => import('Auth/AuthTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
);

// const LoginControl = lazy(() => import('Login/Login').catch(() => {
//   return { default: () => <div className='error'>Component is not available!</div> };
// })
// );

const Page = () => (
  <div className="container">
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<Page />)
serviceWorker.unregister();
