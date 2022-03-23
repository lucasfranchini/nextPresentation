import { Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  href?: string;
  children: React.ReactNode;
}

export default function StyledLink({ href, children }: Props) {
  return <Link href={href}>{children}</Link>;
}
