import Status from "@/components/atoms/Status";
import { ISocial } from "@/types/sheet";
import React from "react";

interface SocialProps {
  social: ISocial;
}

export function Social({ social }: SocialProps) {
  return (
    <>
      <div className="w-full text-center rounded  text-xl">Sociais</div>
      <ul>
        <li><Status description="Carisma" value={social.charisma} /></li>
        <li><Status description="Manipulação" value={social.manipulation} /></li>
        <li><Status description="Aparência" value={social.appearance} /></li>
      </ul>
    </>
  );
}
