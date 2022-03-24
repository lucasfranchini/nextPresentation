import { useState } from "react";
import { Input } from "@chakra-ui/react";

export default function NewToolForm() {
  const [newTool, setNewTool] = useState({
    name: "",
    link: "",
    description: "",
    tags: [],
  });

  const inputs = [
    {
      placeholder: "Nome da ferramenta",
      value: newTool.name,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setNewTool({ ...newTool, name: e.currentTarget.value }),
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
    </>
  );
}
