import React from 'react'
import { Component } from "react"

import Layout from '../components/layout'

import udayton1 from '../images/udayton1.png'
import mason1 from '../images/mason1.jpeg'

class SchoolPage extends Component {
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
          <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom">
            <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top" style={{paddingTop:'10px'}}>
                    <img src={udayton1} alt="Flyer Enterprises App" style={{height:'150px'}} />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px'}}>
                    <h3><b>University of Dayton</b></h3>
                    <p>Computer Science Major (GPA: 3.227)</p>
                    <p>Algorithms & Programming I, Algorithms & Programming II, Computer Organization & Architecture, Discrete Structures, Data Structures & Algorithms, Operating Systems, Design and Analysis of Algorithms, Language Based Security</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top" style={{paddingTop:'10px'}}>
                    <img src={mason1} alt="Flyer Enterprises App" style={{height:'150px'}} />
                  </div>
                  <div className="uk-card-body" style={{paddingTop:'25px'}}>
                    <h3><b>William Mason High School</b></h3>
                      <p>Graduated Summa Cum Laude</p>
                      <p>Computer Programming I, Computer Programming II, Computer Programming III, AP Computer Science</p>
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

export default SchoolPage
