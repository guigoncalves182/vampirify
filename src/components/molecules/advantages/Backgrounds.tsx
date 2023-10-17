import Status from "@/components/atoms/Status";
import { IBackgrounds } from "@/types/sheet";
import React from "react";

interface BackgroundsProps {
  backgrounds: IBackgrounds[];
}

export function Backgrounds({ backgrounds }: BackgroundsProps) {
  return (
    <ul>
      <div className="w-full text-center rounded  text-xl">Antecedentes</div>
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
