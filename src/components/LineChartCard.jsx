import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

export default function LineChartCard({ title, data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
      <h3 className="text-lg font-semibold mb-6 dark:text-white tracking-wide">{title}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#10b981", fontWeight: "700", fontSize: 14 }}
            axisLine={{ stroke: "#059669" }}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#10b981", borderRadius: "8px", border: "none" }}
            itemStyle={{ color: "#fff", fontWeight: "700" }}
            labelStyle={{ color: "#bbf7d0" }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#10b981"
            strokeWidth={4}
            dot={{ r: 6, strokeWidth: 3, fill: "#22c55e", stroke: "#15803d" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
