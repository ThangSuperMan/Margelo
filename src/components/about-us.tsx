import React, { useEffect } from "react";
import "../styles/about-us.scss";
import Member from "./member";

const AboutUs: React.FC = () => {

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
					linkStaticImage="/assets/margelo_faces_marc.svg"
				/>
				<Member
					id="Marc"
					name="Szymon"
					socialId="@szymon20000"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_szymon.svg"
				/>
				<Member
					id="Marc"
					name="Thomas"
					socialId="@thomas-coldwell"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_thomas.svg"
				/>
				<Member
					id="Marc"
					name="Christoph"
					socialId="@chrispader"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_christoph.svg"
				/>
				<Member
					id="Marc"
					name="Janic"
					socialId="@janicduplessis"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_janic.svg"
				/>
				<Member
					id="Marc"
					name="Catalin"
					socialId="@catalinmiron"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_catalin.svg"
				/>
				<Member
					id="Marc"
					name="Mo"
					socialId="@gorhom"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_mo.svg"
				/>
				<Member
					id="Marc"
					name="Eric"
					socialId="@ericvicenti"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_eric.svg"
				/>
				<Member
					id="Marc"
					name="Matei"
					socialId="@mateioprea"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_matei.svg"
				/>
				<Member
					id="Marc"
					name="Viktoria"
					socialId="@viktoria.psd"
					link="https://github.com"
					linkStaticImage="/assets/margelo_faces_viktoria.svg"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
