// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import ResultPage from './ResultPage';

// jest.mock('react-router', () => ({
//   useNavigate: jest.fn(),
// }));

// describe('ResultPage', () => {
//   it('renders search results based on input', () => {
//     const { getByPlaceholderText, getByTestId, queryByText } = render(<ResultPage />);

//     const searchInput = getByPlaceholderText('Search');

//     fireEvent.change(searchInput, { target: { value: 'organization' } });

//     expect(getByTestId('search-results')).toBeInTheDocument();

//     expect(queryByText('Company A')).toBeInTheDocument();

//     fireEvent.change(searchInput, { target: { value: '' } });

//     expect(queryByText('No active search.')).toBeInTheDocument();
//   });
// });
