import React from 'react'
import { render } from 'react-dom'

import Header from './components/header';
import Footer from './components/footer';

render (
  <Header headerText = {'Kevin Dahlberg'} />
  <Footer footerText = {'Copyright: The OCD Coder'} />,
  getElementById('container');
)
