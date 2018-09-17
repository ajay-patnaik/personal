import React from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
import background from '../images/background5.jpg';

const ContactPage = () => (

    <div style={{
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{
          paddingTop: '120px',
          width: '960px',
          textAlign: 'center'
        }}
      >
        <div style={{
            marginBottom: '45px'
          }}
        >
          <button style={{
            border: 'none',
            color: '#FFFFFF',
            backgroundColor: '#6464FF',
            padding: '10px',
            width: '300px'
          }}
        >
          Download Resume
        </button>
      </div>

        <div style={{
            textAlign: 'center'
          }}
        >
          <h3>Send me an Email!</h3>
          <form method="POST" action="https://formspree.io/patnaikaj@gmail.com">
            <input
              style={{
                width: '600px',
                border: '1px solid #ddd',
                background: '#fff',
                padding: '10px',
                marginBottom: '15px'
              }}
              type="email"
              name="email"
              placeholder="Your email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              style={{
                width: '600px',
                border: '1px solid #ddd',
                background: '#fff',
                padding: '10px',
                marginBottom: '15px'
              }}>
            </textarea>
            <button
              type="submit"
              style={{
                border: 'none',
                color: '#FFFFFF',
                backgroundColor: '#6464FF',
                padding: '10px',
                width: '600px'
              }}
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
)

export default ContactPage
