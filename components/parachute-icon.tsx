export function ParachuteIcon() {
  return (
    <div className="relative w-24 h-24">
      {/* Parachute */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-10">
        <div className="absolute top-0 left-0 w-10 h-10 bg-[#33b1fc] rounded-tl-full rounded-tr-full"></div>
        <div className="absolute top-0 right-0 w-10 h-10 bg-white rounded-tl-full rounded-tr-full"></div>
        <div className="absolute top-0 left-1/4 w-10 h-10 bg-[#33b1fc] rounded-tl-full rounded-tr-full"></div>
      </div>

      {/* Strings */}
      <div className="absolute top-10 left-1/4 w-0.5 h-6 bg-[#33b1fc] transform -rotate-12"></div>
      <div className="absolute top-10 right-1/4 w-0.5 h-6 bg-[#33b1fc] transform rotate-12"></div>

      {/* Coin */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#f8c52c] rounded-full border-2 border-[#e07a19] flex items-center justify-center">
        <div className="w-8 h-8 bg-[#f5a623] rounded-full flex items-center justify-center">
          <span className="text-[#e07a19] font-bold text-sm">T</span>
        </div>
      </div>

      {/* Small coins */}
      <div className="absolute bottom-4 left-0 w-6 h-6 bg-[#f8c52c] rounded-full border border-[#e07a19]"></div>
      <div className="absolute top-8 right-0 w-4 h-4 bg-[#f8c52c] rounded-full border border-[#e07a19]"></div>
    </div>
  );
}
