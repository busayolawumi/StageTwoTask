import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submithandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + input);
	};

	return (
		// <form onSubmit={submithandler}>
		<form>
			<div className="search-div">
				<FaSearch className="search-button" />
				<input
					placeholder="What do you want to watch?"
					className="search-input"
					onChange={(e) => setInput(e.target.value)}
					type="text"
					value={input}
				/>
			</div>
		</form>
	);
}

export default Search;
