import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import DynamicHead from "../components/head";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = ". t o d o" }) => {
  const isSideBarOpen = true;
  return (
    <AnimatePresence exitBeforeEnter>
      <DynamicHead title={title} />
      <SimpleGrid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: .3, ease: "linear" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.5, duration: .5, ease: "linear" },
        }}
        bg={"gray.50"}
        templateRows={"auto 1fr"}
        maxW={"100%"}
        h={"100vmin"}
      >
        <Navbar />
        {isSideBarOpen ? (
          <SimpleGrid templateColumns={"1fr 3fr"}>
            <Sidebar />
            {children}
          </SimpleGrid>
        ) : (
          <SimpleGrid>{children}</SimpleGrid>
        )}
      </SimpleGrid>
    </AnimatePresence>
  );
};

export default Layout;
