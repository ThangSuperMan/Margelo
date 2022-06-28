import React from "react";
import "../styles/member.scss";

interface Props {
	id: string;
	name: string;
	socialId: string;
	link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
	return (
		<div className="member">
			<img
				className="member__image"
				loading="lazy"
				src="/assets/margelo_faces_marc.svg"
				alt="member"
			/>
			<div className="member__name">{name}</div>
			<a href={link} className="member">
				<span>{socialId}</span>
			</a>
		</div>
	);
};

export default Member;
