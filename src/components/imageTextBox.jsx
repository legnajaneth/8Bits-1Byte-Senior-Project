import React from "react";
import imgHolder from "../images/imageHold.jpeg";
import Cube from "../images/cube.png";
import GetStartedButton from "./getStartedButton";

function ImageTextBox() {
  const textBoxStyle = {
    display: "flex",
    backgroundColor: "#f3f3f3",
    padding: "2%",
    border: "1px solid #ddd",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const contentStyle = {
    flex: "1",
    padding: "0 20px",
  };

  const headingStyle = {
    marginTop: "6%",
    marginLeft: "10%",
    fontSize: "2.5vw",
  };

  const bodyTextStyle = {
    marginLeft: "10%",
    fontSize: "3.3vw",
  };

  const paragraphStyle = {
    marginLeft: "10%",
    fontSize: "1.35vw",
  };

  const imageStyle = {
    marginTop: "3%",
    marginLeft: "5%",
    marginBottom: "5%",
    width: "40%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const cubeStyle = {
    marginLeft: "10%",
    marginTop: "2.5%",
    width: "7%",
    height: "auto",
    maxWidth: "100%",
  };

  const secondCubeStyle = {
    marginLeft: "40%",
    marginTop: "2.5%",
    width: "7%",
    height: "auto",
    maxWidth: "100%",
  };

  const textCubeStyle = {
    marginLeft: "10%",
    fontSize: "1.5vw",
  };

  const secondTextCubeStyle = {
    marginLeft: "57%",
    marginTop: "-9.25%",
    fontSize: "1.5vw",
  };

  const paraTextStyle = {
    marginLeft: "10%",
    fontSize: "0.7vw",
  };

  const secondParaTextStyle = {
    marginLeft: "57%",
    marginTop: "1%",
    fontSize: "0.7vw",
  };

  return (
    <div style={textBoxStyle}>
      <img style={imageStyle} src={imgHolder} alt="Placeholder Image" />
      <div style={contentStyle}>
        <h1 style={bodyTextStyle}>
          Help others in the Field of Audiology make informed decisions about
          their externships{" "}
        </h1>
        <p style={paragraphStyle}>
          Audiology Externships is a platform built to help you explore a world
          of externship opportunities in Audiology. Review these options as you
          apply and make decisions about your externship.
          <p>
            After your externship: Fill out our externship survey to help others
            advance their careers. Share your valuable externship experiences on
            our website.
          </p>
        </p>

        <img style={cubeStyle} src={Cube} alt="Cube Icon" />
        <img style={secondCubeStyle} src={Cube} alt="Cube Icon" />
        <h1 style={textCubeStyle}>Find</h1>
        <p style={paraTextStyle}>Find the Perfect Externship for You</p>
        <h1 style={secondTextCubeStyle}>Share</h1>
        <p style={secondParaTextStyle}>
          Share Your Valuable Externship Experiences with Others
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
}

export default ImageTextBox;
