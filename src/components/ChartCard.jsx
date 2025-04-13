// src/components/ChartCard.jsx
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function ChartCard({ title, data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h3 className="text-md font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
