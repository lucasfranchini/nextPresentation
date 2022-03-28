import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Title from "../../src/components/Title";
import ToolListItem from "../../src/components/ToolListItem";
import Tool from "../../src/interfaces/Tool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import HomeButton from "../../src/components/HomeButton";

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
        position="relative"
      >
        <HomeButton />
        <Title>
          <FontAwesomeIcon icon={faScrewdriverWrench} /> Tools List
        </Title>
        {tools.map((tool) => (
          <ToolListItem key={tool.id} tool={tool} />
        ))}
      </Flex>
    </>
  );
}
