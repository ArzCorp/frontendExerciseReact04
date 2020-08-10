import React from 'react';
import { mount } from 'enzyme';
import Hero from '../../components/Hero';

describe('Hero component test', () => {
  const hero = mount(<Hero />);
  test('Render component', () => {
    expect(hero.length).toEqual(1);
  });
});