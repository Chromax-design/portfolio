import React from "react";

const Insight = ({ insights }: { insights: string[] }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark dark:text-dark text-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-5 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((insight) => (
          <div key={insight}>
            {insight}
            <span className="px-4">
              |
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
