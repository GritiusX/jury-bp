import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./index.css";
import Repositories from "./Pages/Repositories.jsx";

function App() {
	const [user, setUser] = useState({});
	//el token de Authorization vence el 10 de octubre 2022
	const userName = "GritiusX";
	const githubURL = `https://api.github.com/users/${userName}`;
	console.log(process.env);

	useEffect(() => {
		const fetchData = async () => {
			await fetch(githubURL, {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setUser(data);
				});
		};
		fetchData();
	}, [githubURL]);
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/repositories" element={<Repositories user={user} />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
