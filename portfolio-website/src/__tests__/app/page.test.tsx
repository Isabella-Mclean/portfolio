import { render } from '@testing-library/react';
import Page from "../../app/page";
import React from "react";
import { test } from 'vitest';

test('renders home page', () => {
    render(<Page/>);
});
