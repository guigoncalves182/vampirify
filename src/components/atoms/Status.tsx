import { IStatus } from "@/types/status";

type TStatus = "⚫" | "⚪";

export default function Status({
  description,
  value = 0,
  hiddenValues = false,
}: IStatus) {
  function generatePattern(value: number): TStatus[] {
    const max = 5;
    const pattern: TStatus[] = [];

    for (let i = 1; i <= max; i++) {
      if (i <= value) {
        pattern.push("⚫");
      } else {
        pattern.push("⚪");
      }
    }

    return pattern;
  }

  return (
    <div className="flex flex-wrap h-6">
      <div className="w-full flex-1 grow-0 whitespace-nowrap">
        {description}
      </div>
      <div className="w-full border-b border-black flex-1 grow"></div>
      <div className="w-full flex-1 grow-0">{!hiddenValues && generatePattern(value)}</div>
    </div>
  );
}