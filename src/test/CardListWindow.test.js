import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardListWindow from "../components/CardListWindow";

describe("CardListWindow", () => {
  test("should display correct card data when clicked", () => {
    const mockCardData = {
      organizationName: "Example Organization",
      externshipTitle: "Software Engineering Intern",
      location: "San Francisco, CA",
      description:
        "Exciting internship opportunity working on cutting-edge projects.",
    };

    const mockHandleCardClick = jest.fn();

    const { getAllByText } = render(
      <CardListWindow onCardClick={mockHandleCardClick} />
    );

    const firstCard = getAllByText("Example Organization")[0];
    fireEvent.click(firstCard);

    expect(mockHandleCardClick).toHaveBeenCalledWith(mockCardData);
  });
});
