"use client";

export default function BigLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 border-[10px] border-white border-t-blue-500 rounded-full animate-spin" />
        <p className="text-white text-xl font-semibold">Checking password...</p>
      </div>
    </div>
  );
}
