import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="uk-margin-medium-top">
        <ul className="uk-flex-center uk-tab">
          <li className="uk-active"><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/school">School</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

    );
  }
}

export default Menu
