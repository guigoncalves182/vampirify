import Status from "@/components/atoms/Status";
import { ISkills } from "@/types/sheet";
import React from "react";

interface SkillsProps {
  skills: ISkills;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <>
      <div className="w-full text-center rounded text-xl">Perícias</div>
      <ul>
        <li>
          <Status description="Emp. c/ Animais" value={skills.animalEmpathy} />
        </li>
        <li>
          <Status description="Ofícios" value={skills.crafts} />
        </li>
        <li>
          <Status description="Condução" value={skills.drive} />
        </li>
        <li>
          <Status description="Etiqueta" value={skills.etiquette} />
        </li>
        <li>
          <Status description="Armas de fogo" value={skills.firearms} />
        </li>
        <li>
          <Status description="Armas brancas" value={skills.melee} />
        </li>
        <li>
          <Status description="Performance" value={skills.performance} />
        </li>
        <li>
          <Status description="Segurança" value={skills.security} />
        </li>
        <li>
          <Status description="Furtividade" value={skills.stealth} />
        </li>
        <li>
          <Status description="Sobrevivência" value={skills.survival} />
        </li>
      </ul>
    </>
  );
}
