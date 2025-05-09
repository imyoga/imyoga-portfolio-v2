import React, { useState, useEffect } from 'react'
import ScrollLink from './ScrollLink'
import { Link } from 'react-router-dom'
import {
	FaBars,
	FaDownload,
	FaTools,
	FaHome,
	FaUser,
	FaCode,
	FaBriefcase,
	FaEnvelope,
} from 'react-icons/fa'
import '../styles/Navbar.css'

const Navbar = (props) => {
	const [toggle, setToggle] = useState(false)
	const [activeSection, setActiveSection] = useState('Hero')

	function toggleModal() {
		setToggle(!toggle)
	}

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (toggle && !event.target.closest('.container-navbar')) {
				setToggle(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [toggle])

	// Detect active section on scroll
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['Hero', 'Skills', 'Projects', 'About', 'Contact']
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					return rect.top <= 100 && rect.bottom >= 100
				}
				return false
			})

			if (currentSection) {
				setActiveSection(currentSection)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div id={props.id} className='container-navbar'>
			<div className='container-mobile-nav flex-item' onClick={toggleModal}>
				<div className='logo-container'>
					<FaHome className='nav-logo' /> Portfolio
				</div>
				<FaBars className='burger-icon' />
			</div>

			<div
				id={toggle ? 'modal-navlinks' : ''}
				className='container-navlinks flex-item'
			>
				<div>
					<ScrollLink
						scrollTo='Hero'
						classes={`nav-link ${activeSection === 'Hero' ? 'active' : ''}`}
						ontoggle={toggleModal}
						scrollToTop={1}
					>
						<FaHome className='nav-icon' /> Home
					</ScrollLink>
				</div>
				<div>
					<ScrollLink
						scrollTo='Skills'
						classes={`nav-link ${activeSection === 'Skills' ? 'active' : ''}`}
						ontoggle={toggleModal}
					>
						<FaCode className='nav-icon' /> Skills
					</ScrollLink>
				</div>

				<div>
					<ScrollLink
						scrollTo='Projects'
						classes={`nav-link ${activeSection === 'Projects' ? 'active' : ''}`}
						ontoggle={toggleModal}
					>
						<FaBriefcase className='nav-icon' /> Projects
					</ScrollLink>
				</div>

				<div>
					<ScrollLink
						scrollTo='About'
						classes={`nav-link ${activeSection === 'About' ? 'active' : ''}`}
						ontoggle={toggleModal}
					>
						<FaUser className='nav-icon' /> About
					</ScrollLink>
				</div>

				<div>
					<ScrollLink
						scrollTo='Contact'
						classes={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}
						ontoggle={toggleModal}
					>
						<FaEnvelope className='nav-icon' /> Contact
					</ScrollLink>
				</div>

				<div className='nav-divider'></div>

				<div>
					<a
						className='nav-link external-link'
						href='https://www.linkedin.com/in/yogeshmoradiya/'
						target={'blank'}
						onClick={toggleModal}
						aria-label='View Resume'
					>
						Resume
					</a>
				</div>

				<div>
					<a
						className='nav-link external-link'
						href='https://yms-tools.netlify.app/'
						target={'blank'}
						onClick={toggleModal}
						aria-label='Visit YMS Tools'
					>
						<FaTools className='tools-icon' /> YMS Tools
					</a>
				</div>

				<div>
					<Link
						to='/install-app'
						className='nav-link nav-install'
						onClick={toggleModal}
						aria-label='Install App'
					>
						<FaDownload className='download-icon' /> Install App
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
