// import { render, screen } from '@testing-library/react';
import { shallow } from "enzyme";
import App from './App';

it('will render to page', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
