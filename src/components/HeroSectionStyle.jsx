import { colors } from "../colors";

const styles = {
  container: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "7rem",
  },
  textBox: {
    justifyContent: "column",
  },
  heading: {
    color: colors.text,
    fontSize: "4rem",
  },
  paragraph: {
    color: colors.text,
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  heroImage: {
    position: "relative",
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  buttonContainerStyle: {
    paddingTop: ".5rem",
  },
  actionButtonStyle: {
    backgroundColor: colors.primary,
    color: colors.text, 
  },
};

export default styles;
