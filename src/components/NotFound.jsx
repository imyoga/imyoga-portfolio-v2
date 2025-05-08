import React from 'react'
import notfound from '../assets/notfound.png'
import BackToHome from './BackToHome'
import '../styles/NotFound.css'

const NotFound = ({ className }) => {
	return (
		<div className={`container-not-found ${className || ''}`}>
			<img
				className='image-not-found'
				src={notfound}
				alt='not found icon'
				width={745}
				height={320}
				loading='lazy'
			/>
			<h2>Page Not Found !</h2>
			<BackToHome />
		</div>
	)
}

export default NotFound
