import React from 'react';
import { skillsByType } from '../../data/seed';
import SkillList from './SkillList';

const Skills = () => (
  <div id="skill-wrapper">
    <SkillList heading="Languages" skills={skillsByType.languages} />
    <SkillList heading="Frontend" skills={skillsByType.frontend} />
    <SkillList heading="Backend" skills={skillsByType.backend} />
    <SkillList heading="Tools" skills={skillsByType.tools} />
    <SkillList heading="Other" skills={skillsByType.other} />
  </div>
);

export default Skills;
