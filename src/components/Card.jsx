import React, { useContext, useState } from "react";
import {Text, Heading} from "@chakra-ui/react";

function Card({
  id,
  title,
  location,
  duration,
  onClick,
  isSelected,
}) {
  const cardStyle = {
    display: "flex",
    width: "29rem",
    height: "6.4375rem",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "8px 8px",
    gap: "0.0625rem",
    background: isSelected ? "#68986f40" : "white",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
  };

  function handleClick() {
    onClick(id);
  }

  const horizontalContainer = {
    display: "flex",
    alignItems: "flex-start",
  };

  const h1Style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
    flexShrink: "0",
    alignSelf: "stretch",
  };

  const h2Style = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "1.125rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.5rem",
  };

  const locationTextStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontsStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem",
  };

  const descriptionStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.82713rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
    margin: "0rem",
  };

  return (
    <div style={{
      display: "flex",
    }}>
      <div style={cardStyle} onClick={handleClick}>
        <div style={horizontalContainer}>
        <Heading size='sm' noOfLines={1}>{id}</Heading>
      </div>
      <Text fontSize='sm' noOfLines={1}>{title}</Text>
        <Text fontSize='sm' noOfLines={1}>{location}</Text>
        <Text fontSize='sm' noOfLines={1}>{duration}</Text>
      </div>
    </div>
    
  );
}

export default Card;
