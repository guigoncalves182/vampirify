import Status from "@/components/atoms/Status";
import { IPhysical } from "@/types/sheet";
import React from "react";

interface PhysicalProps {
  physical?: IPhysical;
}

export function Physical({ physical }: PhysicalProps) {
  return (
    <>
      <div className="w-full text-center rounded  text-xl">Físicos</div>
      <ul>
        <li>
          <Status description="Força" value={physical?.strength || 1} />
        </li>
        <li>
          <Status description="Destreza" value={physical?.dexterity || 1} />
        </li>
        <li>
          <Status description="Vigor" value={physical?.stamina || 1} />
        </li>
      </ul>
    </>
  );
}
