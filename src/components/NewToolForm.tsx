import { useState } from "react";
import { Input } from "@chakra-ui/react";
import NewToolTagManager from "./NewToolTagManager";
import Tool from "../interfaces/Tool";

export default function NewToolForm() {
  const [newTool, setNewTool] = useState<Tool>({
    title: "",
    link: "",
    description: "",
    tags: [],
  });

  const inputs = [
    {
      placeholder: "Nome da ferramenta",
      value: newTool.title,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, title: e.currentTarget.value }),
      pattern: /[a-zA-Z]{3,}/,
    },
    {
      placeholder: "Link",
      value: newTool.link,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, link: e.currentTarget.value }),
      pattern:
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    },
    {
      placeholder: "Descrição",
      value: newTool.description,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, description: e.currentTarget.value }),
      pattern: /[a-zA-Z]{3,}/,
    },
  ];

  return (
    <>
      {inputs.map((input) => (
        <Input
          value={input.value}
          onChange={input.onChange}
          placeholder={input.placeholder}
          size="lg"
          variant="filled"
          focusBorderColor="#5232C9"
          mb="20px"
          isInvalid={
            input.value.length > 0 ? !input.pattern.test(input.value) : false
          }
          _placeholder={{ color: "#ABABAB" }}
        />
      ))}
      <NewToolTagManager setNewTool={setNewTool} newTool={newTool} />
    </>
  );
}
