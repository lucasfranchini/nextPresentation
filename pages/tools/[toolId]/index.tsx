import { useRouter } from "next/router";
import Head from "next/head";
import { Flex, Text, Link, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getTool } from "../../../src/services/toolsRoute";
import Tool from "../../../src/interfaces/Tool";
import Background from "../../../src/components/Background";
import Title from "../../../src/components/Title";
import Tag from "../../../src/components/Tag";

export default function ToolById() {
  const [tool, setTool] = useState<Tool>({
    title: "",
    link: "",
    description: "",
    tags: [],
  });
  const [toolFound, setToolFound] = useState(false);

  const router = useRouter();
  const toast = useToast();
  const { toolId } = router.query;

  useEffect(() => {
    if (toolId)
      getTool(toolId)
        .then((response) => {
          setTool(response.data);
          setToolFound(true);
        })
        .catch(() =>
          toast({
            description: "Ferramenta não encontrada",
            status: "error",
            duration: 1000,
            isClosable: false,
          })
        );
  }, [toolId]);

  return (
    <>
      <Head>
        <title>{tool.title}</title>
      </Head>
      <Background>
        <Flex
          w="70%"
          height="70vh"
          bg="white"
          borderRadius="15px"
          justifyContent={toolFound ? "space-around" : "center"}
          alignItems="center"
          p="0px 70px"
          direction="column"
        >
          <Title fontWeight="700" color="black">
            {tool.title || "Ferramenta não encontrada"}
          </Title>
          <Text
            fontSize="3xl"
            color="black"
            fontFamily="Montserrat"
            mb="50px"
            textAlign="center"
            fontWeight="400"
          >
            {tool.description}
          </Text>
          <Flex
            w="90%"
            wrap="wrap"
            bg="white"
            borderRadius="15px"
            justifyContent="space-around"
            alignItems="center"
            p="0px 70px"
          >
            {tool.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Flex>
          <Link
            w="70%"
            bg="#5232C9"
            color="white"
            fontSize="xl"
            fontWeight="700"
            borderRadius="5px"
            textAlign="center"
            display={toolFound ? "" : "none"}
            isExternal
            href={tool.link}
            _hover={{ textDecoration: "none" }}
          >
            Acessar em outra aba
          </Link>
        </Flex>
      </Background>
    </>
  );
}
