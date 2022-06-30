import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Home from './Home';

describe('Tests for Integeration testing',()=>{
    it('Should have elements', async() => {
      render(<Home />);

      expect(screen.getByRole("heading",{name : /search by id/i})).toBeInTheDocument();

      const search = screen.getByLabelText(/id/i);
      userEvent.type(search,"6");

      const button = screen.getByText(/submit/i);
      userEvent.click(button);

      await screen.findByText(/loading/i);
      //expect(screen.getByText("ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae")).toBeInTheDocument();
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    
    });
})
