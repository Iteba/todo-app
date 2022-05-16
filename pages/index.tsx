import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Layout from "../src/layout/layout";
import Todolist from "../src/components/todolist";
import InputBar from "../src/components/input";
import TodoInfo from "../src/components/todoInfo";

const Home: NextPage = () => {
  const isStatsOpen = true;

  return (
    <>
      <Layout>
        <Container maxW={"full"} h={"full"}>
          <SimpleGrid
            h={"full"}
            templateColumns={"2fr 1fr"}
            position={"relative"}
          >
            <Flex
              as={motion.div}
              flexDir={"column"}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              p={10}
              overflow="hidden"
            >
              <InputBar />
              <Todolist />
            </Flex>
            {isStatsOpen && <TodoInfo />}
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
