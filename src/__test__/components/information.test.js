import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Information from '../../components/Information';

describe('Information component test', () => {
  const information = mount(
    <BrowserRouter>
      <Information />
    </BrowserRouter>
  );
  test('Render component', () => {
    expect(information.length).toEqual(1)
  });
});