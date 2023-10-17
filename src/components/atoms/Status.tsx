import { IStatus } from "@/types/status";

type TStatus = "⚫" | "⚪";

export default function Status({ description, value }: IStatus) {
  function generatePattern(number: number, max = 5): TStatus[] {
    const pattern: TStatus[] = [];

    for (let i = 1; i <= max; i++) {
      if (i <= number) {
        pattern.push("⚫");
      } else {
        pattern.push("⚪");
      }
    }

    return pattern;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full flex-1 grow-0">{description}</div>
      <div className="w-full border-b border-black flex-1 grow"></div>
      <div className="w-full flex-1 grow-0">{generatePattern(value)}</div>
    </div>
  );
}
