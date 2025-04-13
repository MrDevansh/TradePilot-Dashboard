// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Welcome to Productify 🛍️
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Your ultimate Seller Dashboard experience
        </p>
        <Link
          to="/signin"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
        >
          Sign In to Continue →
        </Link>
      </div>
    </div>
  );
};

export default Home;
