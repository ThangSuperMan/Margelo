import React from 'react'

interface Props {
	width: number
	height: number
}

const Logo: React.FC<Props> = ({ width, height }) => {
	return (
		<div className='logo-container'>
			<svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_307_20)">
					<path d="M0 0V30.0017H30L0 0Z" fill="white" />
					<path d="M30 0V30.0017L19.007 10.9941L30 0Z" fill="white" />
				</g>
				<defs>
					<clipPath id="clip0_307_20">
						<rect width="30" height="30" fill="white" />
					</clipPath>
				</defs>
			</svg>

		</div>
	)
};

export default Logo;
