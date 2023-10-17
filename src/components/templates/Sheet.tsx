import Image from "next/image";
import Header from "../organisms/Header";
import Attributes from "../organisms/Attributes";
import Abilities from "../organisms/Abilities";
import { mockSheet } from "@/mocks/sheet.mock";

export default function Sheet() {
  return (
    <main className="container mx-auto bg-white border-2 border-black rounded p-2 m-2">
      <Image
        className="mx-auto"
        src="/VaM_Logo.png"
        alt="logo"
        width={250}
        height={150}
      />

      <Header header={mockSheet.header} />
      <Attributes attributes={mockSheet.attributes} />
      <Abilities abilities={mockSheet.abilities} />
      
    </main>
  );
}
