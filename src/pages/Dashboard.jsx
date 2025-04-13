import StatCard from "../components/StatCard";
import LineChartCard from "../components/LineChartCard";
import ChartCard from "../components/ChartCard";
import { exportToCSV } from "../utils/exportCSV";
import Skeleton from "react-loading-skeleton"; // Optional loading skeleton
import {
  stats,
  monthlyRevenueData,
  weeklySalesData,
  recentOrders,
  lowStockProducts,
} from "../data/dummyData";

export default function Dashboard() {
  const loading = false; // Replace with your loading state

  return (
    <div className="p-6 space-y-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Topbar actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Dashboard Overview</h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} title={s.title} value={s.value} icon={s.icon} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Monthly Revenue" data={monthlyRevenueData} />
        <LineChartCard title="Weekly Sales" data={weeklySalesData} />
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold dark:text-white">Recent Orders</h2>
          <button
            onClick={() => exportToCSV(recentOrders, "orders.csv")}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
          >
            Export Orders
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 dark:text-gray-300">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Skeleton count={5} />
            ) : (
              recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t dark:border-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Low Stock Alerts */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Low Stock Warnings</h2>
        <ul className="space-y-2 text-sm">
          {lowStockProducts.map((p) => (
            <li
              key={p.id}
              className="p-2 bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100 rounded"
            >
              ⚠️ {p.name} - Only {p.stock} left!
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
