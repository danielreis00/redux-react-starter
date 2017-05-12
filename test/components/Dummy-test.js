import React from 'react';
import { shallow } from 'enzyme';
import Dummy from '../../src/components/Dummy';

describe('<Dummy />', () => {
  it('it must show dummy value of 100', () => {
    const wrapper = shallow(<Dummy dummy={100}/>);
    expect(wrapper.find('span').text()).to.be.eql('100');
  });
});
