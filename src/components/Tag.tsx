import { Flex, Button } from "@chakra-ui/react";

interface Props {
  children: string;
  removeTag: Function;
  tags: string[];
}

export default function Tag({ children, removeTag, tags }: Props) {
  return (
    <Flex
      height="30px"
      border="0px"
      borderRadius="10px"
      position="relative"
      p="5px 40px 25px 10px"
      bg="#5232C9"
      m="5px"
      color="white"
      fontWeight="600"
      fontFamily="Montserrat"
      cursor="default"
    >
      {children}
      <Flex
        onClick={() => {
          removeTag(tags.indexOf(children));
        }}
        position="absolute"
        top="2.5px"
        right="2.5px"
        h="25px"
        w="25px"
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
        cursor="pointer"
        color="white"
        bg="#8c70f1"
        transition="all .2s"
        _hover={{ backgroundColor: "#b39fff" }}
      >
        x
      </Flex>
    </Flex>
  );
}
