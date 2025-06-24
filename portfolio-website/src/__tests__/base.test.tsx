import { render, screen } from '@testing-library/react';
import Page from "../app/page";
import React from "react";


test('renders home page', () => {
    render(<Page />);
});
