const {blogData, projectData} = require('./seed')

const regexBlog = arr => {
  arr.forEach(b => {
    if(!b.slug) {
      b.slug = (b.title.match(/^.*(?=[\.,:;!?(–—])/g) || b.title)
        .toString()
        .replace(/[^\d\w\s]/g, '')
        .toLowerCase()
        .replace(/[^\d\w]/g, '-')
      b.keyName = b.slug + '-component'
      b.imgAlt = b.slug + '-thumbnail-' + b.date
    }
  })
  arr.sort((a, b) => new Date(b.date) - new Date(a.date))
  return arr
}

const regexProjects = arr => {
  arr.forEach(p => {
    if(!p.slug) {
      p.slug = p.name
        .replace(/[^\d\w\s]/g, '')
        .toLowerCase()
        .replace(/[^\d\w]/g, '-')
      p.keyName = p.slug + '-component'
      p.imgAlt = p.slug + '-thumbnail'
    }
    // if(!p.links) {
    //   p.hold = []
    //   if(p.url) p.hold.push(`<a href=${p.url} target="blank">Website</a>`)
    //   if(p.blogUrl) p.hold.push(p.blogUrl)
    //   if(p.github) p.hold.push(p.github)
    //   if(p.video) p.hold.push(p.video)
    //   p.links = p.hold.length > 1 ? p.hold.join('   ❦   ')
    //   : p.hold[0]
    // }
  })
  arr.sort((a, b) => a.priority - b.priority)
  return arr
}

// console.log('module.exports = ', regexBlog(blogData))
console.log('module.exports = ', regexProjects(projectData))
