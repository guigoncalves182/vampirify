import { ISheet } from "@/types/sheet";

export const mockSheet: ISheet = {
  header: {
    name: "Seu Nome",
    player: "Nome do Jogador",
    chronicle: "Nome da Crônica",
    nature: "Natureza",
    behavior: "Comportamento",
    clan: "Brujah",
    generation: 13,
    sire: "Nome do Sire",
    concept: "Conceito",
  },
  attributes: {
    physical: {
      stamina: 2,
      strength: 4,
      dexterity: 4,
    },
    social: {
      charisma: 3,
      manipulation: 2,
      appearance: 3,
    },
    mental: {
      perception: 2,
      intelligence: 2,
      wits: 2,
    },
  },
  abilities: {
    talents: {
      alertness: 3,
      athletics: 4,
      brawl: 5,
      dodge: 3,
      empathy: 4,
      expression: 5,
      intimidation: 3,
      leadership: 4,
      streetwise: 5,
      subterfuge: 3,
    },
    skills: {
      animalEmpathy: 4,
      crafts: 3,
      drive: 4,
      etiquette: 5,
      firearms: 3,
      melee: 4,
      performance: 5,
      security: 3,
      stealth: 4,
      survival: 5,
    },
    knowledge: {
      academics: 4,
      computer: 3,
      finance: 5,
      investigation: 3,
      law: 4,
      linguistics: 5,
      medicine: 3,
      occultism: 4,
      politics: 5,
      science: 3,
    },
  },
  advantages: {
    virtues: {
      conscienceConviction: 3,
      courage: 2,
      selfControlInstinct: 2,
    },
    disciplines: [
      { description: "Animalism", value: 2 },
      { description: "Auspex", value: 1 },
    ],
    backgrounds: [
      { description: "Allies", value: 3 },
      { description: "Contacts", value: 1 },
    ],
  },
};
