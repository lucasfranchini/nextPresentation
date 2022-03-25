import { Flex, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

export default function Tag({ children }: Props) {
  return (
    <Flex
      height="50px"
      border="0px"
      fontSize="xl"
      borderRadius="10px"
      position="relative"
      p="10px 10px 20px 10px"
      bg="#5232C9"
      m="5px"
      color="white"
      fontWeight="600"
      fontFamily="Montserrat"
      cursor="default"
    >
      <Text>{children}</Text>
    </Flex>
  );
}
