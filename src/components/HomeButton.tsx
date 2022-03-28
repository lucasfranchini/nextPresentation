import { Link } from "@chakra-ui/react";
import StyledLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HomeButton() {
  return (
    <StyledLink href="/">
      <Link
        width="46px"
        h="40px"
        bg="#EDF2F7"
        position="absolute"
        top="10px"
        left="10px"
        href="/"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
      >
        <FontAwesomeIcon icon={faHouse} />
      </Link>
    </StyledLink>
  );
}
