import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react";
import { IoIosMenu } from "react-icons/io";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
      data: [
        {
          title: 'Home',
          link: '/',
          active: ''
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

  componentDidMount() {
    try {
      var UIkit = require('../../node_modules/uikit/dist/js/uikit.js')
      require('../../node_modules/uikit/dist/js/uikit-icons.js')
      var $ = require('jquery');

      var path = window.location.pathname;
      var s = path.split("/");
      var p = "/" + s[1];

      this.setState({
        path: p
      });

      $('.uk-offcanvas-content a').click(function() {
        window.location.reload();
      });
    } catch(e) {

    }
  }

  active(element) {
    for(var i = 0; i < this.state.data.length; i++) {
      this.state.data[i].active = ''
    }
     this.state.data[element].active = 'uk-active';
  }

  render() {
    for(var i = 0; i < this.state.data.length; i++) {
      if(this.state.data[i].link == this.state.path) {
        this.state.data[i].active = 'uk-active';
      }
    }

    return (
      <div>
        <div className="uk-margin-medium-top uk-visible@m">
          <ul className="uk-flex-center uk-tab" data-uk-scrollspy="cls:uk-animation-slide-top">
            {
              this.state.data.map((l, i) => (
                <li key={i} className={l.active}><Link to={l.link} onClick={() => this.active(i)}>{l.title}</Link></li>
              ))
            }
          </ul>
        </div>

        <div className="uk-margin-small-top uk-hidden@m">

          <div className="uk-offcanvas-content">
            <div className="uk-flex-inline uk-flex-between" data-uk-scrollspy="cls:uk-animation-slide-top" style={{width:'100%'}}>
              <div><button className="button" type="button" data-uk-toggle="target: #offcanvas-nav"><IoIosMenu color="#FFFFFF" size="45px" /></button></div>
              <div><span className="menu-title uk-margin-small-right">Ajay Patnaik</span></div>
            </div>
            <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
              <div className="uk-offcanvas-bar">
                <ul className="uk-nav uk-nav-default">
                  {
                    this.state.data.map((l, i) => (
                      <li key={i} className={l.active}><Link to={l.link} onClick={() => this.active(i)}>{l.title}</Link></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Menu
