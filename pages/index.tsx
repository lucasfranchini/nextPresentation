import Head from "next/head";
import Image from "next/image";
import Background from "../src/components/Background";
import StyledLink from "../src/components/StyledLink";
import Title from "../src/components/Title";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home Page</title>
      </Head>
      <Background>
        <Title>Isso é uma pagina estática</Title>
        <Image src="/images/pusheencode.gif" width="400px" height="300px" />
        <StyledLink href="/tools">teste</StyledLink>
      </Background>
    </>
  );
}
