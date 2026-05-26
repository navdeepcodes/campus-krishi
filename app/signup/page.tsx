"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSignup() {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully ✅");

    window.location.href = "/";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "24px",
          width: "420px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#16a34a",
          }}
        >
          Sign Up 🌱
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Create your Campus Krishi account
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
              border: "2px solid #d1d5db",
              fontSize: "18px",
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
              border: "2px solid #d1d5db",
              fontSize: "18px",
            }}
          />

          <button
            onClick={handleSignup}
            disabled={loading}
            style={{
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/login")
            }
            style={{
              backgroundColor: "white",
              color: "#16a34a",
              border:
                "2px solid #16a34a",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}