import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import play from "../assets/Play.svg";
import list from "../assets/List.svg";
import Sidebar from "../components/Sidebar.jsx";

function Movie() {
	let params = useParams();

	const [movie, setMovie] = useState({});

	useEffect(() => {
		getDetails();
	}, [params.id]);

	const getDetails = async () => {
		const API_KEY = import.meta.env.VITE_API_KEY;
		const api = await axios.get(
			`https://api.themoviedb.org/3/movie/${params.id}}?api_key=${API_KEY}&language=en-US`
		);
		setMovie(api.data);
		console.log(api.data);
	};

	return (
		<>
			<Sidebar />
			<div>
				<div className="details-body1">
					<div className="background-poster">
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
						/>
					</div>

					<div className="top">
						<div className="release_date">
							<p data-testid="movie-release-date">
								{movie.release_date}
							</p>
						</div>
						<div className="dot">
							<span>.</span>
						</div>
						<div className="movie-title">
							<h1 data-testid="movie-title">{movie.title}</h1>
						</div>
						<div className="dot">
							<span>.</span>
						</div>
						<div className="runtime">
							<p data-testid="movie-runtime">
								{" "}
								{movie.runtime} minutes
							</p>
						</div>
					</div>

					<div className="overBody">
						<div className="overview">
							<p data-testid="movie-overview">{movie.overview}</p>
						</div>
						<div className="details-body2">
							<div className="part2">
								<button className="trailer">
									<img src={play} alt="play" />
									Watch Tralier
								</button>
								<button className="more-option">
									<img src={list} alt="list" />
									More watch options
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Movie;
