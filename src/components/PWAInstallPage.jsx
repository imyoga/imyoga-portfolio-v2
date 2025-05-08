import React, { useState, useEffect } from 'react'
import {
	FaDownload,
	FaLaptop,
	FaMobileAlt,
	FaWifi,
	FaBolt,
} from 'react-icons/fa'
import { MdOfflineBolt } from 'react-icons/md'
import BackToHome from './BackToHome'
import '../styles/PWAInstallPage.css'

const PWAInstallPage = ({ theme }) => {
	const [supportsPWA, setSupportsPWA] = useState(false)
	const [promptInstall, setPromptInstall] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false)

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault()
			setSupportsPWA(true)
			setPromptInstall(e)
		}

		window.addEventListener('beforeinstallprompt', handler)

		// Check if already installed
		if (
			window.matchMedia('(display-mode: standalone)').matches ||
			window.navigator.standalone === true
		) {
			setIsInstalled(true)
		}

		return () => window.removeEventListener('beforeinstallprompt', handler)
	}, [])

	const onInstallClick = (evt) => {
		evt.preventDefault()
		if (!promptInstall) {
			return
		}

		promptInstall.prompt()

		promptInstall.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the install prompt')
				setIsInstalled(true)
			} else {
				console.log('User dismissed the install prompt')
			}
			setPromptInstall(null)
		})
	}

	return (
		<div className={`pwa-install-page ${theme ? 'light-theme' : ''}`}>
			<div className='pwa-install-container'>
				<h1>Install Our Progressive Web App</h1>

				<div className='pwa-benefits'>
					<div className='benefit-card'>
						<FaLaptop className='benefit-icon' />
						<h3>Desktop & Mobile</h3>
						<p>Use our app on any device with a modern browser</p>
					</div>

					<div className='benefit-card'>
						<MdOfflineBolt className='benefit-icon' />
						<h3>Works Offline</h3>
						<p>Access the app even without an internet connection</p>
					</div>

					<div className='benefit-card'>
						<FaBolt className='benefit-icon' />
						<h3>Fast Loading</h3>
						<p>Enjoy quick load times and smooth performance</p>
					</div>

					<div className='benefit-card'>
						<FaMobileAlt className='benefit-icon' />
						<h3>App-like Experience</h3>
						<p>Feels like a native app with full-screen mode</p>
					</div>
				</div>

				<div className='install-instructions'>
					<h2>How to Install</h2>

					{isInstalled ? (
						<div className='already-installed'>
							<h3>You've already installed our app!</h3>
							<p>
								Thank you for installing our app. You can access it from your
								home screen or app drawer.
							</p>
						</div>
					) : supportsPWA ? (
						<div className='install-now'>
							<p>
								Your browser supports PWA installation. Click the button below
								to install:
							</p>
							<button className='install-button' onClick={onInstallClick}>
								<FaDownload /> Install App
							</button>
						</div>
					) : (
						<div className='manual-install'>
							<h3>Install on Chrome, Edge or other browsers</h3>
							<ol>
								<li>Click on the address bar</li>
								<li>Look for the "Install" or "+" icon on the right side</li>
								<li>Click "Install" and follow the prompts</li>
							</ol>

							<h3>Install on iOS Safari</h3>
							<ol>
								<li>Tap the "Share" button at the bottom of the screen</li>
								<li>Scroll down and tap "Add to Home Screen"</li>
								<li>Tap "Add" in the top right corner</li>
							</ol>

							<h3>Install on Android Chrome</h3>
							<ol>
								<li>Tap the three dots menu in the top right</li>
								<li>Tap "Add to Home screen"</li>
								<li>Tap "Add" to confirm</li>
							</ol>
						</div>
					)}
				</div>

				<div className='back-to-home-wrapper'>
					<BackToHome />
				</div>
			</div>
		</div>
	)
}

export default PWAInstallPage
