import { Flex } from "@chakra-ui/react";
import Title from "../../src/components/Title";
import Head from "next/head";

export default function Tools() {
  return (
    <>
      <Head>
        <title>Add a Tool</title>
      </Head>
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
        <Flex
          w="70%"
          height="70vh"
          bg="white"
          borderRadius="15px"
          justifyContent="center"
          pt="15px"
        >
          <Title fontWeight="700" color="black">
            Adicione uma ferramenta
          </Title>
        </Flex>
      </Flex>
    </>
  );
}
