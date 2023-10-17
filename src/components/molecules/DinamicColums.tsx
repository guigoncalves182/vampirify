import { IDynamicColums } from "@/types/dynamicColums";

export default function DynamicColums({ columns }: IDynamicColums) {
  return (
    <div className="flex flex-wrap gap-2">
      {columns.map((column, index) => (
        <div key={index} className="w-full md:flex-1">
          {column}
        </div>
      ))}
    </div>
  );
}
