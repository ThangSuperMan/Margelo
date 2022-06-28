import React from 'react'
import '../styles/aboutus.scss'

interface Props {

}

const AboutUs: React.FC<Props> = () => {
	return (
		<section className='container'>
			<div className='container-quote'>
				<p className='container-quote__paragraph'>
					<strong>We will help you ship better apps, faster. </strong>
					Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.
				</p>
			</div>
			<div className='container__members'>members</div>
		</section>
	)
};

export default AboutUs;
