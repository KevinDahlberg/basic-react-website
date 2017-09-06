import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

const head = <Header headerText='Kevin Dahlberg' />
const foot = <Footer footerText='copyright 2017' />

render (
  <main>
    {head}
    {foot}
  </main>,
  document.getElementById('container')
)
