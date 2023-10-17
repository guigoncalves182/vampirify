import Status from "@/components/atoms/Status";
import { IVirtues } from "@/types/sheet";
import React from "react";

interface VirtuesProps {
  virtues: IVirtues;
}

export function Virtues({ virtues }: VirtuesProps) {
  return (
    <ul>
      <div className="w-full text-center rounded  text-xl">Virtudes</div>
      <li>
        <Status description="Consciência / Convicção" value={virtues.conscienceConviction} />
      </li>
      <li>
        <Status description="Auto-Controle / Instinto" value={virtues.selfControlInstinct} />
      </li>
      <li>
        <Status description="Coragem" value={virtues.courage} />
      </li>
    </ul>
  );
}
