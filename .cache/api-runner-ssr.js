var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[],"className":"heading-anchor","isIconAfterHeader":true,"offsetY":0},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"G-0NB4Z5VCEQ","head":true,"anonymize":true,"defer":true,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              title\n              description\n              siteUrl\n              site_url: siteUrl\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMarkdownRemark(\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                nodes {\n                  excerpt\n                  html\n                  fields {\n                    slug\n                  }\n                  frontmatter {\n                    title\n                    date\n                  }\n                }\n              }\n            }\n          ","output":"/rss.xml","title":"Gatsby Starter Lavendar RSS Feed"}]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"GGos3 Blog","short_name":"GGos3 Blog","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"929e1bf85b90149724d1f77ed3685209"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby-plugin-offline/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'default-site-plugin',
      plugin: require('/home/runner/work/blog/blog/gatsby-ssr.tsx'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/home/runner/work/blog/blog/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
