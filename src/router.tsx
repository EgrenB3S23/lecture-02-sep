import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AboutPage, HomePage, JoinUsPage } from "./pages";

// router built with object:
export const router = createBrowserRouter([
	{
		element: <App />,
		path: "",
		children: [
			{
				index: true, // index:true sets the default child route to be displayed together with the parent route.
				element: <HomePage />,
				/* path: "/home", */
			},
			{
				element: <AboutPage />,
				path: "about",
			},
			{
				element: <JoinUsPage />,
				path: "join-us",
			},
		],
	},
]);

// router built with JSX elements:
export const routerWithJSX = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} path="">
			<Route index={true} element={<HomePage />} />
			<Route path={"about"} element={<AboutPage />} />
			<Route path={"join-us"} element={<JoinUsPage />} />
		</Route>
	)
);
