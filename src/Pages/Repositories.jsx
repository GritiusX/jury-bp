import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card/Card.jsx";

export default function Repositories({ user }) {
	const reposURL = `https://api.github.com/user/repos`;
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchRepos = async () => {
			await fetch(reposURL, {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setRepos(data);
				});
		};
		fetchRepos();
	}, [reposURL]);

	return (
		<div className="flex flex-wrap justify-center gap-5 max-w-[1400px] mt-5">
			{repos.map((repo) => (
				<Card key={repo.id} repo={repo} user={user} />
			))}
		</div>
	);
}
