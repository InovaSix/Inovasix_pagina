/**
 * Next.js static export emits routes as flat HTML files (e.g. inova-labs.html).
 * Nginx serves /inova-labs by looking for inova-labs/index.html, not inova-labs.html.
 * Mirror each route HTML into a directory index so production paths resolve.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'out')

const SKIP_FILES = new Set(['index.html', '404.html'])

if (!fs.existsSync(outDir)) {
  console.error('prepare-static-routes: out/ not found. Run npm run build first.')
  process.exit(1)
}

fs.writeFileSync(path.join(outDir, '.nojekyll'), '')

const htmlFiles = fs
  .readdirSync(outDir)
  .filter((name) => name.endsWith('.html') && !SKIP_FILES.has(name))

if (htmlFiles.length === 0) {
  console.log('prepare-static-routes: no route HTML files to mirror.')
  process.exit(0)
}

for (const file of htmlFiles) {
  const route = file.replace(/\.html$/, '')
  const source = path.join(outDir, file)
  const routeDir = path.join(outDir, route)
  const target = path.join(routeDir, 'index.html')

  fs.mkdirSync(routeDir, { recursive: true })
  fs.copyFileSync(source, target)
  console.log(`prepare-static-routes: ${route}/index.html <- ${file}`)
}
