import { Outlet } from "react-router-dom";
// import { AboutPage, HomePage, JoinUsPage } from "../pages";
import { Footer } from "./Footer";

export function App() {
	return (
		<>
			{/* <HomePage /> */}
			{/* <AboutPage /> */}
			{/* <JoinUsPage /> */}
			{/* outlet is a placeholder for the children routes of the component */}
			<Outlet />
			<Footer />
		</>
	);
}
