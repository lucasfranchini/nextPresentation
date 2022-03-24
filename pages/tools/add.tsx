import { Flex } from "@chakra-ui/react";
import Background from "../../src/components/Background";
import Title from "../../src/components/Title";
import Head from "next/head";
import NewToolForm from "../../src/components/NewToolForm";

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
          alignItems="center"
          p="0px 70px"
          direction="column"
        >
          <Title fontWeight="700" color="black">
            Adicione uma ferramenta
          </Title>
          <NewToolForm />
        </Flex>
      </Background>
    </>
  );
}
