import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("SignUpForm", () => {
  it("renders the form's elements", () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("handles form submission", async () => {
    render(<SignUpForm />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "passw0rd" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "passw0rd" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
      expect(screen.getByText("Verification email sent")).toBeInTheDocument();
    });
  });

  it("displays an error when text in two password fields are different", async () => {
    render(<SignUpForm />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "passw0rd" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "differentpassw0rd" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
      expect(screen.getByText("Passwords do not match.")).toBeInTheDocument();
    });
  });
});
