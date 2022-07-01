import React, { useState } from "react";

interface SizeValue {
	innerWidth: number;
}

export const SizeContext = React.createContext<SizeValue>({
	innerWidth: 0,
});

interface Props {
	children: React.ReactElement;
}

const SizeObserver: React.FC<Props> = ({ children }) => {
	const [innerWidth, setInnerWidth] = useState<number>(0);

	function handleResize() {
		setInnerWidth(window.innerWidth);
	}

	React.useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<SizeContext.Provider value={{ innerWidth }}>
			{children}
		</SizeContext.Provider>
	);
};

export default SizeObserver;
