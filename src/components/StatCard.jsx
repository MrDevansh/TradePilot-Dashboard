// src/components/StatCard.jsx
import { cn } from "../utils/cn"; // optional utility to merge classNames

export default function StatCard({ title, value, icon, color = "blue" }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
      <div className={`p-2 rounded-full ${colorMap[color]}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
    </div>
  );
}
