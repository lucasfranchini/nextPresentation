import { KeyboardEvent, useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import Tool from "../interfaces/Tool";

type Props = {
  setNewTool: React.Dispatch<React.SetStateAction<any>>;
  newTool: Tool;
};

export default function NewToolTagManager({ setNewTool, newTool }: Props) {
  const [newTag, setNewTag] = useState("");

  const addTag: Function = (tag: string) =>
    setNewTool({ ...newTool, tags: [...newTool.tags, tag] });

  const addOnEnter = (input: string) => {
    if (input === "Enter") {
      addTag(newTag);
      setNewTag("");
    }
  };

  console.log(newTool);
  return (
    <Flex
      w="100%"
      height="10vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="2px solid #EDF2F7"
      borderRadius="15px"
      position="relative"
      p="0"
    >
      <Input
        value={newTag}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setNewTag(e.currentTarget.value)
        }
        onKeyUp={(e: KeyboardEvent) => addOnEnter(e.nativeEvent.code)}
        position="absolute"
        bottom="0"
        size="lg"
        variant="filled"
        focusBorderColor="#5232C9"
        m="0"
      />
    </Flex>
  );
}
