import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../assets/images/hero.webp";

export default function AdminLayout() {

  const API = import.meta.env.VITE_API_URL;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/admin/enquiries");
  }
}, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      // 🔐 Store JWT token
      localStorage.setItem("token", res.data.token);

      // ✅ Redirect to admin page
      navigate("/admin/enquiries");

    }

    catch (err) {
          const message = err.response?.data;

          if (err.response?.status === 403) {
            alert(message); // Blocked message
          } else if (err.response?.status === 401) {
            alert(message); // Invalid credentials
          } else {
            alert("Something went wrong");
          }
        }
    
    // catch (err) {
    //   alert("Invalid credentials or too many attempts");
    // }


  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;

          background:
            linear-gradient(135deg, rgba(200,66,66,0.4), rgba(5,7,129,0.4)),
            url(${bgImage});

          background-size: cover;
          background-position: center;
        }

        .card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 18px;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          text-align: center;
        }

        .title {
          font-size: 28px;
          font-weight: 600;
          color: white;
        }

        .subtitle {
          font-size: 14px;
          color: #e2e8f0;
          margin-bottom: 20px;
        }

        .input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 10px;
          border: none;
          outline: none;
        }

        .button {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          background: linear-gradient(90deg, #3b82f6, #f163bb);
          color: white;
          cursor: pointer;
        }

        .button:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="wrapper">
        <form onSubmit={handleLogin} className="card">

          <h2 className="title">Admin Login</h2>
          <p className="subtitle">Welcome SNDF 👋</p>

          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="button">
            Login
          </button>

        </form>
      </div>
    </>
  );
}