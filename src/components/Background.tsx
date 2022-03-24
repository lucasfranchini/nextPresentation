import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  return (
    <Flex
      w="100%"
      height="100vh"
      bgImage="url('/images/Bg.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="20px"
    >
      {children}
    </Flex>
  );
}
