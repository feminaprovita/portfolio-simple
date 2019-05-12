/* eslint-disable no-unused-expressions */
/* eslint-disable complexity */
import React, {Component} from 'react'

class ProjectLinks extends Component {
  render() {
    let p = this.props.project
    return(
  <div id='project-links'>
    {p.url && p.blogUrl && !p.github && !p.video ? (
      <p><a href={p.url} target="blank">Website
      </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;</p>
    ) : (<span />)}
    {p.url && p.blogUrl && p.github && !p.video ? (
      <p><a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.github} target="blank">Github</a></p>
    ) : (<span />)}
    {p.url && p.blogUrl && p.github && p.video ? (
      <p><a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.github} target="blank">Github
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {!p.url && p.blogUrl && p.github && p.video ? (
      <p><a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.github} target="blank">Github
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {!p.url && p.blogUrl && p.github && !p.video ? (
      <p><a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.github} target="blank">Github</a></p>
    ) : (<span />)}
    {!p.url && p.blogUrl && !p.github && p.video ? (
      <p><a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {p.url && p.blogUrl && !p.github && p.video ? (
      <p><a href={p.blogUrl} target="blank">Blog Post
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
      <a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {p.url && !p.blogUrl && !p.github && !p.video ? (
      <p><a href={p.url} target="blank">Website</a></p>
    ) : (<span />)}
    {p.url && !p.blogUrl && p.github && !p.video ? (
      <p><a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.github} target="blank">Github</a></p>
    ) : (<span />)}
    {p.url && !p.blogUrl && p.github && p.video ? (
      <p><a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.github} target="blank">Github
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {!p.url && !p.blogUrl && p.github && p.video ? (
      <p><a href={p.github} target="blank">Github
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {!p.url && !p.blogUrl && p.github && !p.video ? (
      <p><a href={p.github} target="blank">Github</a></p>
    ) : (<span />)}
    {!p.url && !p.blogUrl && !p.github && p.video ? (
      <p><a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    {p.url && !p.blogUrl && !p.github && p.video ? (
      <p><a href={p.url} target="blank">Website
        </a>&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;
        <a href={p.video} target="blank">Video Presentation</a></p>
    ) : (<span />)}
    </div>
    )
  }
}

export default ProjectLinks
