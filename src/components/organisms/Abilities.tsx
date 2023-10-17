import React from "react";
import DynamicColums from "../molecules/DinamicColums";
import Title from "../molecules/Title";
import { IAbilities } from "@/types/sheet";
import { Talents } from "../molecules/abilities/Talents";
import { Skills } from "../molecules/abilities/Skills";
import { Knowledge } from "../molecules/abilities/Knowledge";

interface AbilitiesProps {
  abilities: IAbilities;
}

export default function Abilities({ abilities }: AbilitiesProps) {
  const talentos = <Talents talents={abilities?.talents} />;
  const pericias = <Skills skills={abilities?.skills} />;
  const conhecimentos = <Knowledge knowledge={abilities?.knowledge} />;

  return (
    <>
      <Title text="Habilidades" />
      <DynamicColums columns={[talentos, pericias, conhecimentos]} />
    </>
  );
}
