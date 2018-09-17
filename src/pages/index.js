import React from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
import background from '../images/background6.jpg';

const IndexPage = () => (
    <div className="page-wrapper">
      <div style={{
          paddingTop: '120px',
          width: '960px',
          textAlign: 'center',
          display: 'block',
        }}
      >
        <div style={{
            backgroundColor: 'rgba(242,242,242, .2)',
            borderRadius: '15px',
            height: '600px',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div style={{
                width: '50%',
                backgroundColor: '#FFFFFF',
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px',
            }}
          >
            <p>nnjj</p>
          </div>
          <div style={{
                width: '50%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sapien augue. Vestibulum imperdiet feugiat metus in facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet ante eget hendrerit rutrum. Integer laoreet posuere augue, quis facilisis mauris interdum ut. Donec a tellus turpis. Vivamus mattis elit et eleifend semper. Nulla vitae nisl ac risus convallis tempus. Sed volutpat pulvinar neque at feugiat. Proin non felis viverra, faucibus arcu non, ultricies eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
)

export default IndexPage
