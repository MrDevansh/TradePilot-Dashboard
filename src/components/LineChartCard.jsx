// src/components/LineChartCard.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

export default function LineChartCard({ title, data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow w-full">
      <h3 className="text-md font-semibold mb-4 dark:text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
