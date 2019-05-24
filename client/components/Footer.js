import React from 'react'

const Footer = () => (
  <div id="footer">
    {/* <hr /> */}
    <div id="social-container">
      <span>
      <a href="mailto:claire.gilligan.dev@gmail.com">
        <img src="./images/email-icon.png" className="social-links" alt="Email icon" target="blank" /></a>&#160;&#160;&#160;&#160;
      <a href="https://www.linkedin.com/in/claire-gilligan/" >
        <img src="./images/linkedin-icon.svg" className="social-links" alt="LinkedIn icon" target="blank" /></a>&#160;&#160;&#160;
      <a href="https://github.com/feminaprovita/">
        <img src="./images/github-icon.png" className="social-links" alt="Github icon" target="blank" /></a>&#160;&#160;&#160;
      <a href="https://medium.com/@feminaprovita">
        <img src="./images/medium-icon.png" className="social-links" alt="Medium icon" target="blank" /></a>&#160;&#160;&#160;
      <a href="https://www.facebook.com/feminaprovita/">
        <img src="./images/facebook-icon.png" className="social-links" alt="Facebook icon" target="blank" /></a>&#160;&#160;
      <a href="https://twitter.com/feminaprovita/">
        <img src="./images/twitter-icon.png" className="social-links" id="twitter-icon" alt="Twitter icon" target="blank" /></a>
        {/* <p id="does-this-fix-anything">Fuck you all</p> */}
      </span>
    </div>
  </div>
)

export default Footer
