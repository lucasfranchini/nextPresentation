import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Title from "../../src/components/Title";
import ToolListItem from "../../src/components/ToolListItem";
import Tool from "../../src/interfaces/Tool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../src/components/searchToolsBar";
import { useState } from "react";
import HomeButton from "../../src/components/HomeButton";

// export async function getStaticProps() {
//      Em modo DEV, sempre roda! A cada acesso
//      Roda SOMENTE em build time
export async function getServerSideProps() {
  //     Em modo DEV, sempre roda! A cada acesso
  //     Rodando a cada acesso que você recebe
  const res = await fetch("http://localhost:3000/tools");
  const initialTools = await res.json();
  return { props: { initialTools } };
}

export default function Tools({ initialTools }: { initialTools: Tool[] }) {
  const [tools, setTools] = useState<Tool[]>(initialTools);

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
        <SearchBar setTools={setTools} />
        {tools.map((tool) => (
          <ToolListItem key={tool.id} tool={tool} />
        ))}
      </Flex>
    </>
  );
}
