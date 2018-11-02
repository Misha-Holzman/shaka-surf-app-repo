/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '..';

describe('LoginForm', () => {

  it('should render', () => {
    const fn = jest.fn();
    const component = renderer.create(
      <LoginForm submitAction={fn} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
