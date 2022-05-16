import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import * as fa from "react-icons/fa";
import NextLink from "next/link";
import React from "react";

const menuLinks = [
  { name: "Profile", href: "/profile" },
  { name: "History", href: "/history" },
  { name: "About", href: "/about" },
];

const Navbar: React.FC = () => {
  return (
    <Box
      w={"full"}
      h={"auto"}
      p={3}
      bgColor={"white"}
      borderBottomColor={"black"}
      borderBottomWidth={2}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <NextLink href="/">
          <a>
            <Text
              fontSize={"xx-large"}
              fontWeight={"bold"}
              fontFamily={"Monserrat"}
              letterSpacing={1}
            >
              .todo
            </Text>
          </a>
        </NextLink>
        <Flex gap={3}>
          <Button>
            <fa.FaSearch />
          </Button>
          <Button bg={"transparent"}>
            <fa.FaMoon />
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<fa.FaBars />}
            />
            <MenuList zIndex={10}>
              {menuLinks.map(({ name, href }, index) => (
                <NextLink href={href} key={index}>
                  <MenuItem>
                    <a>{name}</a>
                  </MenuItem>
                </NextLink>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
