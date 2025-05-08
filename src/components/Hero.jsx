import React from 'react'
import AvatarSvg from '../assets/avatar.svg?react'
import '../styles/Hero.css'

const Hero = (props) => {
	return (
		<div id={props.id} className='container-hero'>
			<div className='hero-titles'>
				<h2>
					👋Hi, <span>I'm </span>
					<span className='name-heading'>Yogesh Moradiya</span>
				</h2>
				<p className='title-heading'>I design and build things for web.</p>
			</div>

			<div className='hero-background'>{''}</div>

			<div className='avatar'>
				<AvatarSvg />
			</div>
		</div>
	)
}

export default Hero
