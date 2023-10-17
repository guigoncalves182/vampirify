import { TRange } from "./types";

export type TClan =
  | "Assamitas"
  | "Brujah"
  | "Seguidores"
  | "Gangrel"
  | "Giovanni"
  | "Lasombra"
  | "Malkavianos"
  | "Nosferatu"
  | "Ravnos"
  | "Toreador"
  | "Tremere"
  | "Tzimisce"
  | "Ventrue";

export interface IHeader {
  name: string;
  player: string;
  chronicle: string;
  nature: string;
  behavior: string;
  clan: TClan;
  generation: TRange<3, 14>;
  sire: string;
  concept: string;
}

export interface IPhysical {
  stamina: number;
  strength: number;
  dexterity: number;
}

export interface ISocial {
  charisma: number;
  manipulation: number;
  appearance: number;
}

export interface IMental {
  perception: number;
  intelligence: number;
  wits: number;
}

export interface IAttributes {
  physical: IPhysical;
  social: ISocial;
  mental: IMental;
}

export interface ITalents {
  alertness: number;
  athletics: number;
  brawl: number;
  dodge: number;
  empathy: number;
  expression: number;
  intimidation: number;
  leadership: number;
  streetwise: number;
  subterfuge: number;
}

export interface ISkills {
  animalEmpathy: number;
  crafts: number;
  drive: number;
  etiquette: number;
  firearms: number;
  melee: number;
  performance: number;
  security: number;
  stealth: number;
  survival: number;
}

export interface IKnowledge {
  academics: number;
  computer: number;
  finance: number;
  investigation: number;
  law: number;
  linguistics: number;
  medicine: number;
  occultism: number;
  politics: number;
  science: number;
}

export interface IAbilities {
  talents: ITalents;
  skills: ISkills;
  knowledge: IKnowledge;
}

export interface IBackgrounds {
  description:
    | "Allies"
    | "Contacts"
    | "Fame"
    | "Influence"
    | "Mentor"
    | "Resources"
    | "Status";
  value: number;
}

export interface IDisciplines {
  description:
    | "Celerity"
    | "Obfuscate"
    | "Quietus"
    | "Potence"
    | "Presence"
    | "Animalism"
    | "Fortitude"
    | "Protean"
    | "Serpenti"
    | "Dominate"
    | "Necromancy"
    | "Obtenebration"
    | "Auspex"
    | "Dementation"
    | "Chimerstry"
    | "Thaumaturgy"
    | "Vicissitude";
  value: number;
}

export interface IVirtues {
  conscienceConviction: number;
  selfControlInstinct: number;
  courage: number;
}

export interface IAdvantages {
  backgrounds: IBackgrounds[];
  disciplines: IDisciplines[];
  virtues: IVirtues;
}

export interface ISheet {
  header: IHeader;
  attributes: IAttributes;
  abilities: IAbilities;
  advantages: IAdvantages;
}
