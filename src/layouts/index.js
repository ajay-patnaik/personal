import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/menu'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/css/uikit.min.css'
import './index.css'
import './custom.css'
import './overrides.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="page-wrapper">
      <div className="uk-container">
        <Menu />
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
