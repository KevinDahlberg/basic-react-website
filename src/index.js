import React from 'react'
import { render } from 'react-dom'


const Header = ({headerText}) => {
  return (
    <div className="header">
      <h1>{headerText}</h1>
    </div>
  );
}

const Footer = ({footerText}) => {
  return (
    <div className="footer">
      <div className="footer-text">
        {footerText}
      </div>
    </div>
  );
}

const head = <Header headerText='Kevin Dahlberg' />
const foot = <Footer footerText='copyright 2017' />

render (
  <main>
    {head}
    {foot}
  </main>,
  document.getElementById('container')
)
