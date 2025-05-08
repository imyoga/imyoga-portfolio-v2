import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Thankyou from './components/Thankyou'
import NotFound from './components/NotFound'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ToTheTop from './components/ToTheTop'
import LightMode from './components/LightMode'
import PWAInstallPage from './components/PWAInstallPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
	const [theme, setTheme] = useState(false)

	const toggleTheme = (isLight) => {
		setTheme(isLight)
	}

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<div
							id='App'
							className={theme ? 'container-app light-theme' : 'container-app'}
						>
							<Navbar id={'Navbar'} className='child-app' />
							<Hero id={'Hero'} className='child-app' />
							<Skills id={'Skills'} className='child-app' />
							<Projects id={'Projects'} className='child-app' />
							<About id={'About'} className='child-app' />
							<Contact id={'Contact'} className='child-app' />
							<Footer id={'Footer'} className='child-app' />
							<ToTheTop id={'ToTheTop'} className='child-app' />
							<LightMode
								id={'LightMode'}
								className='child-app'
								func={toggleTheme}
							/>
						</div>
					}
				/>
				<Route
					exact
					path='/install-app'
					element={<PWAInstallPage theme={theme} />}
				/>
				<Route
					exact
					path='/thankyou'
					element={
						<Thankyou
							className={
								theme ? 'container-thankyou light-theme' : 'container-thankyou'
							}
						/>
					}
				/>
				<Route
					path='*'
					element={<NotFound className={theme ? 'light-theme' : ''} />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
