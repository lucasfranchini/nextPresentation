import Tool from "../../src/interfaces/Tool";

// export async function getStaticProps() {
//      Em modo DEV, sempre roda! A cada acesso
//      Roda SOMENTE em build time
export async function getServerSideProps() {
  //     Em modo DEV, sempre roda! A cada acesso
  //     Rodando a cada acesso que você recebe
  const res = await fetch("http://localhost:3000/tools");
  const tools = await res.json();
  return { props: { tools } };
}

export default function Tools({ tools }: { tools: Tool[] }) {
  return <div>teste</div>;
}
