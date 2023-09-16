import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
	return (
		<div className="footer">
			<div className="socials">
				<AiFillFacebook />
				<BsInstagram />
				<BsTwitter />
				<BsYoutube />
			</div>
			<div className="links">
				<p>Conditions of Use</p>
				<p>Privacy & Policy</p>
				<p>Press Room</p>
			</div>
			<div>
				<p className="copyright">
					© 2021 MovieBox by Adriana Eka Prayudha{" "}
				</p>
			</div>
		</div>
	);
}

export default Footer;
