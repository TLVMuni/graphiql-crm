import 'raf/polyfill';

import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

test('Test Header component', () => {

  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
