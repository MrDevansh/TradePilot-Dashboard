// src/components/RecentOrders.jsx
export default function RecentOrders({ orders }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg w-full">
      <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
        Recent Orders
      </h3>
      <table className="w-full text-sm table-auto border-collapse">
        <thead>
          <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            <th className="pb-3 font-medium">Order ID</th>
            <th className="pb-3 font-medium">Customer</th>
            <th className="pb-3 font-medium">Amount</th>
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="py-3 font-mono text-gray-700 dark:text-gray-300">{order.id}</td>
              <td className="py-3 text-gray-800 dark:text-gray-200">{order.customer}</td>
              <td className="py-3 font-semibold text-gray-900 dark:text-white">₹₹{order.amount}</td>
              <td className="py-3 text-gray-600 dark:text-gray-400">{order.date}</td>
              <td className="py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                    order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : order.status === "Shipped"
                      ? "bg-blue-200 text-blue-800"
                      : order.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
