import { ISkills } from "@/types/sheet";
import React from "react";

interface SkillsProps {
  skills: ISkills;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <>
      <div className="w-full text-center rounded  text-xl">Perícias</div>
      <ul>
        <li>Emp. c/ Animais: {skills.animalEmpathy}</li>
        <li>Ofícios: {skills.crafts}</li>
        <li>Condução: {skills.drive}</li>
        <li>Etiqueta: {skills.etiquette}</li>
        <li>Armas de fogo: {skills.firearms}</li>
        <li>Armas brancas: {skills.melee}</li>
        <li>Performance: {skills.performance}</li>
        <li>Segurança: {skills.security}</li>
        <li>Furtividade: {skills.stealth}</li>
        <li>Sobrevivência: {skills.survival}</li>
      </ul>
    </>
  );
}
