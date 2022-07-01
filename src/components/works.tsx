import React from "react";
import "../styles/works.scss";

const Works: React.FC = () => {
	return (
		<div className="work">
			<div className="work-content">
				<div className="work-wrapper">
					<span className="work-content__sub-title">We built</span>
					<h3 className="work-content__title">
						<span className="work-content__title-decoration">Pink Panda'</span>s
						app.
					</h3>
				</div>
			</div>
			<div className="work__image">
				<img src="/assets/pinkpanda.webp" alt="work built" />
			</div>
		</div>
	);
};

export default Works;
