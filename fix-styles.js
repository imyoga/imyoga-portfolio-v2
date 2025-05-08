import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const stylesDir = join(__dirname, 'src', 'styles')
const files = readdirSync(stylesDir)

let fixedCount = 0

files.forEach((file) => {
	if (file.endsWith('.css')) {
		const filePath = join(stylesDir, file)
		let content = readFileSync(filePath, 'utf8')
		let modified = false

		// Replace ./App.css with ../App.css
		if (content.includes("@import url('./App.css')")) {
			content = content.replace(
				"@import url('./App.css')",
				"@import url('../App.css')"
			)
			modified = true
		}

		// Replace "App.css" with "../App.css"
		if (content.includes("@import url('App.css')")) {
			content = content.replace(
				"@import url('App.css')",
				"@import url('../App.css')"
			)
			modified = true
		}

		if (modified) {
			writeFileSync(filePath, content, 'utf8')
			console.log(`Fixed import in ${file}`)
			fixedCount++
		}
	}
})

console.log(`Fixed ${fixedCount} CSS files`)
