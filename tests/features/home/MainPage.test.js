import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from '../../../src/features/home/MainPage';

describe('home/MainPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MainPage {...props} />
    );

    expect(
      renderedComponent.find('.home-main-page').length
    ).toBe(1);
  });
});
