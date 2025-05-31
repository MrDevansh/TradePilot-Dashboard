import StatCard from "../components/StatCard";
import LineChartCard from "../components/LineChartCard";
import ChartCard from "../components/ChartCard";
import { exportToCSV } from "../utils/exportCSV";
import Skeleton from "react-loading-skeleton";
import {
  stats,
  monthlyRevenueData,
  weeklySalesData,
  recentOrders,
  lowStockProducts,
} from "../data/dummyData";

export default function Dashboard() {
  const loading = false;

  return (
    <div className="p-6 space-y-8 bg-gradient-to-br from-gray-100 to-indigo-100 dark:from-[#0f172a] dark:to-[#1e293b] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">
          📊 Dashboard Overview
        </h1>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <StatCard key={i} title={s.title} value={s.value} icon={s.icon} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="📈 Monthly Revenue" data={monthlyRevenueData} />
        <LineChartCard title="📉 Weekly Sales" data={weeklySalesData} />
      </div>

      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            🧾 Recent Orders
          </h2>
          <button
            onClick={() => exportToCSV(recentOrders, "orders.csv")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium shadow"
          >
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Skeleton count={5} />
              ) : (
                recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3 text-green-600 dark:text-green-400">
                      ${order.total}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200"
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200"
                            : "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3">{order.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Low Stock Warning */}
      <div className="bg-white/80 dark:bg-red-900/90 backdrop-blur border border-red-300 dark:border-red-700 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-red-700 dark:text-red-200 mb-4">
          🚨 Low Stock Warnings
        </h2>
        <ul className="space-y-2 text-sm">
          {lowStockProducts.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-between bg-red-50 dark:bg-red-800 p-3 rounded-md shadow-sm"
            >
              <span className="text-red-800 dark:text-red-100">
                ⚠️ {p.name}
              </span>
              <span className="text-xs bg-red-200 text-red-900 dark:bg-red-700 dark:text-red-100 px-2 py-0.5 rounded-full">
                {p.stock} left
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
