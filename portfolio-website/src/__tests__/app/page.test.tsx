import { render, screen } from '@testing-library/react';
import Page from "../../app/page";
import React from "react";
import { test } from 'vitest';
import userEvent from '@testing-library/user-event'


test('renders home page', () => {
    render(<Page/>);
});

test('carousel arrow buttons work correctly', async () => {
    const user = userEvent.setup()
    render(<Page/>);
    const leftArrowButton = screen.getAllByRole("button")[5];
    const rightArrowButton = screen.getAllByRole("button")[6];
    await user.click(leftArrowButton);
    await user.click(rightArrowButton);
});

test('carousel image button works correctly', async () => {
    const user = userEvent.setup()
    render(<Page/>);
    const imageButton = screen.getAllByRole("button")[1];
    await user.click(imageButton);
});

