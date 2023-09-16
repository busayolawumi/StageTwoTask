import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "031b1480eda9caa523cf69bf05e28933";

function Searched() {
	const [searched, setSearched] = useState([]);
	let params = useParams();

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	const getSearched = async (name) => {
		// const APIKEY = import.meta.env.VITE_API_KEY;
		const api = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
		);
		setSearched(api.data.results);
	};

	return <div>Search Result</div>;
}

export default Searched;
