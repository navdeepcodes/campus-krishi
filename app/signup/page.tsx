"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSignup() {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password should be at least 6 characters"
      );

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

    alert(
      "Account created successfully 🌱"
    );

    window.location.href = "/";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#166534,#22c55e)",
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
          bottom: "-180px",
          left: "-120px",
        }}
      />

      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
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
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "26px",
              backgroundColor: "white",
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
              fontSize: "42px",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.15)",
            }}
          >
            🌱
          </div>
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "900",
            color: "white",
            marginBottom: "12px",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            textAlign: "center",
            color:
              "rgba(255,255,255,0.9)",
            fontSize: "16px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Join Campus Krishi and become
          part of a sustainable future 🌿
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
            onClick={handleSignup}
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
              ? "Creating Account..."
              : "Create Account"}
          </button>

          {/* LOGIN */}
          <button
            onClick={() =>
              (window.location.href =
                "/login")
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
            Already Have an Account?
          </button>

          {/* HOME */}
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