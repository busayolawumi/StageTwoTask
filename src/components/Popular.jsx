import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const API_KEY = import.meta.env.VITE_API_KEY;
		const API_URL = "https://api.themoviedb.org/3/movie/top_rated?";
		const api = await axios.get(
			`${API_URL}api_key=${API_KEY}&language=en-US&page=1`
		);
		console.log(api.data.results);
		setPopular(api.data.results);
	};

	const imageLink = "https://image.tmdb.org/t/p/w500";

	return (
		<div className="feature-list">
			{popular.slice(0, 10).map((movie) => {
				return (
					<div
						key={movie.id}
						className="card"
						data-testid="movie-card"
					>
						<Link className="deats" to={"/movies/" + movie.id}>
							{movie.poster_path ? (
								<div data-testid="movie-poster">
									<img
										src={`${imageLink}${movie.poster_path}`}
										alt={movie.title}
									/>
								</div>
							) : null}
							<p data-testid="movie-release-date">
								{movie.release_date}
							</p>
							<h6 data-testid="movie-title">{movie.title}</h6>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Popular;
