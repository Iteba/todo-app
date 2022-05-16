import { extendTheme, withDefaultVariant } from "@chakra-ui/react";

const theme = extendTheme(
  {},
  withDefaultVariant({
    variant: {
      field: {
        _hover: {
          backgroundColor: "transparent",
        },
      },
    },
    components: ["Button"],
  }),
  withDefaultVariant({
    variant: {
      field: {
        _hover: {
          backgroundColor: "transparent",
        },
      },
    },
    components: ["Input"],
  })
);

export default theme;
