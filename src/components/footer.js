import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

class Footer extends Component {
  componentDidMount() {
    try {
      
    } catch(e) {

    }
  }

  render() {
    return (
      <div className="uk-margin-medium-bottom uk-position-fixed uk-position-bottom uk-visible@m">
        <div className="uk-flex uk-flex-center"  data-uk-scrollspy="cls:uk-animation-slide-bottom">
          <a target="_blank" href="https://github.com/ajay-patnaik" className="uk-icon-button"><FaGithub color="#000000" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/ajay-patnaik/" className="uk-icon-button uk-margin-medium-left uk-margin-medium-right"><FaLinkedin color="#000000" /></a>
          <a target="_blank" href="https://www.facebook.com/patnaikaj" className="uk-icon-button"><FaFacebook color="#000000" /></a>
        </div>
      </div>
    );
  }
}

export default Footer
