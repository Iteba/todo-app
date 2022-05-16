import { Container, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const transition = {
  delay: 0.3,
  duration: 0.5,
  ease: [0.43, 0.23, 0.1, 0.35],
  staggerChildren: 0.3,
};

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

const Loader = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setIsLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return isLoading ? (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"fixed"}
      zIndex={1000}
      inset={0}
      bg={"white"}
      color={"black"}
      as={motion.div}
      exit={{ opacity: 0, transition: { ...transition, duration: 5 } }}
    >
      <Box
        as={motion.div}
        initial="initial"
        animate="animate"
        variants={variants}
        transition={"ease-in-out"}
      >
        <Text as={motion.span} fontSize={"xxx-large"}>
          Loading...
        </Text>
      </Box>
    </Container>
  ) : null;
};

export default Loader;
