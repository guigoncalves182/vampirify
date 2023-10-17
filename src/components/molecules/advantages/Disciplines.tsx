import Status from "@/components/atoms/Status";
import { IDisciplines } from "@/types/sheet";
import React from "react";

interface DisciplinesProps {
  disciplines: IDisciplines[];
}

export function Disciplines({ disciplines }: DisciplinesProps) {
  return (
    <ul>
      <div className="w-full text-center rounded  text-xl">Disciplinas</div>
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
}
