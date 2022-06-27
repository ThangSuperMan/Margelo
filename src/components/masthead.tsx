import React, { useState } from 'react'
import Logo from './logo'
import '../styles/masthead.scss'
import { ScrollContenxt } from '../utils/scroll-observer'

const MastHead: React.FC = () => {
	const refContainer = React.useRef<HTMLDivElement>(null)
	const [imageLoaded, setImageLoaded] = useState(false)
	const { scrollY } = React.useContext(ScrollContenxt)

	let progress = 0

	const { current: elContainer } = refContainer
	if (elContainer) {
		const { clientHeight } = elContainer
		progress = Math.min(1, scrollY / elContainer.clientHeight)

	}

	const handleImageLoaded = () => {
		console.log('handleImageLoaded')
		setImageLoaded(true)
	}

	React.useEffect(() => {
		console.log('just mouted the masthead.tsx')
		// console.log(imageLoaded)
	}, [])

	return (
		<div
			ref={refContainer}
			className='masthead'
			style={{
				transform: `translateY(${-progress * 20}vh)`
			}}
		>
			<video className='masthead__video' muted loop autoPlay >
				<source src='/assets/masthead-bg.webm' type='video/webm' />
			</video>
			<div className='masthead-content'>
				<div className='masthead-content__logo'>
					<Logo width={42} height={42} />
				</div>
				<div>
					<h1 className='masthead-content__title'>Margelo</h1>
					<h2 className='masthead-content__subtitle'>App development, done right.</h2>
				</div>
				<div
					className={`masthead-content__arrow-down 
					${imageLoaded ? "active" : "unactive"}`
					}
				>
					<img
						onLoad={handleImageLoaded}
						alt='scroll down'
						src='/assets/arrow-down.webp' />
				</div>
			</div>
		</div>
	)
}

export default MastHead
