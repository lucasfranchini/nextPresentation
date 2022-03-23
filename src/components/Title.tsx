import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <Text fontSize="6xl" color="white" fontFamily="Montserrat">
      {children}
    </Text>
  );
}
