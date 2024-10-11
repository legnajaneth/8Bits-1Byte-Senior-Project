import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import cover from "../images/coverAI.png";
import { colors } from "../colors";
import styles from "./AboutSiteSectionStyle";
import bubbleSearchIcon from "../images/bubble-search-solid.svg";
import clipboardIcon from "../images/clipboard-check.svg";

function AboutSiteSection() {
  return (
    <div>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>Discover Audiology Externships</h1>
        <p style={styles.paragraph}>Your Gateway to Professional Growth</p>
      </div>

      <div style={styles.container}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
          backgroundColor={colors.secondary + 50}
        >
          <Image objectFit="cover" src={cover} boxSize="37.5rem" />
          <CardBody>
            <SimpleGrid
              spacing={12}
              templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
            >
              <Card
                size="lg"
                height="35rem"
                backgroundColor={colors.primary + 40}
              >
                <CardHeader>
                  <Heading size="3xl" color={colors.text}>
                    Searching for externships?
                  </Heading>
                </CardHeader>
                <CardBody>
                  <div style={styles.iconContainerStyle}>
                    <img
                      src={bubbleSearchIcon}
                      alt="bubble search icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <Text fontSize="2xl">
                    Audiology Externships is a platform built to help you
                    explore a world of externship opportunities in Audiology.
                    Review these options as you apply and make decisions about
                    your externship.{" "}
                  </Text>
                </CardBody>
              </Card>

              <Card size="lg" backgroundColor={colors.primary + 40}>
                <CardHeader>
                  <Heading size="3xl" color={colors.text}>
                    Completed your externship?
                  </Heading>
                </CardHeader>
                <CardBody>
                  <div style={styles.iconContainerStyle}>
                    <img
                      src={clipboardIcon}
                      alt="clipboard icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <Text fontSize="2xl">
                    Join our community and help others advance their careers by
                    sharing your valuable externship experiences on our website.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AboutSiteSection;
