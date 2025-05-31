// src/components/StatCard.jsx
import { cn } from "../utils/cn";

export default function StatCard({ title, value, icon, color = "blue" }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-md flex items-center gap-5 transition-transform transform hover:scale-[1.03]",
        "cursor-default select-none"
      )}
      aria-label={`${title} card`}
    >
      <div
        className={cn(
          "p-3 rounded-xl shadow-md flex items-center justify-center text-3xl",
          colorMap[color]
        )}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-widest">
          {title}
        </p>
        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-1">
          {value}
        </h3>
      </div>
    </div>
  );
}
