import { render } from '@testing-library/react';
import React from "react";
import RootLayout from "@/app/layout";
import { vi,test } from 'vitest';

vi.mock('../../app/globals.css', () => ({}));
vi.mock('next/font/google', () => ({
    Geist: () => ({ variable: 'font-geist-sans' }),
    Geist_Mono: () => ({ variable: 'font-geist-mono' }),
}));

test('renders root layout', () => {
    render(
        <RootLayout>
            <div>Mock text</div>
        </RootLayout>
    );
});
