import React from "react";
import Search from "../components/Search";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<div className="hero">
				<div className="nav">
					<div to={"/"}>
						<img
							className="logo"
							src="./src/assets/Logo.png"
							alt=""
						/>
					</div>
					<Search />
					<div>
						<img
							className="signin"
							src="./src/assets/Menu.png"
							alt=""
						/>
					</div>
				</div>
				<div className="description">
					<h1>John Wick 3 : Parabellum</h1>
					<img src="./src/assets/Rating.png" alt="" />
					<p>
						John Wick is on the run after killing a member of the
						international assassins' guild, and with a $14 million
						price tag on his head, he is the target of hit men and
						women everywhere.
					</p>
				</div>
			</div>
			{/* 10 Featured Movies go here */}
			<div>
				<div className="feature-header">
					<h2>Featured Movie</h2>
					<p>See more &gt;</p>
				</div>
				<Popular />
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Home;
