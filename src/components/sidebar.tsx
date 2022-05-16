import {
  Container,
  Button,
  Box,
  Text,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const sideInfo = [
  { title: "Today", todos: [] },
  { title: "Tomorrow", todos: [] },
  { title: "This Week", todos: [] },
  { title: "This Month", todos: [] },
];

const Sidebar: React.FC = () => {
  return (
    <Container
      as={motion.div}
      p={1}
      h={"100%"}
      bg={"white"}
      borderRightColor={"black"}
      borderRightWidth={2}
      overflowY={"hidden"}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
    >
      <Button float={"right"} bg={"transparent"}>
        <FaAngleDoubleLeft />
      </Button>
      <Text
        fontFamily="Open Sans"
        letterSpacing={3}
        fontWeight={"bold"}
        color={"gray.500"}
        fontSize={"large"}
        p={2}
      >
        Timeline
      </Text>
      <SimpleGrid h={"90%"} templateRows={"1fr auto"} overflow={"hidden"}>
        <Box paddingBlock={5} paddingInline={2}>
          <Accordion allowToggle>
            {sideInfo.map((accordion) => (
              <AccordionItem key={accordion.title}>
                <AccordionButton _expanded={{ fontWeight: "bold" }}>
                  <Text flex={1} textAlign={"left"}>
                    {accordion.title}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>{accordion.todos.map((todo) => todo)}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box padding={2}>Might add spotify here</Box>
      </SimpleGrid>
    </Container>
  );
};

export default Sidebar;
