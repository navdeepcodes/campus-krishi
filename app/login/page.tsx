"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful 🌱");

    window.location.href = "/";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#14532d,#22c55e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily:
          "Inter, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND CIRCLE */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "rgba(255,255,255,0.08)",
          top: "-150px",
          right: "-120px",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background:
            "rgba(255,255,255,0.15)",
          backdropFilter: "blur(18px)",
          padding: "45px",
          borderRadius: "30px",
          border:
            "1px solid rgba(255,255,255,0.2)",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.18)",
          zIndex: 2,
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "24px",
              backgroundColor: "white",
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
              fontSize: "42px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            🌱
          </div>
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "46px",
            fontWeight: "900",
            color: "white",
            marginBottom: "12px",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            textAlign: "center",
            color:
              "rgba(255,255,255,0.85)",
            marginBottom: "40px",
            fontSize: "16px",
            lineHeight: "1.7",
          }}
        >
          Login to continue your
          sustainable journey with
          Campus Krishi
        </p>

        {/* INPUTS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              padding: "18px",
              borderRadius: "18px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background:
                "rgba(255,255,255,0.92)",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              padding: "18px",
              borderRadius: "18px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background:
                "rgba(255,255,255,0.92)",
            }}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              backgroundColor:
                "#111827",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "18px",
              fontSize: "18px",
              fontWeight: "900",
              cursor: "pointer",
              marginTop: "8px",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.2)",
            }}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

          {/* SIGNUP BUTTON */}
          <button
            onClick={() =>
              (window.location.href =
                "/signup")
            }
            style={{
              backgroundColor:
                "transparent",
              color: "white",
              border:
                "2px solid rgba(255,255,255,0.5)",
              padding: "16px",
              borderRadius: "18px",
              fontSize: "16px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Create New Account
          </button>

          {/* BACK HOME */}
          <button
            onClick={() =>
              (window.location.href =
                "/")
            }
            style={{
              background: "none",
              border: "none",
              color:
                "rgba(255,255,255,0.9)",
              marginTop: "8px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}