import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react"

import Layout from '../components/layout'

import fe_logo1 from '../images/fe_logo1.png'
import cinfin_logo1 from '../images/cinfin_logo1.png'

class WorkPage extends Component {
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
          <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-visible@m">
            <div className="uk-text-center uk-margin-bottom fullwidth" data-uk-grid>
              <div className="uk-width-1-4">
                <div className="uk-card uk-card-default uk-card-body uk-height-small" style={{paddingTop:'30px'}}>
                  <img src={fe_logo1} alt="Flyer Enterprises" style={{height:'100px'}} />
                </div>
              </div>
              <div className="uk-width-3-4">
                <div className="uk-card uk-card-default uk-card-body">
                  <span style={{fontSize:'20px'}}><b>Flyer Enterprises | VP of Information Technology | OCT 2016 - PRESENT</b></span>
                  <div data-uk-grid style={{marginTop:'10px'}}>
                    <div className="uk-width-1-3">Manage Point-Of-Sales system for the 4th largest student-run business in the nation, which earns $1.2 million in revenue</div>
                    <div className="uk-width-1-3">Work with a team to develop a mobile application for the business</div>
                    <div className="uk-width-1-3">Created an eCommerce website, which serves as the first ever online division for Flyer Enterprises</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-text-center uk-margin-bottom fullwidth" data-uk-grid>
              <div className="uk-width-1-4">
                <div className="uk-card uk-card-default uk-card-body uk-height-small" style={{paddingTop:'30px'}}>
                  <img src={cinfin_logo1} alt="Flyer Enterprises" style={{height:'100px'}} />
                </div>
              </div>
              <div className="uk-width-3-4">
                <div className="uk-card uk-card-default uk-card-body">
                  <span style={{fontSize:'20px'}}><b>Cincinnati Financial | IT Web Portals Intern | MAY 2018 - AUG 2018</b></span>
                  <div data-uk-grid style={{marginTop:'10px'}}>
                    <div className="uk-width-1-3">Built an application to assist employees with the deletion of data</div>
                    <div className="uk-width-1-3">Helped maintain and update 5 internal and external web portals</div>
                    <div className="uk-width-1-3">Collaborated with other interns to create project concerning block chain in the insurance industry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-hidden@m">
            <div className="uk-text-center uk-margin-bottom fullwidth" data-uk-grid>
              <div style={{width:'100%'}}>
                <div className="uk-card uk-card-default uk-card-body uk-height-small" style={{paddingTop:'30px'}}>
                  <img src={fe_logo1} alt="Flyer Enterprises" style={{height:'100px'}} />
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body">
                  <span style={{fontSize:'20px'}}><b>Flyer Enterprises | VP of Information Technology | OCT 2016 - PRESENT</b></span>
                  <div data-uk-grid style={{marginTop:'10px'}}>
                    <div>Manage Point-Of-Sales system for the 4th largest student-run business in the nation, which earns $1.2 million in revenue</div>
                    <div>Work with a team to develop a mobile application for the business</div>
                    <div>Created an eCommerce website, which serves as the first ever online division for Flyer Enterprises</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-text-center uk-margin-bottom fullwidth" data-uk-grid>
              <div style={{width:'100%'}}>
                <div className="uk-card uk-card-default uk-card-body uk-height-small" style={{paddingTop:'30px'}}>
                  <img src={cinfin_logo1} alt="Flyer Enterprises" style={{height:'100px'}} />
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body">
                  <span style={{fontSize:'20px'}}><b>Cincinnati Financial | IT Web Portals Intern | MAY 2018 - AUG 2018</b></span>
                  <div data-uk-grid style={{marginTop:'10px'}}>
                    <div>Built an application to assist employees with the deletion of data</div>
                    <div>Helped maintain and update 5 internal and external web portals</div>
                    <div>Collaborated with other interns to create project concerning block chain in the insurance industry</div>
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

export default WorkPage
