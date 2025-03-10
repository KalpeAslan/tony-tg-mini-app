interface PaginationDotsProps {
  total: number;
  active: number;
}

export function PaginationDots({ total, active }: PaginationDotsProps) {
  return (
    <div className="flex gap-2 justify-center my-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full w-2 h-2 ${i === active ? 'bg-white' : 'bg-white/50'}`}
        />
      ))}
    </div>
  );
}
