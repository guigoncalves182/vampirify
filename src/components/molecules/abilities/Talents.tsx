import Status from "@/components/atoms/Status";
import { ITalents } from "@/types/sheet";
import React from "react";

interface TalentsProps {
  talents: ITalents;
}

export function Talents({ talents }: TalentsProps) {
  return (
    <>
      <div className="w-full text-center rounded text-xl">Talentos</div>
      <ul>
        <li>
          <Status description="Prontidão" value={talents.alertness} />
        </li>
        <li>
          <Status description="Esportes" value={talents.athletics} />
        </li>
        <li>
          <Status description="Briga" value={talents.brawl} />
        </li>
        <li>
          <Status description="Esquiva" value={talents.dodge} />
        </li>
        <li>
          <Status description="Empatia" value={talents.empathy} />
        </li>
        <li>
          <Status description="Expressão" value={talents.expression} />
        </li>
        <li>
          <Status description="Intimidação" value={talents.intimidation} />
        </li>
        <li>
          <Status description="Liderança" value={talents.leadership} />
        </li>
        <li>
          <Status description="Manha" value={talents.streetwise} />
        </li>
        <li>
          <Status description="Lábia" value={talents.subterfuge} />
        </li>
      </ul>
    </>
  );
}
