import { Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Tag({ children }: Props) {
  return (
    <Flex
      height="30px"
      border="0px"
      borderRadius="10px"
      position="relative"
      p="5px 10px 25px 10px"
      bg="#5232C9"
      m="5px"
      color="white"
      fontWeight="600"
      fontFamily="Montserrat"
      cursor="default"
    >
      {children}
    </Flex>
  );
}
