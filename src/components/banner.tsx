import React from 'react'
import '../styles/banner.scss'

const Banner: React.FC = () => {

	return (
		<div className='banner' >
			<video className='banner__video' muted loop autoPlay >
				<source src='/assets/masthead-bg.webm' type='video/webm' />
			</video>
			<div className='banner-content' >
				<h1 className='banner-content__title' > Margelo </h1>
				<h2 className='banner-content__subtitle' > App development, done right.</h2>
			</div>
		</div>
	)
}

export default Banner
