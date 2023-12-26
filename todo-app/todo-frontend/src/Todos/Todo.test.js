import Todo from './Todo';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";

import React from 'react';


describe("Todo", () => {
    let container
    let mockHandler
    let mockHandler2

    beforeEach(() => {
        const todo = {text: "Todo item", done:false}
        mockHandler = jest.fn()
        mockHandler2 = jest.fn()
        container = render(<Todo todo={todo} onClickDelete={mockHandler2} onClickComplete={mockHandler} />).container
    })

    test('when todo is in the list text can be found', async() => {
       
        const buttonComplete = screen.getByText('Set as done')
        
        expect(buttonComplete)
        const text = screen.getByText('Todo item')
        expect(text)
    })

})