import React from 'react'
import { Component } from "react"

import Layout from '../components/layout'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import gomasoncomets1 from '../images/gomasoncomets1.png'
import flyerenterprises1 from '../images/flyerenterprises1.png'
import rudysrunway1 from '../images/rudysrunway1.png'
import app1 from '../images/app1.png'

class ProjectPage extends Component {
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

        <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom" data-uk-slider>
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            <li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={app1} alt="Flyer Enterprises App" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px',}}>
                    <h3><b>Flyer Enterprises App</b></h3>
                    <ul className="uk-list">
                      <li>React Native</li>
                      <li>Objective C</li>
                      <li>Java</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={rudysrunway1} alt="Rudy's Runway" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px',}}>
                    <h3><b>Rudys Runway</b></h3>
                    <ul className="uk-list">
                      <li>Laravel</li>
                      <li>JavaScript</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={flyerenterprises1} alt="Flyer Enterprises" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px',}}>
                    <h3><b>Flyer Enterprises</b></h3>
                    <ul className="uk-list">
                      <li>Wix</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={app1} alt="Flyer Enterprises API" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px'}}>
                    <h3><b>Flyer Enterprises API</b></h3>
                    <ul className="uk-list">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Redis</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={gomasoncomets1} alt="Go Mason Comets" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px',}}>
                    <h3><b>GoMasonComets</b></h3>
                    <ul className="uk-list">
                      <li>Drupal 7</li>
                      <li>PHP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/*<li className="uk-margin-right">
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={gomasoncomets1} alt="Go Mason Comets" />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px',}}>
                    <h3><b>Raspberry PI Web Server Cluster</b></h3>
                    <ul className="uk-list">
                      <li>NGINX</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>*/}
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" style={{}} href="#" data-uk-slidenav-previous data-uk-slider-item="previous"><FaAngleLeft color="#6464FF" size="45px" /></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" style={{}} href="#" data-uk-slidenav-next data-uk-slider-item="next"><FaAngleRight color="#6464FF" size="45px" /></a>
        </div>
      </div>
    </Layout>
    );
  }
}

export default ProjectPage
