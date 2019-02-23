import React from 'react';

import renderer from 'react-test-renderer';
import RegisterScreen from '../RegisterScreen';

jest.mock('../../node_modules/react-native-material-ui/')

it('renders correctly', () => {
  const tree = renderer.create(<RegisterScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});