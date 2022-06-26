import React from 'react'

interface ScrollValue {
	scrollY: number
}

export const ScrollContenxt = React.createContext<ScrollValue>({
	scrollY: 0
})

interface Props {
	children: React.ReactElement
}

const SizeObserver: React.FC<Props> = ({ children }) => {
	const [scrollY, setScrollY] = React.useState<number>(0)

	function handleScroll() {
		console.log(window.scrollY)
		setScrollY(window.scrollY)
	}

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<ScrollContenxt.Provider value={{ scrollY }}>
			{children}
		</ScrollContenxt.Provider>
	)
};

export default SizeObserver;
