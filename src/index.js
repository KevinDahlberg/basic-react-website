import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {AboutText} from './components/about-text/AboutText';
import {ProfilePicture} from './components/profile-picture/ProfilePicture';

const head = <Header headerText='Kevin Dahlberg' />
const image = <ProfilePicture
                url='/images/profile-pic.jpg'
                alt='Awesome Profile Pic'
              />
const about = <AboutText
                paragraphOne='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum lorem eu quam bibendum, nec maximus dolor sagittis. Vestibulum libero libero, finibus at odio vitae, lacinia laoreet purus. Nulla sit amet justo vel nisi dictum viverra. Phasellus varius aliquet neque, a pretium metus. Proin molestie nisi nibh, non tristique metus auctor sit amet. Aliquam quis erat sapien. Fusce dignissim, purus non pulvinar venenatis, sem tortor sodales arcu, vitae tempor felis risus sit amet lectus. Donec ante nulla, vestibulum a risus quis, feugiat feugiat erat.'
                paragraphTwo='Vestibulum sodales risus eget ex efficitur sagittis. Donec bibendum lectus pulvinar risus volutpat dapibus. Aliquam sit amet odio elit. Nullam a accumsan lacus. Nullam commodo ac nibh quis aliquam. Praesent quis sem porttitor, facilisis lectus nec, rhoncus orci. Etiam a massa congue, efficitur nunc non, aliquet erat. Praesent libero quam, sollicitudin non lectus in, blandit faucibus diam. Duis iaculis vehicula fermentum. Nullam vitae risus ac mi congue condimentum  sit amet eu justo. Aenean vestibulum semper neque at dictum. Fusce luctus quam eu lorem tristique, eu tincidunt quam dignissim. Praesent lobortis gravida risus in auctor. Cras tempor pretium tortor elementum volutpat. Suspendisse sagittis mauris non dolor luctus condimentum. In sodales condimentum nisl, sed mollis urna lobortis in.'
              />
const foot = <Footer footerText='copyright 2017' />


render (
  <main>
    {head}
    <div className="content">
    {about}
    {image}
    </div>
    {foot}
  </main>,
  document.getElementById('container')
)
