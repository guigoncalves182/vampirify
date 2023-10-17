export default function Title({ text }: { text: string }) {
  return (
    <div className="w-full text-center border-b-4 rounded border-black text-2xl">
      {text}
    </div>
  );
}
