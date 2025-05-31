import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {Link} from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080710] relative font-[Poppins,sans-serif]">
      {/* Background Shapes */}
      <div className="absolute w-[430px] h-[520px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#1845ad] to-[#23a2f6] -left-20 -top-20"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -right-8 -bottom-20"></div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative w-[400px] bg-white/10 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(8,7,16,0.6)] rounded-lg p-10 text-white"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Login Here</h2>
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}
        <label htmlFor="username" className="block mb-1 font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-[50px] bg-white/10 rounded px-3 text-sm font-light placeholder-[#e5e5e5] mb-4 outline-none"
        />

        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="admin123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[50px] bg-white/10 rounded px-3 text-sm font-light placeholder-[#e5e5e5] mb-6 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-white text-[#080710] py-3 rounded font-semibold hover:bg-gray-200 transition duration-200"
        >
          Login
        </button>
      </form>
      <Link
        to="/"
        className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        ← Back
      </Link>
    </div>
  );
};

export default SignIn;
