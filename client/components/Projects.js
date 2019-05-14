/* eslint-disable react/no-array-index-key */
/* eslint-disable complexity */
import React from 'react'
import projectPosts from '../../data/projectsUpdate'
import ProjectLinks from './ProjectLinks'

const Projects = () => (
  <div id='project-wrapper'>
    {projectPosts.map(p => (
      <div key={p.keyName} id={p.keyName}>
      <h3>{p.name}</h3>
      <p><i>{p.role}</i></p>
      {p.bullets && p.bullets.length > 0 ? (
        <ul>{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
      ) : (
        <p>{p.paragraph}</p>
      )}
        <ProjectLinks project={p} />
      </div>
    ))}
  </div>
)

export default Projects
