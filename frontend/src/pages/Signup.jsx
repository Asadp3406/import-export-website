import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../api'

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      if (res.data && res.data.user) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded-md focus:ring focus:ring-green-300"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md focus:ring focus:ring-green-300"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md focus:ring focus:ring-green-300"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="border p-2 rounded-md focus:ring focus:ring-green-300"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Signup
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}