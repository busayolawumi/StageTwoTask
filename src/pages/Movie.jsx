import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
	let params = useParams();

	const [details, setDetails] = useState({});
	const [active, setActive] = useState("summary");

	useEffect(() => {
		getDetails();
	}, [params.name]);

	const getDetails = async () => {
		const APIKEY = import.meta.env.VITE_API_KEY;
		const api = await axios.get(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${APIKEY}`
		);
		setDetails(api.data);
	};

	return <div>Movie details</div>;
}

export default Movie;
