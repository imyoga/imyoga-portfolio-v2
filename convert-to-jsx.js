import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get current file's directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.join(__dirname, 'src', 'components')

// Get all JS files in the components directory
const files = fs.readdirSync(componentsDir)

// Convert each .js file to .jsx
files.forEach((file) => {
	if (file.endsWith('.js')) {
		const oldPath = path.join(componentsDir, file)
		const newPath = path.join(componentsDir, file.replace('.js', '.jsx'))

		// Read the content of the .js file
		const content = fs.readFileSync(oldPath, 'utf8')

		// Write the content to the new .jsx file
		fs.writeFileSync(newPath, content)

		// Delete the old .js file
		fs.unlinkSync(oldPath)

		console.log(`Converted ${file} to ${file.replace('.js', '.jsx')}`)
	}
})

console.log('All component files converted from .js to .jsx')
