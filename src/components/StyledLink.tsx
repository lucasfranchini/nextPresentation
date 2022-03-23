import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function StyledLink({ href, children }: Props) {
  return (
    <NextLink href={href} passHref>
      <Link color="white" mt="10" fontSize="2xl">
        {children}
      </Link>
    </NextLink>
  );
}
