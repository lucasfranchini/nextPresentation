import { Box } from "@chakra-ui/react";

export default function home() {
  return (
    <Box
      w="100%"
      height="100vh"
      bgImage="url('/images/Bg.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    ></Box>
  );
}
