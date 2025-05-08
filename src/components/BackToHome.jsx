import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import '../styles/BackToHome.css'

const BackToHome = () => {
	const handleClick = () => {
		// Ensure scroll to top when the link is clicked
		window.scrollTo(0, 0)
	}

	return (
		<div className='container-back-to-home'>
			<Link to='/' onClick={handleClick}>
				<div className='container-link'>
					<AiOutlineHome className='icon-home' loading='lazy' />
					<p>Back to home </p>
				</div>
			</Link>
		</div>
	)
}

export default BackToHome
