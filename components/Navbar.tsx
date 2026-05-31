"use client";

export default function Navbar({
  currentPage,
  setCurrentPage,
  isAdmin,
  cartCount,
}: any) {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  const navButtonStyle = (
    active: boolean
  ) => ({
    background: active
      ? "#16a34a"
      : "transparent",

    color: active
      ? "white"
      : "#374151",

    border: "none",

    padding: isMobile
      ? "10px 14px"
      : "12px 18px",

    borderRadius: "14px",

    fontSize: isMobile
      ? "13px"
      : "15px",

    fontWeight: "800",

    cursor: "pointer",

    transition: "0.2s",

    whiteSpace: "nowrap",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,

        background:
          "rgba(255,255,255,0.85)",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(0,0,0,0.06)",

        padding: isMobile
          ? "14px 16px"
          : "18px 40px",

        display: "flex",

        flexDirection: isMobile
          ? "column"
          : "row",

        gap: isMobile ? "16px" : "0",

        justifyContent:
          "space-between",

        alignItems: "center",
      }}
    >
      {/* LOGO */}
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
            width: isMobile
              ? "48px"
              : "56px",

            height: isMobile
              ? "48px"
              : "56px",

            borderRadius: "18px",

            background:
              "linear-gradient(135deg,#166534,#22c55e)",

            display: "flex",

            justifyContent:
              "center",

            alignItems: "center",

            color: "white",

            fontSize: isMobile
              ? "22px"
              : "26px",

            boxShadow:
              "0 10px 24px rgba(34,197,94,0.25)",
          }}
        >
          🌱
        </div>

        <div
          style={{
            width: isMobile ? "72px" : "110px",
            height: isMobile ? "72px" : "110px",
            background: "white",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          <img
            src="/nmit-logo.png"
            alt="NMIT"
            style={{
              width: "98%",
              height: "98%",
              objectFit: "contain",
            }}
          />
        </div>

        <div>
          <h1
            style={{
              fontSize: isMobile
                ? "24px"
                : "28px",

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

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",

          alignItems: "center",

          justifyContent:
            "center",

          flexWrap: "wrap",

          gap: "10px",

          backgroundColor:
            "rgba(255,255,255,0.9)",

          padding: "10px",

          borderRadius: "24px",

          boxShadow:
            "0 10px 30px rgba(0,0,0,0.06)",
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

        {/* ADMIN ONLY */}
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

              padding:
                "12px 18px",

              borderRadius:
                "14px",

              fontSize: isMobile
                ? "13px"
                : "15px",

              fontWeight: "900",

              cursor: "pointer",
            }}
          >
            👑 Admin
          </button>
        )}
      </div>
    </nav>
  );
}