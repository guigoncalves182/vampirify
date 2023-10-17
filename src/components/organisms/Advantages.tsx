import { IAdvantages } from "@/types/sheet";
import DynamicColums from "../molecules/DinamicColums";
import Title from "../molecules/Title";

import { Backgrounds } from "../molecules/advantages/Backgrounds";
import { Disciplines } from "../molecules/advantages/Disciplines";
import { Virtues } from "../molecules/advantages/Virtues";

interface AdvantagesProps {
  advantages: IAdvantages;
}

export default function Advantages({ advantages }: AdvantagesProps) {
  const backgrounds = <Backgrounds backgrounds={advantages.backgrounds} />;
  const disciplines = <Disciplines disciplines={advantages.disciplines} />;
  const virtues = <Virtues virtues={advantages.virtues} />;

  return (
    <>
      <Title text="Vantagens" />
      <DynamicColums columns={[backgrounds, disciplines, virtues]} />
    </>
  );
}
