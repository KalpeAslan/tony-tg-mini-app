export function Logo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Device frame */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-tony-dark rounded-3xl border-4 border-tony-accent shadow-[0_0_20px_5px_rgba(51,177,252,0.5)]">
        {/* Screen content would go here */}
      </div>
      
      {/* Logo text */}
      <h1 
        className="text-tony-accent text-6xl font-extrabold tracking-wider mt-12 text-center"
      >
        TONY
      </h1>
    </div>
  );
}
