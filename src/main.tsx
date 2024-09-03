import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { RouterProvider } from "react-router-dom";
import { router, routerWithJSX } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* 
    <h4 style={{ color: "#000" }}>object-declared ROUTER:</h4>
		<RouterProvider router={router} />
     */}
		<h4 style={{ color: "#000" }}>ROUTER WITH JSX:</h4>
		<RouterProvider router={routerWithJSX} />
		{/* <App /> */}
	</React.StrictMode>
);
