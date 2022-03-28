import { Box } from "@chakra-ui/react";
import SearchBarInput from "./Input";
import SearchBarOptions from "./Options";

export default function SearchBar() {
    return (
        <Box>
            <SearchBarInput/>
            <SearchBarOptions/>
        </Box>
}
