"use client";

export default function Navbar({
  currentPage,
  setCurrentPage,
  user,
  logout,
  isAdmin,
  cartCount,
}: any) {
  function navButton(page: string) {
    return {
      background: "none",
      border: "none",
      color:
        currentPage === page
          ? "#ffffff"
          : "#d1d5db",
      fontSize: "18px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.2s",
    };
  }

  return (
    <div
      style={{
        backgroundColor: "#15803d",
        padding: "18px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* LOGO */}
        <h1
          style={{
            color: "white",
            fontSize: "42px",
            fontWeight: "700",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() =>
            setCurrentPage("home")
          }
        >
          🌱 Campus Krishi
        </h1>

        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <button
            onClick={() =>
              setCurrentPage("home")
            }
            style={navButton("home")}
          >
            Home
          </button>

          <button
            onClick={() =>
              setCurrentPage("about")
            }
            style={navButton("about")}
          >
            About Us
          </button>

          <button
            onClick={() =>
              setCurrentPage("vision")
            }
            style={navButton("vision")}
          >
            Vision & Mission
          </button>

          <button
            onClick={() =>
              setCurrentPage("process")
            }
            style={navButton("process")}
          >
            Our Process
          </button>

          <button
            onClick={() =>
              setCurrentPage("contact")
            }
            style={navButton("contact")}
          >
            Contact
          </button>

          <button
            onClick={() =>
              setCurrentPage("cart")
            }
            style={{
              ...navButton("cart"),
              position: "relative",
            }}
          >
            🛒 Cart

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "-18px",
                  backgroundColor:
                    "#ef4444",
                  color: "white",
                  borderRadius: "999px",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() =>
              setCurrentPage("profile")
            }
            style={navButton("profile")}
          >
            Profile
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* EMAIL */}
        <div
          style={{
            backgroundColor:
              "rgba(255,255,255,0.15)",
            color: "white",
            padding: "12px 18px",
            borderRadius: "12px",
            fontWeight: "500",
            fontSize: "15px",
            backdropFilter: "blur(6px)",
          }}
        >
          {user?.email}
        </div>

        {/* ADMIN */}
        {isAdmin && (
          <div
            style={{
              backgroundColor:
                "#facc15",
              color: "#111827",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            Admin 👑
          </div>
        )}

        {/* LOGOUT */}
        <button
          onClick={logout}
          style={{
            backgroundColor:
              "#ef4444",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}