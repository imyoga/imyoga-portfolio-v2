import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const stylesDir = path.join(__dirname, 'styles')
const files = fs.readdirSync(stylesDir)

files.forEach((file) => {
	if (file.endsWith('.css')) {
		const filePath = path.join(stylesDir, file)
		let content = fs.readFileSync(filePath, 'utf8')

		// Replace ./App.css with ../App.css
		if (content.includes("@import url('./App.css')")) {
			content = content.replace(
				"@import url('./App.css')",
				"@import url('../App.css')"
			)
			fs.writeFileSync(filePath, content, 'utf8')
			console.log(`Fixed import in ${file}`)
		}

		// Replace "App.css" with "../App.css"
		if (content.includes("@import url('App.css')")) {
			content = content.replace(
				"@import url('App.css')",
				"@import url('../App.css')"
			)
			fs.writeFileSync(filePath, content, 'utf8')
			console.log(`Fixed import in ${file}`)
		}
	}
})

console.log('All CSS files processed')
