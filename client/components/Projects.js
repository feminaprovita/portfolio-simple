/* eslint-disable react/no-array-index-key */
/* eslint-disable complexity */
import React from 'react'
import projectPosts from '../../data/projectsUpdate'
import ProjectLinks from './ProjectLinks'

const Projects = () => (
  <div id='project-wrapper'>
    {projectPosts.map(p => (
      <div className='one-project' key='one-project'>
        <div key={p.keyName} id={p.keyName} className='project-info'>
        <a href={p.bestLink}>
          <h3>{p.name}</h3></a>
        <p><i>{p.role}</i></p>
        {p.bullets && p.bullets.length > 0 ? (
          <ul>{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        ) : (<p>{p.paragraph}</p>)}
          <ProjectLinks project={p} />
        </div>
        <div id={p.imgAlt} key={p.imgAlt} className='project-image-container'>
          <a href={p.bestLink} target='blank'>
            <img
              className='project-thumbnail'
              src={p.imageUrl}
              alt={p.imgAlt}
            /></a>
        </div>
      </div>
    ))}
  </div>
)

export default Projects
