import React from 'react'
import {skillsByType} from '../../data/seed'

const Skills = () => (
  <div id='skills'>
    <h1>Skills</h1>
    <div id='skill-wrapper'>
      <div className='skill-box' id='lang-box'>
        <h2>Languages</h2>
        <ul>{skillsByType.languages.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className='skill-box' id='frontend-box'>
        <h2>Frontend</h2>
        <ul>{skillsByType.frontend.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className='skill-box' id='backend-box'>
        <h2>Backend</h2>
        <ul>{skillsByType.backend.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className='skill-box' id='data-box'>
        <h2>Data</h2>
        <ul>{skillsByType.data.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className='skill-box' id='program-box'>
        <h2>Programs/Services</h2>
        <ul>{skillsByType.programs.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className='skill-box' id='nontech-box'>
      <h2>Non-Technical</h2>
        <ul>{skillsByType.nontechnical.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
    </div>
  </div>
)

export default Skills
