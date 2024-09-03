import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerWithJSX } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App/> */}
		<RouterProvider router={routerWithJSX} />
	</React.StrictMode>
);
