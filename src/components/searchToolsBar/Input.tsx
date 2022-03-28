import { Flex, FormControl, IconButton, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ToolFieldType from "../../types/toolFieldType";
import { useState } from "react";

type onSearchType = (searchText: string, field: ToolFieldType) => void;

export default function SearchBarInput({
  onSearch,
}: {
  onSearch: onSearchType;
}) {
  const [searchText, setSearchText] = useState("");
  return (
    <FormControl>
      <Flex w="100%" bgColor="white" borderRadius="5px" padding="5px" mb="15px">
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
          border="none"
        />
        <IconButton
          type="submit"
          onClick={() => {
            onSearch(searchText, "all");
          }}
          aria-label="Search database"
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </Flex>
    </FormControl>
  );
}
