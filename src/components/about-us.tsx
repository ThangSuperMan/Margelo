import React from "react";
import "../styles/about-us.scss";
import Member from "./member";

interface Props {}

const AboutUs: React.FC<Props> = () => {
	return (
		<section className="container">
			<div>
				<div className="container-quote">
					<p className="container-quote__paragraph">
						<strong>We will help you ship better apps, faster. </strong>
						Our team of expert engineers has created the best user experiences
						in some of the most popular apps worldwide.
					</p>
				</div>
			</div>
			<div className="ourteam">
				<h2 className="ourteam__title">Our team</h2>
				<div className="ourteam__sub-title">the &ldquo;spec-ops&rdquo;</div>
			</div>
			<div className="members">
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
				<Member
					id="Marc"
					name="Marc"
					socialId="@mrousavy"
					link="https://github.com"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
