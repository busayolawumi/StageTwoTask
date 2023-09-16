import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem("popular");

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			const APIKEY = import.meta.env.VITE_API_KEY;
			const api = await axios.get(
				`https://api.themoviedb.org/3/movie/top_rated?`
			);

			localStorage.setItem("popular", JSON.stringify(api.data.recipes));
			setPopular(api.data.recipes);
			console.log(api);
		}
	};

	return (
		<div>
			<h3>Popular Picks</h3>
			{popular.map((recipe) => {
				return (
					<div key={recipe.id}>
						<Link to={"/recipe/" + recipe.id}>
							<p>{recipe.title}</p>
							{recipe.image ? (
								<img src={recipe.image} alt={recipe.title} />
							) : null}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Popular;
