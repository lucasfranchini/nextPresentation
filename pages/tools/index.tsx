import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import ToolListItem from "../../src/components/ToolListItem";
import Tool from "../../src/interfaces/Tool";

// export async function getStaticProps() {
//      Em modo DEV, sempre roda! A cada acesso
//      Roda SOMENTE em build time
export async function getServerSideProps() {
  //     Em modo DEV, sempre roda! A cada acesso
  //     Rodando a cada acesso que você recebe
  const res = await fetch("http://localhost:3000/tools");
  const tools = await res.json();
  return { props: { tools } };
}

export default function Tools({ tools }: { tools: Tool[] }) {
  return (
    <>
      <Head>
        <title>Tools List</title>
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
        {tools.map((tool) => (
          <ToolListItem />
        ))}
      </Flex>
    </>
  );
}
