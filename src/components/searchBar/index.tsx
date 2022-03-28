import { Box } from "@chakra-ui/react";
import fieldType from "../../types/toolFieldType";
import SearchBarInput from "./Input";
import SearchBarOptions from "./Options";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (searchText: string, field: fieldType) => void;
}) {
  return (
    <Box>
      <SearchBarInput onSearch={onSearch} />
      <SearchBarOptions />
    </Box>
  );
}
