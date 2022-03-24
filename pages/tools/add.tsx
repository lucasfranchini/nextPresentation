import { Flex } from "@chakra-ui/react";
import Background from "../../src/components/Background";
import Title from "../../src/components/Title";
import Head from "next/head";

export default function Tools() {
  return (
    <>
      <Head>
        <title>Add a Tool</title>
      </Head>
      <Background>
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
      </Background>
    </>
  );
}
