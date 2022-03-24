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

  const removeTag: Function = (index: number) => {
    newTool.tags.splice(index, 1);
    setNewTool({ ...newTool, tags: [...newTool.tags] });
  };

  const addOnEnter = (input: string) => {
    if (input !== "Enter" || !newTag) return;

    if (newTool.tags.length === 10) {
      toast({
        description: "É possível adicionar no máximo 10 tags",
        status: "error",
        duration: 500,
        isClosable: false,
      });
    } else if (newTool.tags.indexOf(newTag) === -1) {
      addTag(newTag);
      setNewTag("");
    } else {
      toast({
        description: "Você já adicionou essa tag",
        status: "error",
        duration: 500,
        isClosable: false,
      });
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
          <Tag removeTag={removeTag} tags={newTool.tags} key={tag}>
            {tag}
          </Tag>
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
