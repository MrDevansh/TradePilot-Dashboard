import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function ChartCard({ title, data }) {
  return (
    <div className="bg-gradient-to-tr from-indigo-50 to-blue-50 p-6 rounded-3xl shadow-lg border border-indigo-200 w-full transition-transform hover:scale-[1.02] duration-300">
      <h3 className="text-xl font-extrabold mb-6 text-indigo-900 tracking-wide drop-shadow-sm">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 12, right: 10, left: 10, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "#4f46e5", fontWeight: "700", fontSize: 14 }}
            axisLine={{ stroke: "#c7d2fe" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 24px rgba(79,70,229,0.15)",
              backgroundColor: "#ffffff",
              fontWeight: "600",
              color: "#3730a3",
            }}
            cursor={{ fill: "rgba(79,70,229,0.1)" }}
          />
          <Bar
            dataKey="revenue"
            barSize={26}
            radius={[12, 12, 0, 0]}
            fill="url(#colorRevenue)"
            style={{
              filter: "drop-shadow(0 4px 6px rgba(99,102,241,0.3))",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#4338ca" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
