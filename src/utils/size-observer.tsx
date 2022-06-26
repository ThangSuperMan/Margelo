import React from 'react'

interface Props {
	children: React.ReactElement
}

const SizeObserver: React.FC<Props> = ({ children }) => {

	function handleResize() {
		console.log(window.innerWidth)
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div>
			{children}
		</div>
	)
}

export default SizeObserver
