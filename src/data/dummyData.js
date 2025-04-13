// Stat cards data
export const stats = [
  { title: "Total Sales", value: "$15,000", icon: "💰" },
  { title: "Orders", value: "320", icon: "🛒" },
  { title: "Customers", value: "210", icon: "👥" },
  { title: "Low Stock", value: "5 Products", icon: "⚠️" },
];

// Monthly bar chart data
export const monthlyRevenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 3200 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 4000 },
  { month: "Jun", revenue: 5100 },
];

// Weekly sales line chart
export const weeklySalesData = [
  { day: "Mon", sales: 200 },
  { day: "Tue", sales: 350 },
  { day: "Wed", sales: 300 },
  { day: "Thu", sales: 400 },
  { day: "Fri", sales: 500 },
  { day: "Sat", sales: 600 },
  { day: "Sun", sales: 450 },
];

// Recent orders
export const recentOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    total: 1299,
    status: "Pending",
    date: "2025-04-10",
  },
  {
    id: "ORD002",
    customer: "Alice Smith",
    total: 549,
    status: "Shipped",
    date: "2025-04-09",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    total: 299,
    status: "Completed",
    date: "2025-04-08",
  },
];

// Low stock warnings
export const lowStockProducts = [
  { id: "p101", name: "AirPods Pro", stock: 3 },
  { id: "p102", name: "Google Pixel 7", stock: 2 },
  { id: "p103", name: "Logitech MX Master", stock: 5 },
  { id: "p104", name: "Samsung SSD 1TB", stock: 1 },
  { id: "p105", name: "Kindle Paperwhite", stock: 4 },
];

// Full product list (for products page)
export const products = [
  {
    id: "p001",
    name: "iPhone 14",
    price: 999,
    stock: 20,
    category: "Smartphones",
    image: "/assets/iphone.jpg",
  },
  {
    id: "p002",
    name: "AirPods Pro",
    price: 249,
    stock: 3,
    category: "Accessories",
    image: "/assets/airpods.jpg",
  },
  {
    id: "p003",
    name: "MacBook Air M2",
    price: 1299,
    stock: 12,
    category: "Laptops",
    image: "/assets/macbook.jpg",
  },
  {
    id: "p004",
    name: "Logitech MX Master 3",
    price: 99,
    stock: 5,
    category: "Accessories",
    image: "/assets/mouse.jpg",
  },
  {
    id: "p005",
    name: "Samsung SSD 1TB",
    price: 139,
    stock: 1,
    category: "Storage",
    image: "/assets/ssd.jpg",
  },
];

export const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2025-04-10",
    total: 149.99,
    status: "Pending",
  },
  {
    id: "ORD-002",
    customer: "Alice Smith",
    date: "2025-04-09",
    total: 89.5,
    status: "Shipped",
  },
  {
    id: "ORD-003",
    customer: "Sam Wilson",
    date: "2025-04-08",
    total: 249.0,
    status: "Completed",
  },
  {
    id: "ORD-004",
    customer: "Emily Clark",
    date: "2025-04-07",
    total: 59.99,
    status: "Cancelled",
  },
];

export const customers = [
  {
    id: "c001",
    name: "John Doe",
    email: "john@example.com",
    totalOrders: 4,
    totalSpent: 2597,
  },
  {
    id: "c002",
    name: "Alice Smith",
    email: "alice@example.com",
    totalOrders: 2,
    totalSpent: 1198,
  },
  {
    id: "c003",
    name: "David Lee",
    email: "david@example.com",
    totalOrders: 5,
    totalSpent: 3285,
  },
];
