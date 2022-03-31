import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Tool from "../interfaces/Tool";

export default function ToolListItem({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.id}`} passHref>
      <Flex
        bgColor="white"
        borderRadius="5px"
        p="10px"
        minH="100px"
        w="50%"
        margin="10px"
        cursor="pointer"
        flexDir="column"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="18px" mb="15px">
          {tool.title}
        </Text>
        <Text textAlign="center" fontSize="16px">
          {tool.description}
        </Text>
      </Flex>
    </Link>
  );
}
