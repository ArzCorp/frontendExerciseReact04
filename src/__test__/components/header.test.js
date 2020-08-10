import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('header component test', () => {
  const header = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  test('Render component', () => {
    expect(header.length).toEqual(1)
  });
});