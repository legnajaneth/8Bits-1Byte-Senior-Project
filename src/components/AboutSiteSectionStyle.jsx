import { colors } from "../colors";

const styles = {
  container: {
    paddingTop: "3rem",
    paddingBottom: "3rem",

    backgroundColor: colors.background,
  },
  headingContainer: {
    paddingBottom: "1rem",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent + 50,
  },
  heading: {
    color: colors.text,
    fontSize: "4rem",
    textAlign: "center",
  },
  paragraph: {
    color: colors.text,
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  outerCardStyle: {
    backgroundColor: colors.secondary,
  },
  iconContainerStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2rem",
  },
};

export default styles;
