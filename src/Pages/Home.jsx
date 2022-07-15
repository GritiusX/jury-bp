import React from "react";

export default function Home({ user, repos, fetchRepos }) {
	return (
		<>
			<article className="flex justify-center">
				<div className="flex flex-col items-center mt-12 bg-[#1E7175] w-[800px] rounded-md py-5">
					<img
						className="w-40 h-40 rounded-lg border-2 border-white"
						src={user.avatar_url}
						alt="user photograph"
					/>

					<p className="text-white ">
						Username: <span className="font-semibold">{user.login}</span>
					</p>
					<p className="text-white ">
						Real name: <span className="font-semibold">{user.name} </span>
					</p>
					<p className="text-white ">
						Id: <span className="font-semibold">{user.id}</span>
					</p>
					<p className="text-white ">
						Public repos:{" "}
						<span className="font-semibold">{user.public_repos}</span>
					</p>
				</div>
			</article>
		</>
	);
}
