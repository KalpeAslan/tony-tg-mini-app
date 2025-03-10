export function Logo() {
  return (
    <div className="mt-16 mb-8 relative">
      <div className="w-64 h-24 relative">
        {/* Character head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-[#002a3a] rounded-3xl border-4 border-[#33b1fc] shadow-[0_0_20px_5px_rgba(51,177,252,0.5)]">
          <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
        </div>

        {/* TONY text */}
        <h1
          className="text-[#33b1fc] text-6xl font-extrabold tracking-wider mt-12 text-center"
          style={{ textShadow: '0 0 10px rgba(51,177,252,0.8), 2px 2px 0 #000' }}
        >
          TONY
        </h1>
      </div>
    </div>
  );
}
