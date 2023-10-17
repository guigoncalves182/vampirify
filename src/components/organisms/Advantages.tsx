import { IAttributes } from "@/types/sheet";
import DynamicColums from "../molecules/DinamicColums";
import Title from "../molecules/Title";
import Status from "../atoms/Status";

interface AdvantagesProps {
  advantages?: IAttributes;
}

export default function Advantages({ advantages }: AdvantagesProps) {
  const backgrounds = (
    <ul>
      <div className="w-full text-center rounded  text-xl">Vantagens</div>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
      <li>
        <Status value={0} />
      </li>
    </ul>
  );
  const disciplines = <>disciplines</>;
  const virtues = <>virtues</>;

  return (
    <>
      <Title text="Vantagens" />
      <DynamicColums columns={[backgrounds, disciplines, virtues]} />
    </>
  );
}
