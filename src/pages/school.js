import React from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';

const SchoolPage = () => (

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
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >

        <div style={{
            width: '48%',
            marginRight: '4%'
          }}
        >
          <div style={{
              backgroundColor: '#F2F2F2',
              height: '400px',
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
            }}
          >

          </div>

          <div style={{
              backgroundColor: 'rgba(242,242,242, .2)',
              height: '200px',
              borderBottomRightRadius: '15px',
              borderBottomLeftRadius: '15px',
              padding: '15px'
            }}
          >
            <p>William Mason High School</p>
          </div>
        </div>

        <div style={{
            width: '48%',
          }}
        >
          <div style={{
              backgroundColor: '#F2F2F2',
              height: '400px',
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
            }}
          >

          </div>

          <div style={{
              backgroundColor: 'rgba(242,242,242, .2)',
              height: '200px',
              borderBottomRightRadius: '15px',
              borderBottomLeftRadius: '15px',
              padding: '15px'
            }}
          >
            <p>University Of Dayton</p>
          </div>
        </div>


      </div>
    </div>
)

export default SchoolPage
