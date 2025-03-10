interface BalanceContainerProps {
  balance: string | number;
}

export function BalanceContainer({ balance }: BalanceContainerProps) {
  return (
    <div className="bg-gradient-to-r from-[#e07a19] to-[#f5a623] rounded-full py-3 px-6 flex items-center justify-between w-full max-w-md shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#f8c52c] border-2 border-white flex items-center justify-center">
          <div className="w-7 h-7 rounded-full border-2 border-[#e07a19]"></div>
        </div>
        <span className="text-white font-bold">Your Tony Coins Balance:</span>
      </div>
      <span className="text-white text-2xl font-bold">{balance}</span>
    </div>
  );
}
