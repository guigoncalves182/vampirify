import Status from "@/components/atoms/Status";
import { IMental } from "@/types/sheet";
import React from "react";

interface MentalProps {
  mental?: IMental;
}

export function Mental({ mental }: MentalProps) {
  return (
    <>
      <ul>
        <div className="w-full text-center rounded  text-xl">Mentais</div>
        <li>
          <Status description="Percepcção" value={mental?.perception || 1} />
        </li>
        <li>
          <Status
            description="Inteligência"
            value={mental?.intelligence || 1}
          />
        </li>
        <li>
          <Status description="Raciocínio" value={mental?.wits || 1} />
        </li>
      </ul>
    </>
  );
}
