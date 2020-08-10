import React from 'react';
import { mount } from 'enzyme';
import Service from '../../components/Service';

describe('Service component test', () => {
  const service = mount(<Service />);
  test('Render component', () => {
    expect(service.length).toEqual(1);
  });
});