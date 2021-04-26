import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export async function getEdgeProps() {
  const res = await fetch("https://randomuser.me/api", {});
  const json = await res.json();

  return {
    props: {
      name: json.results[0].name.first,
    },
  };
}

interface Props {
  name: string;
}

export default function Index({ name }: Props) {
  return <Title>Hello {name}!</Title>;
}
