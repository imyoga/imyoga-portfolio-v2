import React from 'react'
import '../styles/ToTheTop.css'
import ScrollLink from './ScrollLink.jsx'

const ToTheTop = () => {
	return (
		<div className='container-to-the-top'>
			<ScrollLink scrollToTop={1}>
				<div>^</div>
			</ScrollLink>
		</div>
	)
}

export default ToTheTop
