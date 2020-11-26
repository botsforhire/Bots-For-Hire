const fs = require('fs')
const globby = require('globby')

var ignoredExtensions = ['ttf']
var ignoredFiles = ['arc-sw']

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/api',
    'public/*'
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
      .map(page => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('.md', '')
        var route = path === '/index' ? '' : path
        if (route.startsWith(`public`)) {
          route = route.replace(`public`, '')
        }

        if(ignoredExtensions.includes(route.split('.')[1] || ignoredFiles.includes(route))){
          return
        }

        if(route.charAt(0) != '/'){
          route = `/${route}`
        }

        return `<url>
          <loc>${`https://bots.wtf${route}`}</loc>
        </url>
        `
      })
      .join('')}
  </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()