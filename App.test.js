import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FilterPanel, GroupingPanel, DataTable, and Pagination components', () => {
    render(<App />);
    
    // Check if components are rendered
    expect(screen.getByText(/FilterPanel/i)).toBeInTheDocument();
    expect(screen.getByText(/GroupingPanel/i)).toBeInTheDocument();
    expect(screen.getByText(/DataTable/i)).toBeInTheDocument();
    expect(screen.getByText(/Pagination/i)).toBeInTheDocument();
});
