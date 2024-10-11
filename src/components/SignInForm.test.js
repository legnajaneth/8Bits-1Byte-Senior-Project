import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import SignInForm from "./SignInForm";

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn().mockResolvedValue({}),
  getAuth: jest.fn(),
}));

describe("SignInForm", () => {
  test("renders form elements", () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

  test("allows user to input email and password", () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("submits the form with valid credentials", async () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await act(async () => {
      fireEvent.click(loginButton);
    });
    expect(window.location.pathname).toBe("/");
  });

  test("displays error message with invalid credentials", async () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: "invalid@example.com" },
      });
      fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
      fireEvent.click(loginButton);
    });
    const errorMessage = await screen.findByText(
      "Incorrect email or password."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
