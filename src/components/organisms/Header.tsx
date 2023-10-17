import { IHeader } from "@/types/sheet";
import DynamicColums from "../molecules/DinamicColums";

interface HeaderProps {
  header?: IHeader;
}

export default function Header({ header }: HeaderProps) {
  const headerColumns = [
    <ul key={1}>
      <li>Nome: {header?.name}</li>
      <li>Jogador: {header?.player}</li>
      <li>Crônica: {header?.chronicle}</li>
    </ul>,
    <ul key={2}>
      <li>Natureza: {header?.nature}</li>
      <li>Comportamento: {header?.behavior}</li>
      <li>Clã: {header?.clan}</li>
    </ul>,
    <ul key={3}>
      <li>Geração: {header?.generation}</li>
      <li>Senhor: {header?.sire}</li>
      <li>Conceito: {header?.concept}</li>
    </ul>,
  ];

  return <DynamicColums columns={headerColumns} />;
}
