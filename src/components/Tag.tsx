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
      bg="product.pjPure"
      m="5px"
      color="white"
      fontWeight="bold"
      fontFamily="family"
      cursor="default"
    >
      <Text>{children}</Text>
    </Flex>
  );
}
