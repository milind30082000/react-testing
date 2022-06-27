import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tests for Todo App',()=>{
    
    // Write tests for Todo App
    // Add and  Delete Todo
    it('for adding and deleting todo', () => {
      render(<App />);
      const counter = screen.getByTestId("todoCount");
      const text = screen.getByTestId("input");
      const create = screen.getByTestId("createButton");
      userEvent.click(create);
      expect(counter).toHaveTextContent("1 todos");
      const remove = screen.getAllByTestId("deleteButton");
      
      })
})
