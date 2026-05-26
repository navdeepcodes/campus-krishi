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
      ? "#166534"
      : "transparent",

    color: active
      ? "white"
      : "#374151",

    border: "none",

    padding: "12px 18px",

    borderRadius: "14px",

    fontSize: "15px",

    fontWeight: "700",

    cursor: "pointer",

    transition: "0.2s",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,

        background:
          "rgba(255,255,255,0.75)",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(0,0,0,0.06)",

        padding: "18px 40px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
        }}
        onClick={() =>
          setCurrentPage("home")
        }
      >
        <div
          style={{
            width: "52px",
            height: "52px",
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
              marginBottom: "2px",
            }}
          >
            Campus Krishi
          </h1>

          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
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
                top: "-8px",
                right: "-8px",

                backgroundColor:
                  "#ef4444",

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

                border: "none",

                padding:
                  "12px 18px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",
              }}
            >
              👤 Profile
            </button>

            <button
              onClick={logout}
              style={{
                backgroundColor:
                  "#ef4444",

                color: "white",

                border: "none",

                padding:
                  "12px 18px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",
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
                  "12px 20px",

                borderRadius:
                  "14px",

                fontWeight: "800",

                cursor: "pointer",
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
                  "12px 20px",

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