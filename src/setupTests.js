// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
//The following code for testing paypalcheckout
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

