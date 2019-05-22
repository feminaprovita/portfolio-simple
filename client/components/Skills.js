import React from 'react';
import { skillsByType } from '../../data/seed';
import SkillList from './SkillList';

const Skills = () => (
  <div id="skill-wrapper">
    <SkillList heading="Languages" skills={skillsByType.languages} />
    <SkillList heading="Frontend" skills={skillsByType.frontend} />
    <SkillList heading="Backend" skills={skillsByType.backend} />
    <SkillList heading="Programs/Services" skills={skillsByType.programs} />
    <SkillList heading="Data" skills={skillsByType.data} />
    <SkillList heading="Non-Technical" skills={skillsByType.nontechnical} />
  </div>
);

export default Skills;
