import { Flex } from "@chakra-ui/react";
import Title from "../src/components/Title";

export default function home() {
  return (
    <Flex
      w="100%"
      height="100vh"
      bgImage="url('/images/Bg.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      justifyContent="center"
      padding="20px"
    >
      <Title>Isso é uma pagina estatica</Title>
    </Flex>
  );
}
