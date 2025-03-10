export function TonyDevice() {
  return (
    <div className="relative w-64 h-96 bg-[#3a4cb1] rounded-3xl border-4 border-[#33b1fc] shadow-xl overflow-hidden">
      {/* Screen background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#501d7c] to-[#33b1fc]">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-12">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-[#33b1fc]/20"></div>
          ))}
        </div>

        {/* Diagonal elements */}
        <div className="absolute top-1/4 left-0 w-full h-12 bg-[#33b1fc]/20 transform -skew-y-12"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-12 bg-[#33b1fc]/20 transform skew-y-12"></div>

        {/* TONY text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-[#33b1fc] text-5xl font-extrabold tracking-wider"
            style={{
              textShadow:
                '0 0 10px rgba(51,177,252,0.8), 0 0 20px rgba(51,177,252,0.5), 0 0 30px rgba(51,177,252,0.3)',
              WebkitTextStroke: '1px #fff',
            }}
          >
            TONY
          </h1>
        </div>
      </div>

      {/* Device details */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>
      <div className="absolute right-2 top-1/3 w-1 h-4 bg-[#f5a623] rounded-full"></div>
      <div className="absolute right-2 top-1/3 mt-6 w-1 h-4 bg-[#e07a19] rounded-full"></div>
    </div>
  );
}
