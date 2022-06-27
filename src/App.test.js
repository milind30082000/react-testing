import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Login Form',()=>{
    it('submitting the form calls onSubmit with username and password', () => {
        // create a variable called "submittedData" and a handleSubmit function that
        // accepts the data and assigns submittedData to the data that was submitted
        // Hint: if you need a hand, here's what the handleSubmit function should do:
        // const handleSubmit = data => (submittedData = data)
        //
        // render the login with your handleSubmit function as the onSubmit prop
        //
        // get the username and password fields via `getByLabelText`
        // use `await userEvent.type...` to change the username and password fields to
        //    whatever you want
        //
        // click on the button with the text "Submit"
        //
        // assert that submittedData is correct
        // Hint: use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue

        let submittedData;
        const handleSubmit = data => {submittedData = data};
        render(<App onSubmit={handleSubmit} />)

        const user = screen.getByLabelText("Username");
        const pass = screen.getByLabelText("Password");

        userEvent.type(user,'Milind');
        //expect(user).toHaveValue('Milind');

        userEvent.type(pass,'123');
        //expect(pass).toHaveValue('123');

        const submit = screen.getByRole("button",{name : /submit/i});
        userEvent.click(submit);
        expect(submittedData.username).toEqual('Milind');
        expect(submittedData.password).toEqual('123');

      })
})
