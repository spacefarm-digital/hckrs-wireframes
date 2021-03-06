// Gatsby dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// CSS reset
import './reset.css'

// Rebass dependencies
import { Provider } from 'rebass'

// Xray
import Xray from 'react-x-ray'

// Footer
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hckrs Wireframes"
      meta={[
        {
          name: 'description',
          content: 'React-based wireframes for v1 of Hckrs.eu',
        },
      ]}
    />
    {/* <Xray> */}
    <Provider
      theme={{
        font: '"Roboto", -apple-system, Helvetica, sans-serif',
        fontSizes: [12, 16, 24, 36, 48, 72],
        colors: {
          blue: '#0070e0',
          grey: '#ddd',
          fb: '#3b5998',
          twitter: '#1da1f2',
          github: '#4078c0',
        },
      }}
    >
      {children()}
      <Footer />
    </Provider>
    {/* </Xray> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
