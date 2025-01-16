import React from "react";

export default function NewArrival() {
  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 bg-red-500 bg-[url('../images/Frame684.png')] bg-cover bg-center">
          <p>PlayStation 5</p>
        </div>
        <div className="col-span-2 bg-purple-500">02</div>
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <div className="bg-pink-500 w-full">03</div>
          <div className="bg-pink-500 w-full">03</div>
        </div>
      </div>
    </div>
  );
}
