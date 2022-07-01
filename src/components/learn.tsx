import React from "react";

interface Props {
	title: string;
}

const Learn: React.FC<Props> = ({ title }) => {
	return <div>{title}</div>;
};

export default Learn;
