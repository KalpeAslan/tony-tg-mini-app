export function Character() {
  return (
    <div className="relative h-40 w-40 mb-6">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-[#33b1fc] rounded-md"></div>
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#0088cc] rounded-md"></div>
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-[#cc6600] rounded-md"></div>
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-[#e07a19] rounded-full"></div>
      <div className="absolute top-12 left-1/4 w-8 h-24 bg-[#e07a19] rounded-full transform -rotate-12"></div>
      <div className="absolute top-12 right-1/4 w-8 h-24 bg-[#e07a19] rounded-full transform rotate-12"></div>
      <div className="absolute bottom-0 left-1/3 w-6 h-6 bg-[#33b1fc] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-[#33b1fc] rounded-full"></div>
    </div>
  );
}
