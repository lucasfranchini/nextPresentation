import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string;
}

export default function Title({ children, color, fontWeight }: Props) {
  return (
    <Text
      fontSize="6xl"
      color={color || "white"}
      fontFamily="Montserrat"
      mb="50px"
      fontWeight={fontWeight || 400}
    >
      {children}
    </Text>
  );
}
