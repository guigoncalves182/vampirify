import { IAttributes } from "@/types/sheet";
import DynamicColums from "../molecules/DinamicColums";
import Title from "../molecules/Title";
import { Physical } from "../molecules/attributes/physical";
import { Social } from "../molecules/attributes/social";
import { Mental } from "../molecules/attributes/mental";

interface AttributesProps {
  attributes: IAttributes;
}

export default function Attributes({ attributes }: AttributesProps) {
  const fisicos = <Physical physical={attributes.physical} />;
  const sociais = <Social social={attributes.social} />;
  const mentais = <Mental mental={attributes.mental} />;

  return (
    <>
      <Title text="Atributos" />
      <DynamicColums columns={[fisicos, sociais, mentais]} />
    </>
  );
}
