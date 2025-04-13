// src/components/LowStock.jsx
export default function LowStock({ products }) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow w-full">
        <h3 className="text-md font-semibold mb-4">Low Stock Alerts</h3>
        <ul className="space-y-2 text-sm">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between bg-red-50 text-red-700 px-3 py-2 rounded"
            >
              <span>{p.name}</span>
              <span>{p.stock} left</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  