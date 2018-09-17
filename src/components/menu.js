import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Home',
          link: '/',
          active: 'active'
        },
        {
          title: 'Projects',
          link: '/projects',
          active: ''
        },
        {
          title: 'Work',
          link: '/work',
          active: ''
        },
        {
          title: 'School',
          link: '/school',
          active: ''
        },
        {
          title: 'Contact',
          link: '/contact',
          active: ''
        }
      ]
    };

    this.active = this.active.bind(this);
  }

  active(element) {
    for(var i = 0; i < this.state.data.length; i++) {
      this.state.data[i].active = ''
    }

    this.state.data[element].active = 'active';
  }

  render() {
    return (
      <div
        style={{
          paddingTop: '45px',
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100vw',
          zIndex: '999',
          fontSize: '22px',
        }}
      >
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: '200px',
            marginRight: '200px'
          }}
        >

        {
          this.state.data.map((l, i) => (
            <li key={i}><Link to={l.link} className={'menu-item ' + l.active} onClick={() => this.active(i)}>{l.title}</Link></li>
          ))
        }

        </ul>
      </div>
    );
  }
}

export default Menu
