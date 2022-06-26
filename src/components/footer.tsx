import React from 'react'

interface Props {
	children: React.ReactElement
}

const Footer: React.FC<Props> = ({ children }) => {
	const [count, setCounnt] = React.useState<number>(0)

	function handleClick() {
		setCounnt(count + 1)
	}

	return (
		<div className='footer'>
			<button onClick={handleClick}>count</button>
			<h2>hello</h2>
			<div>Footer{children} {count}</div>
		</div>
	)
};

export default Footer;
