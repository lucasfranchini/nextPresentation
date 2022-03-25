import { Flex, FormControl, IconButton, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import fieldType from "../../types/fieldType";
import { useState } from "react";

type onSearchType = (searchText: string, field: fieldType) => void;

export default function SearchBar({ onSearch }: { onSearch: onSearchType }) {
  const [searchText, setSearchText] = useState("");
  return (
    <FormControl w="50%">
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
