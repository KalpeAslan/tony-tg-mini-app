interface CurrencyItemProps {
  amount: string | number;
  label: string;
  variant: 'gray' | 'blue' | 'green';
}

export function CurrencyItem({ amount, label, variant }: CurrencyItemProps) {
  const bgColors = {
    gray: 'bg-[#9e9e9e]',
    blue: 'bg-[var(--bg-accent)]',
    green: 'bg-[#55fc33]',
  };

  return (
    <div
      className={`${bgColors[variant]} rounded-full py-2 px-6 flex flex-col items-center shadow-md`}
    >
      <span className="text-white text-xl font-bold">{amount}</span>
      <span className="text-white text-sm">{label}</span>
    </div>
  );
}

export function CurrencyContainer() {
  return (
    <div className="flex gap-3 justify-center w-full">
      <CurrencyItem amount="99,999" label="Tony Coins" variant="gray" />
      <CurrencyItem amount="0.1" label="TON" variant="blue" />
      <CurrencyItem amount="5" label="Stars" variant="green" />
    </div>
  );
}
