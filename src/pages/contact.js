import React from 'react'
import Link from 'gatsby-link'
import { Component } from "react"

import resume from '../images/Patnaik.Ajay.Resume.pdf'

import Layout from '../components/layout'

class ContactPage extends Component {
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
          <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom uk-visible@m">

            <a href={resume} download>
              <button className="download-button uk-margin-bottom">Download Resume</button>
            </a>

            <div className="uk-margin-top">
              <h3 style={{color:'#FFFFFF'}}>Send me an Email!</h3>
              <form method="POST" action="https://formspree.io/patnaikaj@gmail.com">
                <fieldset className="uk-fieldset">

                  <div className="uk-margin">
                    <input className="uk-input uk-width-xlarge" name="email" placeholder="Your email" />
                  </div>

                  <div className="uk-margin">
                    <textarea className="uk-textarea uk-width-xlarge" rows="10" name="message" placeholder="Your message"></textarea>
                  </div>

                  <div className="uk-margin">
                    <button
                      type="submit"
                      className="submit-button uk-width-xlarge"
                    >
                      Send
                    </button>
                  </div>

                </fieldset>
              </form>
            </div>
          </div>

          <div className="uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom uk-hidden@m">

            <a href={resume} download>
              <button className="download-button-mobile uk-margin-bottom">Download Resume</button>
            </a>

            <div className="uk-margin-top">
              <h3 style={{color:'#FFFFFF'}}>Send me an Email!</h3>
              <form method="POST" action="https://formspree.io/patnaikaj@gmail.com">
                <fieldset className="uk-fieldset">

                  <div className="uk-margin">
                    <input className="uk-input" type="email" name="email" placeholder="Your email" />
                  </div>

                  <div className="uk-margin">
                    <textarea className="uk-textarea" rows="10" name="message" placeholder="Your message"></textarea>
                  </div>

                  <div className="uk-margin">
                    <button type="submit" className="submit-button-mobile">Send</button>
                  </div>

                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactPage
