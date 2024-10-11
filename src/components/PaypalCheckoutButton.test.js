import React from "react";
import { render } from "@testing-library/react";
import PaypalCheckoutButton from "./PaypalCheckoutButton"; // Adjust the import path as necessary

// Mock the @paypal/react-paypal-js components
jest.mock("@paypal/react-paypal-js", () => ({
  PayPalScriptProvider: ({ children }) => children,
  PayPalButtons: () => <div>PayPal Button Mock</div>,
}));

describe("PaypalCheckoutButton", () => {
  it("renders the mock PayPal button", () => {
    const { getByText } = render(<PaypalCheckoutButton />);
    expect(getByText("PayPal Button Mock")).toBeInTheDocument();
  });
});
it("renders payment instructions for the membership plan", () => {
  const { getByText } = render(<PaypalCheckoutButton />);
  expect(
    getByText(/by subscribing to our Audiology Membership Plan/i)
  ).toBeInTheDocument();
});
it("does not render the PayPal button if the subscription has already been bought", () => {
  const { queryByText } = render(
    <PaypalCheckoutButton testHasAlreadyBought={true} />
  );
  expect(queryByText("PayPal Button Mock")).not.toBeInTheDocument();
});
it("renders a message if the subscription has already been bought", () => {
  const { getByText } = render(
    <PaypalCheckoutButton testHasAlreadyBought={true} />
  );
  expect(getByText(/you already bought the subscription/i)).toBeInTheDocument();
});
it("renders the PayPal button if the subscription has not been bought", () => {
  const { getByText } = render(
    <PaypalCheckoutButton testHasAlreadyBought={false} />
  );
  expect(getByText("PayPal Button Mock")).toBeInTheDocument();
});
