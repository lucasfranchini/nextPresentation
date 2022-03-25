import { Flex, FormControl, IconButton, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <FormControl w="50%" onSubmit={() => alert("XD")}>
      <Flex w="100%" bgColor="white" borderRadius="5px" padding="5px">
        <Input type="text" placeholder="Search..." border="none" />
        <IconButton
          type="submit"
          onSubmit={() => alert("XD")}
          aria-label="Search database"
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </Flex>
    </FormControl>
  );
}
