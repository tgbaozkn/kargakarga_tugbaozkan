import React from "react";

function ResultFields({ resultData }) {

  return (
    <div className="mt-20">
      <div className="relative flex items-start">
        <label
          htmlFor="fuel"
          className="z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg rounded-bl-3xl rounded-tl-3xl bg-[#0D1840] text-lg text-white"
        >
          CO <sub>2</sub>
        </label>
        <input
          id="fuel"
          type="text"
          className="-ml-2 h-12 w-2/5 rounded-br-full rounded-tr-full border border-[#0D1840] bg-transparent pb-2 pl-4 outline-none"
          disabled
          value={resultData.co2}
        />
      </div>
      <div className="relative mt-8 flex items-start">
        <label
          htmlFor="fuel"
          className="z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg rounded-bl-3xl rounded-tl-3xl bg-[#0D1840] text-lg text-white"
        >
          CH <sub>4</sub>
        </label>
        <input
          id="fuel"
          type="text"
          className="-ml-2 h-12 w-2/5 rounded-br-full rounded-tr-full border border-[#0D1840] bg-transparent pb-2 pl-4 outline-none"
          disabled
          value={resultData.ch4}
        />
      </div>
      <div className="relative mt-8 flex items-start">
        <label
          htmlFor="fuel"
          className="z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg rounded-bl-3xl rounded-tl-3xl bg-[#0D1840] text-lg text-white"
        >
          N <sub>2</sub> O
        </label>
        <input
          id="fuel"
          type="text"
          className="-ml-2 h-12 w-2/5 rounded-br-full rounded-tr-full border border-[#0D1840] bg-transparent pb-2 pl-4 outline-none"
          disabled
          value={resultData.n2o}
        />
      </div>
      <div className="relative mt-8 flex items-start">
        <label
          htmlFor="fuel"
          className="z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg rounded-bl-3xl rounded-tl-3xl bg-[#0D1840] text-lg text-white"
        >
          CO
          <sub>
            2 <sup>e</sup>
          </sub>
        </label>
        <input
          id="fuel"
          type="text"
          className="-ml-2 h-12 w-2/5 rounded-br-full rounded-tr-full border border-[#0D1840] bg-transparent pb-2 pl-4 outline-none"
          disabled
          value={resultData.co2e}
        />
      </div>
    </div>
  );
}

export default ResultFields;