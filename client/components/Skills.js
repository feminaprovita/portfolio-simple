import React from 'react'
import {skillsByType} from '../seed'

const Skills = () => (
  <div id='skills'>
    <h1>Skills</h1>
      <h2>Languages</h2>
      <ul>{skillsByType.languages.map((s,i) => <li key={i}>{s}</li>)}</ul>
      <h2>Frontend</h2>
      <ul>{skillsByType.frontend.map((s,i) => <li key={i}>{s}</li>)}</ul>
      <h2>Backend</h2>
      <ul>{skillsByType.backend.map((s,i) => <li key={i}>{s}</li>)}</ul>
      <h2>Data</h2>
      <ul>{skillsByType.data.map((s,i) => <li key={i}>{s}</li>)}</ul>
      <h2>Programs/Services</h2>
      <ul>{skillsByType.programs.map((s,i) => <li key={i}>{s}</li>)}</ul>
      <h2>Non-Technical</h2>
      <ul>{skillsByType.nontechnical.map((s,i) => <li key={i}>{s}</li>)}</ul>
  </div>
)

export default Skills



// {this.state.expertSkills.map((s, i) => (
//   <li key={i}>{s.name}</li>
// ))}
