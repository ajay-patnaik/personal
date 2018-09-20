import React from 'react'
import Link from 'gatsby-link'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import gomasoncomets1 from '../images/gomasoncomets1.png'
import flyerenterprises1 from '../images/flyerenterprises1.png'
import rudysrunway1 from '../images/rudysrunway1.png'
import app1 from '../images/app1.png'

const ProjectPage = () => (
  <div className="inner-wrapper">

    <div className="uk-animation-scale-up uk-text-center" data-uk-slider>
      <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={app1} alt="Flyer Enterprises App" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>FlyerEnterprises App</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>React Native</li>
                  <li>Objective C</li>
                  <li>Java</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={rudysrunway1} alt="Rudy's Runway" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>RudysRunway</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>Laravel</li>
                  <li>JavaScript</li>
                  <li>MySQL</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={flyerenterprises1} alt="Flyer Enterprises" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>FlyerEnterprises</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>Wix</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={gomasoncomets1} alt="Go Mason Comets" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>FlyerEnterprises API</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Redis</li>
                  <li>MySQL</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={gomasoncomets1} alt="Go Mason Comets" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>GoMasonComets</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>Drupal 7</li>
                  <li>PHP</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="uk-margin-small-right">
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={gomasoncomets1} alt="Go Mason Comets" />
              </div>
              <div className="uk-card-body" style={{paddingTop:'25px',paddingBottom:'0px'}}>
                <h3><b>Raspberry PI Web Server Cluster</b></h3>
                <ul class="uk-list uk-list-bullet">
                  <li>NGINX</li>
                </ul>
                <div className="uk-card-footer">
                  <button className="button" type="button" data-uk-toggle="target: #modal-example">Read More...</button>
                  <div id="modal-example" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Flyer Enterprises App</h2>
                      <p>The Flyer Enterprises App was the first project that I took on after being hired on with Flyer Enterprises. I led a small team to develop this application over the span of 1 year. We used a JavaScript Framework called React Native to create it. I learned a lot about how mobile applications work and the process of putting an app on the app store.</p>
                      <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a className="uk-position-center-left uk-position-small uk-hidden-hover" style={{}} href="#" data-uk-slidenav-previous data-uk-slider-item="previous"><FaAngleLeft color="#6464FF" size="45px" /></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" style={{}} href="#" data-uk-slidenav-next data-uk-slider-item="next"><FaAngleRight color="#6464FF" size="45px" /></a>
    </div>
  </div>
)

export default ProjectPage
