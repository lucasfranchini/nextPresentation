import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Title from "../src/components/Title";

export default function home() {
  return (
    <>
      <Head>
        <title> Home Page</title>
      </Head>
      <Flex
        w="100%"
        height="100vh"
        bgImage="url('/images/Bg.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        flexDirection="column"
        padding="20px"
      >
        <Title>Isso é uma pagina estática</Title>
        <Image src="/images/pusheencode.gif" width="400px" height="300px" />
      </Flex>
    </>
  );
}
