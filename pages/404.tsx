import { Flex, Image } from "@chakra-ui/react";

export default function Custom404() {
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
      <Image src="/images/404.jpeg" />
    </Flex>
  );
}
