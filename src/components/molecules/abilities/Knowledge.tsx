import { IKnowledge } from "@/types/sheet";
import React from "react";

interface KnowledgeProps {
  knowledge: IKnowledge;
}

export function Knowledge({ knowledge }: KnowledgeProps) {
  return (
    <>
      <div className="w-full text-center rounded  text-xl">Conhecimentos</div>
      <ul>
        <li>Acadêmicos: {knowledge.academics}</li>
        <li>Computador: {knowledge.computer}</li>
        <li>Finanças: {knowledge.finance}</li>
        <li>Investigação: {knowledge.investigation}</li>
        <li>Direito: {knowledge.law}</li>
        <li>Linguística: {knowledge.linguistics}</li>
        <li>Medicina: {knowledge.medicine}</li>
        <li>Ocultismo: {knowledge.occultism}</li>
        <li>Política: {knowledge.politics}</li>
        <li>Ciências: {knowledge.science}</li>
      </ul>
    </>
  );
}
