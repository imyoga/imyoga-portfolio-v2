import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)

serviceWorkerRegistration.register()
