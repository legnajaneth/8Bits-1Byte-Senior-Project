import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { colors } from "../colors";

function SignUpButton() {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 1.25rem",
    gap: "0.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "150%",

    background: colors.secondary,
    color: colors.text,
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    "&:hover": {
      bg: colors.primary,
      transition: "background-color 0.4s ease",
    },
  };

  return (
    <Link to="/signup">
      <Button sx={{ ...hoverButtonStyle }} size="sm">
        Sign up
      </Button>
    </Link>
  );
}

export default SignUpButton;
