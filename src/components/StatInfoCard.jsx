import React from "react";

function StatInfoCard({ count, label }) {
  return (
    <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-white rounded-[14px] p-5">
      <h4 className="text-4xl md:5-xl font-medium text-secondary">{count}</h4>
      <p className="tet-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line ">
        {label}
      </p>
    </div>
  );
}

export default StatInfoCard;
