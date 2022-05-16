import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import DynamicHead from "../src/components/head";
import Navbar from "../src/components/navbar";

const About: NextPage = () => {
  return (
    <>
      <DynamicHead title={'About | . t o d o'} />
      <Navbar />
      <Container>About Page...
        {/* Might do some three js */}
      </Container>
    </>
  );
};

export default About;
