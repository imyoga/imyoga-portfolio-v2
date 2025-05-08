import { useState, useEffect } from 'react'
import { MdNightlight, MdLightMode } from 'react-icons/md'
import '../styles/LightMode.css'

const LightMode = (props) => {
	const [light, setLight] = useState(false)

	// Send theme state to parent component
	useEffect(() => {
		props.func(light)
	}, [light, props])

	return (
		<div className='container-light-mode' onClick={() => setLight(!light)}>
			{light ? (
				<MdLightMode className='icon-light-mode' />
			) : (
				<MdNightlight className='icon-light-mode' />
			)}
		</div>
	)
}

export default LightMode
