import {
  List,
  ListItem,
  Button,
  Editable,
  Flex,
  CloseButton,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Key, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { connect } from 'react-redux';
import { RootState, RootDispatch } from "../store/store"

interface Props {
  user?: Number;
  id?: Key | null | undefined;
  text?: string;
  completed?: Boolean;
  todos?: any;
}

const Todo: React.FC<Props> = ({ text }) => {
  return (
    <ListItem
      as={motion.div}
      border="2px solid black"
      bg={"white"}
      boxShadow={"md"}
      p={2}
      display={"flex"}
      alignItems={"center"}
      exit={{ opacity: 0, x: "-50vw" }}
    >
      <Editable
        overflow={"hidden"}
        textOverflow={"clip"}
        whiteSpace={"nowrap"}
        paddingInline={2}
        flex={1}
        defaultValue={text}
        borderRadius={"none"}
      >
        <EditablePreview w={"full"} />
        <EditableInput _focus={{ outline: "none" }} />
      </Editable>
      <Flex flexDir={"row"} alignItems={"center"}>
        <Button p={"unset"} _hover={{ background: "#eee" }}>
          <FaCheck />
        </Button>
        <CloseButton p={"unset"} />
      </Flex>
    </ListItem>
  );
};

interface TodoProps {
  data?: {
    userId?: Number;
    id?: Number;
    title?: String;
    completed?: Boolean;
  };
}

const Todolist: React.FC<TodoProps> = () => {
  useEffect(() => {

  }, []);

  return (
    <Flex
      flexDir={"column"}
      pt={10}
      paddingInline={0}
      minH={0}
      maxHeight={"lg"}
      maxW={"full"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <List
        className={"scrollBar"}
        spacing={3}
        overflow="auto"
        boxShadow={"inner"}
        position={"relative"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            border: "none",
            borderRadius: "none",
            backgroundColor: `rgba(0, 0, 0, 0)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
        <Todo text={"Heyy...."} />
      </List>
    </Flex>
  );
};

export default Todolist;

const mapProps = (state: RootState) => {
}

const mapDispatch = (mapDispatch: RootDispatch) => {
}

export connect(mapProps, mapDispatch)(Todo)
