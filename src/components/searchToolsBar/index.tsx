import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { searchTools } from "../../services/toolsRoute";
import ToolFieldType from "../../types/toolFieldType";
import SearchBarInput from "./Input";
import SearchBarOptions from "./Options";

export default function SearchBar({ setTools }: { setTools: any }) {
  const [searchToolsOptions, setSearchToolsOptions] =
    useState<ToolFieldType>("all");
  const toast = useToast();

  function searchBarSubmit(searchtText: string) {
    searchTools(searchtText, searchToolsOptions)
      .then((res: any) => {
        setTools(res.data);
      })
      .catch(() => {
        toast({
          description:
            "não foi possivel encontrar a ferramenta favor, atualize a pagina",
          status: "error",
          duration: 1000,
          isClosable: false,
        });
      });
  }

  return (
    <Box>
      <SearchBarInput onSearch={searchBarSubmit} />
      <SearchBarOptions
        value={searchToolsOptions}
        setValue={setSearchToolsOptions}
      />
    </Box>
  );
}
