import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../api'

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      if (res.data && res.data.user) {
        alert("Login successful!");
        if (res.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert("Login failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md focus:ring focus:ring-blue-300"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md focus:ring focus:ring-blue-300"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="border p-2 rounded-md focus:ring focus:ring-blue-300"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}