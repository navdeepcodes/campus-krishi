"use client";

export default function Navbar({
  currentPage,
  setCurrentPage,
  user,
  logout,
  isAdmin,
  cartCount,
}: any) {
  const navButtonStyle = (
    active: boolean
  ) => ({
    background: active
      ? "linear-gradient(135deg,#166534,#22c55e)"
      : "transparent",

    color: active
      ? "white"
      : "#374151",

    border: active
      ? "none"
      : "1px solid transparent",

    padding: "12px 18px",

    borderRadius: "14px",

    fontSize: "15px",

    fontWeight: "700",

    cursor: "pointer",

    transition: "all 0.25s ease",

    boxShadow: active
      ? "0 8px 20px rgba(34,197,94,0.25)"
      : "none",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,

        width: "100%",

        background:
          "rgba(255,255,255,0.82)",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(0,0,0,0.06)",

        padding: "18px 42px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        boxSizing: "border-box",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          flexShrink: 0,
        }}
        onClick={() =>
          setCurrentPage("home")
        }
      >
        <div
          style={{
            width: "54px",
            height: "54px",
            borderRadius: "18px",

            background:
              "linear-gradient(135deg,#166534,#22c55e)",

            display: "flex",

            justifyContent:
              "center",

            alignItems: "center",

            color: "white",

            fontSize: "24px",

            boxShadow:
              "0 10px 24px rgba(34,197,94,0.25)",
          }}
        >
          🌱
        </div>

        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "900",
              color: "#111827",
              margin: 0,
            }}
          >
            Campus Krishi
          </h1>

          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
              margin: 0,
              marginTop: "4px",
            }}
          >
            Sustainable Campus Farming
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",

          backgroundColor: "white",

          padding: "8px",

          borderRadius: "20px",

          boxShadow:
            "0 10px 25px rgba(0,0,0,0.05)",

          border:
            "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <button
          onClick={() =>
            setCurrentPage("home")
          }
          style={navButtonStyle(
            currentPage === "home"
          )}
        >
          Home
        </button>

        <button
          onClick={() =>
            setCurrentPage("vision")
          }
          style={navButtonStyle(
            currentPage === "vision"
          )}
        >
          Vision
        </button>

        <button
          onClick={() =>
            setCurrentPage("process")
          }
          style={navButtonStyle(
            currentPage === "process"
          )}
        >
          Process
        </button>

        <button
          onClick={() =>
            setCurrentPage("about")
          }
          style={navButtonStyle(
            currentPage === "about"
          )}
        >
          About
        </button>

        <button
          onClick={() =>
            setCurrentPage("cart")
          }
          style={{
            ...navButtonStyle(
              currentPage === "cart"
            ),

            position: "relative",
          }}
        >
          🛒 Cart

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-7px",
                right: "-7px",

                background:
                  "linear-gradient(135deg,#ef4444,#dc2626)",

                color: "white",

                fontSize: "11px",

                fontWeight: "800",

                width: "22px",

                height: "22px",

                borderRadius: "999px",

                display: "flex",

                justifyContent:
                  "center",

                alignItems: "center",

                boxShadow:
                  "0 6px 14px rgba(239,68,68,0.35)",
              }}
            >
              {cartCount}
            </span>
          )}
        </button>

        {isAdmin && (
          <button
            onClick={() =>
              setCurrentPage("admin")
            }
            style={{
              background:
                "linear-gradient(135deg,#111827,#374151)",

              color: "white",

              border: "none",

              padding: "12px 18px",

              borderRadius: "14px",

              fontSize: "15px",

              fontWeight: "800",

              cursor: "pointer",

              boxShadow:
                "0 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            👑 Admin
          </button>
        )}
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          flexShrink: 0,
        }}
      >
        {user ? (
          <>
            <button
              onClick={() =>
                setCurrentPage(
                  "profile"
                )
              }
              style={{
                backgroundColor:
                  "#ecfdf5",

                color: "#166534",

                border:
                  "1px solid #bbf7d0",

                padding:
                  "12px 18px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",

                transition:
                  "all 0.2s ease",
              }}
            >
              👤 Profile
            </button>

            <button
              onClick={logout}
              style={{
                background:
                  "linear-gradient(135deg,#ef4444,#dc2626)",

                color: "white",

                border: "none",

                padding:
                  "12px 18px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",

                boxShadow:
                  "0 10px 22px rgba(239,68,68,0.22)",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                (window.location.href =
                  "/login")
              }
              style={{
                backgroundColor:
                  "white",

                color: "#166534",

                border:
                  "1px solid #d1d5db",

                padding:
                  "12px 22px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",

                transition:
                  "all 0.2s ease",

                boxShadow:
                  "0 6px 14px rgba(0,0,0,0.04)",
              }}
            >
              Login
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "/signup")
              }
              style={{
                background:
                  "linear-gradient(135deg,#166534,#22c55e)",

                color: "white",

                border: "none",

                padding:
                  "12px 22px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",

                boxShadow:
                  "0 10px 24px rgba(34,197,94,0.25)",
              }}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}