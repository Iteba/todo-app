import {
  Flex,
  FormControl,
  SimpleGrid,
  GridItem,
  FormLabel,
  Input,
  Box,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";

const TodoInfo: React.FC = () => {
  return (
    <AnimatePresence>
      <Flex
        position={"absolute"}
        bg={"white"}
        zIndex={1}
        top={3}
        bottom={3}
        right={-4}
        width={"35%"}
        border="2px solid black"
        boxShadow={"dark-lg"}
        flexDirection={"column"}
        paddingBlock={3}
        paddingInline={3}
      >
        <FormControl flex={1}>
          <SimpleGrid columns={2} spacing={10}>
            <GridItem colSpan={2}>
              <FormLabel>Todo</FormLabel>
              <Input
                placeholder={"This a todo..."}
                _placeholder={{
                  color: "black",
                }}
                border="2px solid black"
                borderRadius={"none"}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox checked>Completed</Checkbox>
            </GridItem>
          </SimpleGrid>
        </FormControl>
        <Box justifyContent={"flex-end"} display="flex" gap={5}>
          <Button
            borderRadius={"none"}
            textDecoration={"underline"}
            bg={"gray.200"}
          >
            Cancel
          </Button>
          <Button bg="#444" borderRadius={"none"} color={"white"}>
            Save
          </Button>
        </Box>
      </Flex>
    </AnimatePresence>
  );
};

export default TodoInfo;
