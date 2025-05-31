// src/components/LowStock.jsx
export default function LowStock({ products }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg w-full">
      <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
        Low Stock Alerts
      </h3>
      <ul className="space-y-3 text-sm">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg shadow-sm"
          >
            <span className="font-medium">{p.name}</span>
            <span className="font-semibold">{p.stock} left</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
