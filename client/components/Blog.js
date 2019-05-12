import React from 'react'
import blogPosts from '../../data/blogUpdate'

const Blog = () => (
  <div id='blog'>
    <h1>Blog Posts</h1>
      {blogPosts.map(b => {
        return (
          <div className="one-blog" key={b.keyName}>
            <a href={b.postUrl} target="blank">
            <img
              className="blog-thumbnail"
              src={b.imageUrl}
              alt={b.imgAlt}
            /></a>
            <div className="blog-info">
            <a href={b.postUrl} target="blank"><h3>{b.title}</h3></a>
              {b.summary ? <p>{b.summary}</p> : <p>{b.teaser}</p>}
              <p><a href={b.postUrl} target="blank">
                  Read more...</a></p>
            </div>
          </div>
        )
      })}
  </div>
)

export default Blog
