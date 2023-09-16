import React from "react";
import { Link } from "react-router-dom";
import { movie } from "./Popular";

function Card() {
	return (
		<div>
			<div key={movie.id}>
				<Link to={"/movie/" + movie.id}>
					<p>{movie.title}</p>
					{movie.poster_path ? (
						<img
							src={`${imageLink}${movie.poster_path}`}
							alt={movie.title}
						/>
					) : null}
				</Link>
			</div>
		</div>
	);
}

export default Card;
