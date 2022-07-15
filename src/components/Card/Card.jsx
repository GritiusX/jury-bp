import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

import "./Card.css";

export default function Card({ repo, user }) {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(`git clone ${repo.clone_url}`);
	};

	return (
		<section className="flex background w-[400px] h-[10rem] p-3 items-center gap-2 rounded-lg justify-center">
			<img
				className="w-20 h-20 rounded-full border-4 border-gray-700"
				src={user.avatar_url}
				alt={user.name}
			/>
			<article>
				<p className="text-sm font-bold text-white px-4">Repo:</p>
				<p className="text-sm text-white">{repo.full_name}</p>
			</article>
			<article className="flex items-center px-4">
				<p className="text-sm font-bold text-white mr-2">Open Issues:</p>
				<p className="text-sm text-white">{repo.open_issues}</p>
			</article>
			<div className="flex flex-col ">
				<button
					onClick={() => {
						copyToClipboard();
					}}
					className="h-5 w-5 text-white mb-8"
				>
					<BiCopy />
				</button>
				<button>
					<a href={repo.html_url} target="_blank" rel="noreferrer noopener">
						<AiOutlineSend className="h-5 w-5 text-white mt-8" />
					</a>
				</button>
			</div>
		</section>
	);
}

/* 		<Card sx={{ width: 345, backgroundColor: "#1E7175", }}>
			<CardHeader
				avatar={
					<Avatar alt={user.name} src={user.avatar_url} title={user.name} />
				}
			/>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h5">
						{repo?.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						hola
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card> 
	);
}*/
