"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const router = useRouter();

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
          "linear-gradient(135deg,#dcfce7,#f0fdf4,#f3f4f6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "460px",
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "50px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        {/* TOP */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "70px",
              marginBottom: "10px",
            }}
          >
            🌱
          </div>

          <h1
            style={{
              fontSize: "50px",
              fontWeight: "800",
              color: "#16a34a",
              marginBottom: "10px",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Join Campus Krishi and
            explore sustainable farming
          </p>
        </div>

        {/* FORM */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              padding: "18px",
              borderRadius: "16px",
              border:
                "2px solid #d1d5db",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              padding: "18px",
              borderRadius: "16px",
              border:
                "2px solid #d1d5db",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            onClick={handleSignup}
            disabled={loading}
            style={{
              background:
                "linear-gradient(to right,#16a34a,#22c55e)",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "16px",
              fontSize: "18px",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow:
                "0 10px 24px rgba(34,197,94,0.25)",
            }}
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#6b7280",
            fontSize: "16px",
          }}
        >
          Already have an account?{" "}

          <span
            onClick={() =>
              router.push("/login")
            }
            style={{
              color: "#16a34a",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </div>
      </div>
    </main>
  );
}