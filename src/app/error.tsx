"use client";

function error() {
  return (
    <div className="h-[33rem]">
      <div className="w-full bg-sky-600 p-20 mt-10">
        <h1 className="text-7xl text-white font-bold mb-20">Whoops!</h1>
        <p className="text-2xl text-white">Something went wrong</p>
      </div>
    </div>
  );
}

export default error;
