import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#080710] text-white font-[Poppins,sans-serif] overflow-hidden">
      {/* Background Gradient Shapes */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#1845ad] to-[#23a2f6] rounded-full blur-[120px] opacity-30 -top-24 -left-20 z-0 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#ff512f] to-[#f09819] rounded-full blur-[100px] opacity-30 -bottom-16 -right-16 z-0 animate-spin-slow" />

      {/* Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-500 to-red-400 drop-shadow-lg">
          Welcome to TradePilot 🛍️
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your ultimate Management Partner.
        </p>
        <Link
          to="/signin"
          className="inline-block px-8 py-3 bg-white text-[#080710] text-lg font-bold rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Sign In to Continue →
        </Link>
      </div>
    </div>
  );
};

export default Home;
