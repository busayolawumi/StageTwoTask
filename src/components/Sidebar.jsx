import React from "react";
import { Link } from "react-router-dom";
import moviebox from "../assets/moviebox.svg";
import home from "../assets/home.svg";
import movie from "../assets/movie.svg";
import tv from "../assets/tv.svg";
import calendar from "../assets/Calendar.svg";
import logout from "../assets/Logout.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="dashLogo">
				<Link to={"/"}>
					<img src={moviebox} alt="moviebox" />
				</Link>
			</div>
			<div className="dashItems">
				<div className="item">
					<div>
						<img src={home} alt="home" />
						<p>Home</p>
					</div>
				</div>
				<div className="item-hignlight">
					<div>
						<img src={movie} alt="movie" />
						<p>Movies</p>
					</div>
				</div>
				<div className="item">
					<div>
						<img src={tv} alt="tv" />
						<p>TV Series</p>
					</div>
				</div>
				<div className="item">
					<div>
						<img src={calendar} alt="calendar" />
						<p>Upcoming</p>
					</div>
				</div>
				{/* box */}
				<div className="start-playing">
					<div>
						<div className="quizes">
							<p>Play movie quizes and earn free tickets</p>
						</div>
						<div className="people">
							<p>50k people are playing now</p>
						</div>
						<div className="start-btn">
							<button>Start playing</button>
						</div>
					</div>
				</div>
				<div
					className="item"
					style={{
						marginTop: "20px",
					}}
				>
					<div>
						<img src={logout} alt="logout" />
						<p>Logout</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
