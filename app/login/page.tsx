"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin() {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {

      alert(error.message);

      return;
    }

    alert("Login successful!");

    window.location.href = "/";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#0a8f3d",
            marginBottom: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome Back 🌱
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Login to continue
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleLogin}

            style={{
              background: "#0a8f3d",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}