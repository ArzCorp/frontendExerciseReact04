import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/Global.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import Information from './components/Information';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Hero />
    <Service />
    <Information />
  </BrowserRouter>,
  document.getElementById('page')
);
