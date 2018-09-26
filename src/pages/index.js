import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react"
import ajay from  '../images/ajay.jpg'

import Layout from '../components/layout'

class IndexPage extends Component {
  componentDidMount() {
    try {
      require('../../node_modules/uikit/dist/js/uikit.js')
      require('../../node_modules/uikit/dist/js/uikit-icons.js')
    } catch(e) {

    }
  }

  render() {
    return (
      <Layout>
      <div className="inner-wrapper">
        <div className="uk-animation-scale-up uk-grid-large uk-child-width-expand@s uk-text-center uk-margin-small-top uk-margin-small-bottom" data-uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <img src={ajay} alt="Ajay Patnaik" />
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="uk-card-title"><span style={{color:'#6464FF'}}></span>Hi, I'm Ajay Patnaik!<span style={{color:'#6464FF'}}></span></h3>
              <p>I am a 3rd year Computer Science Major at the University of Dayton.</p>
              <p><span style={{color:'#6464FF'}}></span><b>Here are some of my skills</b><span style={{color:'#6464FF'}}></span></p>
              <div data-uk-grid>
                <div>
                  <ul className="uk-list uk-list-striped">
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <ul className="uk-list uk-list-striped">
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div>
                  <ul className="uk-list uk-list-striped">
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Laravel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
  }
}

export default IndexPage
