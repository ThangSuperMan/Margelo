import React, { useContext, useRef } from 'react'
import '../styles/learn.scss'
import { ScrollContenxt } from '../utils/scroll-observer';

interface Props {

}

const Learn: React.FC<Props> = () => {
	const refContainer = useRef<HTMLDivElement>(null)
	const { scrollY } = useContext(ScrollContenxt)

	let progress = 0

	const { current: elContainer } = refContainer
	if (elContainer) {
		progress = Math.min(1, scrollY / elContainer.clientHeight)
		console.log(`scrollY: ${scrollY}`)
		console.log(`progress: ${progress}`)
	}
	return (
		<div
			ref={refContainer}
			className='learn'
		// style={{
		// 	transform: `translateY(${-progress * 100}vh)`
		// }}
		>
			<div>-- 100px</div>
			<div>-- 200px</div>
			<div>-- 300px</div>
			<div>-- 400px</div>
		</div>
	)
};

export default Learn;
