import { shallow } from "enzyme";
import Showcase from './Showcase.js';

describe('Showcase Component', () => {

  it('will render the showcase', () => {
    const wrapper = shallow(<Showcase />);
    // expect(wrapper.find('.showcase-content')).toBeDefined;
      //works without ()
    // wrapper.find('button').simulate('click'); // hmm interesting
    expect(wrapper.find('.showcase-content')).toBeTruthy();
  });

})
