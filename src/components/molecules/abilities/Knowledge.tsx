import Status from "@/components/atoms/Status";
import { IKnowledge } from "@/types/sheet";
import React from "react";

interface KnowledgeProps {
  knowledge: IKnowledge;
}

export function Knowledge({ knowledge }: KnowledgeProps) {
  return (
    <>
      <div className="w-full text-center rounded text-xl">Conhecimentos</div>
      <ul>
        <li>
          <Status description="Acadêmicos" value={knowledge.academics} />
        </li>
        <li>
          <Status description="Computador" value={knowledge.computer} />
        </li>
        <li>
          <Status description="Finanças" value={knowledge.finance} />
        </li>
        <li>
          <Status description="Investigação" value={knowledge.investigation} />
        </li>
        <li>
          <Status description="Direito" value={knowledge.law} />
        </li>
        <li>
          <Status description="Linguística" value={knowledge.linguistics} />
        </li>
        <li>
          <Status description="Medicina" value={knowledge.medicine} />
        </li>
        <li>
          <Status description="Ocultismo" value={knowledge.occultism} />
        </li>
        <li>
          <Status description="Política" value={knowledge.politics} />
        </li>
        <li>
          <Status description="Ciências" value={knowledge.science} />
        </li>
      </ul>
    </>
  );
}
