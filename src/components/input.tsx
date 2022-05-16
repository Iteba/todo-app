import { Button, Input, Flex, FormControl } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import React, { useState } from "react"

const InputBar: React.FC = () => {
  const [text, setText] = useState("")

  

  return (
    <Flex
      maxW={"100%"}
      flexDirection={"row"}
      justifyContent={"center"}
      boxShadow={"md"}
    >
      <FormControl
        maxW={'full'}
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        onSubmit={(e: any) => {
          e.preventDefault()
          setText("")
        }}
      >
        <Input
          type={"text"}
          width={"100%"}
          border="2px solid black"
          borderRight="1px solid black"
          borderRadius={"none"}
          placeholder={`Add a todo then press enter or click plus 😊`}
          _placeholder={{
            color: "black",
          }}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        />
        <Button
          bg={"white"}
          border="2px solid black"
          borderLeft="1px solid black"
          borderRadius={"none"}
          type='submit'
          onClick={(e: any) => setText(e.target.value)}
        >
          <FaPlus />
        </Button>
      </FormControl>
    </Flex>
  );
};

export default InputBar;
