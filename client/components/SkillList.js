import React, { Component } from 'react';

class SkillList extends Component {
  render() {
    const boxName = this.props.heading + '-box';
    return (
      <div className="skill-box" id={boxName}>
        <h2>{this.props.heading}</h2>
        <ul>{this.props.skills.map((s,i) => <li key={i}>{s}</li>)}</ul>
      </div>
    );
  }
}

export default SkillList;
