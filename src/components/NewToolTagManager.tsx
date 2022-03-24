import { KeyboardEvent, useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import Tool from "../interfaces/Tool";
import Tag from "../components/Tag";

type Props = {
  setNewTool: React.Dispatch<React.SetStateAction<any>>;
  newTool: Tool;
  toast: Function;
};

export default function NewToolTagManager({
  setNewTool,
  newTool,
  toast,
}: Props) {
  const [newTag, setNewTag] = useState("");

  const addTag: Function = (tag: string) =>
    setNewTool({ ...newTool, tags: [...newTool.tags, tag] });

  const addOnEnter = (input: string) => {
    if (input === "Enter" && newTag) {
      if (newTool.tags.length > 10) {
        toast({
          description: "É possível adicionar no máximo 10 tags",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        addTag(newTag);
        setNewTag("");
      }
    }
  };

  return (
    <Flex
      w="100%"
      height="fit-content"
      minHeight="10vh"
      border="2px solid #EDF2F7"
      borderRadius="15px 15px 0px 0px"
      position="relative"
      p="0"
    >
      <Flex flexWrap="wrap">
        {newTool.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Flex>
      <Input
        value={newTag}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setNewTag(e.currentTarget.value)
        }
        onKeyUp={(e: KeyboardEvent) => addOnEnter(e.nativeEvent.code)}
        position="absolute"
        bottom="-48px"
        left="-2px"
        size="lg"
        width="calc(100% + 4px)"
        outline="0px"
        variant="filled"
        focusBorderColor="#5232C9"
        borderRadius="0px 0px 10px 10px"
        border="2px solid #EDF2F7"
        m="0"
        placeholder="Aperte Enter para adicionar uma tag"
      />
    </Flex>
  );
}
