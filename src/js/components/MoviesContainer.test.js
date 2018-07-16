
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MoviesContainer from './MoviesContainer';

import '../enzyme';

describe('MoviesContainer', () => {
  it('renders component properly', () => {
    expect(toJson(shallow(<MoviesContainer />))).toMatchSnapshot();
  });
});
