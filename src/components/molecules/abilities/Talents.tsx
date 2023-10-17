import { ITalents } from "@/types/sheet";
import React from "react";

interface TalentsProps {
  talents: ITalents;
}

export function Talents({ talents }: TalentsProps) {
  return (
    <>
      <div className="w-full text-center rounded  text-xl">Talentos</div>
      <ul>
        <li>Prontidão: {talents.alertness}</li>
        <li>Esportes: {talents.athletics}</li>
        <li>Briga: {talents.brawl}</li>
        <li>Esquiva: {talents.dodge}</li>
        <li>Empatia: {talents.empathy}</li>
        <li>Expressão: {talents.expression}</li>
        <li>Intimidação: {talents.intimidation}</li>
        <li>Liderança: {talents.leadership}</li>
        <li>Manha: {talents.streetwise}</li>
        <li>Lábia: {talents.subterfuge}</li>
      </ul>
    </>
  );
}
