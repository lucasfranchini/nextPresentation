import { useState } from "react";
import { Button, Input, useToast } from "@chakra-ui/react";
import NewToolTagManager from "./NewToolTagManager";
import Tool from "../interfaces/Tool";
import { createTool } from "../services/toolsRoute";
import validateURL from "../services/validateURL";

export default function NewToolForm() {
  const [newTool, setNewTool] = useState<Tool>({
    title: "",
    link: "",
    description: "",
    tags: [],
  });

  const toast = useToast();

  const inputs = [
    {
      placeholder: "Nome da ferramenta",
      value: newTool.title,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, title: e.currentTarget.value }),
      isValid: (string: string) => /[a-zA-Z]{3,}/.test(string),
    },
    {
      placeholder: "Link",
      value: newTool.link,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, link: e.currentTarget.value }),
      isValid: (string: string) => validateURL(string),
    },
    {
      placeholder: "Descrição",
      value: newTool.description,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, description: e.currentTarget.value }),
      isValid: (string: string) => /[a-zA-Z]{3,}/.test(string),
    },
  ];

  const checkInputs = () => {
    let allowed = true;

    inputs.forEach((input) => {
      if (!input.value || !newTool.tags.length || !input.isValid(input.value))
        allowed = false;
    });

    return allowed;
  };

  const handleToolCreation = () => {
    createTool(newTool)
      .then(() => {
        setNewTool({
          title: "",
          link: "",
          description: "",
          tags: [],
        });

        toast({
          description: "Ferramenta criada!",
          status: "success",
          duration: 1000,
          isClosable: false,
        });
      })
      .catch((error) =>
        toast({
          description: error,
          status: "error",
          duration: 1000,
          isClosable: false,
        })
      );
  };

  return (
    <>
      {inputs?.map((input) => (
        <Input
          value={input.value}
          onChange={input.onChange}
          placeholder={input.placeholder}
          size="lg"
          variant="filled"
          focusBorderColor="product.pjPure"
          mb="20px"
          isInvalid={
            input.value.length > 0 ? !input.isValid(input.value) : false
          }
          _placeholder={{ color: "#ABABAB" }}
          key={input.placeholder}
        />
      ))}
      <NewToolTagManager
        toast={toast}
        setNewTool={setNewTool}
        newTool={newTool}
      />
      <Button
        onClick={() => handleToolCreation()}
        w="100%"
        disabled={!checkInputs()}
        cursor={checkInputs() ? "cursor" : "not-allowed"}
      >
        Criar
      </Button>
    </>
  );
}
