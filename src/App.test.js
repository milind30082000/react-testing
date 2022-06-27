import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tests for Counter App',()=>{
    it('Should have initial value 0', () => {
      render(<App />);
      /** 
       * Todo:
       * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
       * 2. use getByRole/findByRole query to find 'increment' button.
       * 3. Use userEvent to click on increment button to increment the count by 1.
       * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
       * 5. Similarly perform actions 3 and 4 for decrement.
       * 
      */
      const counter = screen.getByText("0");
      expect(counter).toHaveTextContent("0");
      const plus = screen.getByRole("button",{name : /increment/i});
      const minus = screen.getByRole("button",{name : /decrement/i});
      userEvent.click(plus);
      expect(counter).toHaveTextContent("1");
      userEvent.click(minus);
      expect(counter).toHaveTextContent("0");
    });
})
