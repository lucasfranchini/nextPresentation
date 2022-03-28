import { useRouter } from "next/router";
import Head from "next/head";
import { Flex, Text, Link, useToast, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { deleteTool, getTool } from "../../../src/services/toolsRoute";
import Tool from "../../../src/interfaces/Tool";
import Background from "../../../src/components/Background";
import Title from "../../../src/components/Title";
import Tag from "../../../src/components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AxiosResponse } from "axios";
import HomeButton from "../../../src/components/HomeButton";

export async function getServerSideProps(context: any) {
  const { toolId } = context.query;
  let toolData = {
    title: "",
    link: "",
    description: "",
    tags: [],
  };

  await getTool(toolId)
    .then((response: AxiosResponse) => {
      toolData = response.data;
    })
    .catch((e) => console.error(e));

  if (!toolData.title)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return { props: { toolData } };
}

export default function ToolById({ toolData }: { toolData: Tool }) {
  const toolId = toolData.id;
  const toast = useToast();

  const handleDeletion = () => {
    deleteTool(toolId)
      .then(() => {
        toast({
          description: "Ferramenta deletada",
          status: "success",
          duration: 1000,
          isClosable: false,
        });

        setTimeout(
          () => window.location.replace("http://localhost:3001/tools"),
          1000
        );
      })
      .catch(() =>
        toast({
          description: "Ocorreu um erro, a ferramenta não foi deletada",
          status: "error",
          duration: 1000,
          isClosable: false,
        })
      );
  };

  return (
    <>
      <Head>
        <title>{toolData.title || "Ferramenta não encontrada"}</title>
      </Head>
      <Background>
        <Flex
          w="70%"
          height="70vh"
          bg="white"
          borderRadius="15px"
          justifyContent="space-around"
          alignItems="center"
          p="0px 70px"
          position="relative"
          direction="column"
        >
          <Title fontWeight="700" color="black">
            {toolData.title || "Ferramenta não encontrada"}
          </Title>
          <Text
            fontSize="3xl"
            color="black"
            fontFamily="family"
            mb="50px"
            textAlign="center"
            fontWeight="regular"
          >
            {toolData.description}
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
            {toolData.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Flex>
          <Link
            w="70%"
            bg="product.pjPure"
            color="white"
            fontSize="xl"
            fontWeight="700"
            borderRadius="5px"
            textAlign="center"
            isExternal
            href={toolData.link}
            _hover={{ textDecoration: "none" }}
          >
            Acessar em outra aba
          </Link>
          <Button
            onClick={() => handleDeletion()}
            position="absolute"
            top="10px"
            right="10px"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <HomeButton />
        </Flex>
      </Background>
    </>
  );
}
