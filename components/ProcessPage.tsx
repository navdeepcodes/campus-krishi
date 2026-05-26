"use client";

export default function ProcessPage() {
  return (
    <div
      style={{
        padding: "60px 40px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "20px",
          }}
        >
          Our Process 🌱
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#6b7280",
            maxWidth: "850px",
            margin: "0 auto 60px auto",
            lineHeight: "1.8",
          }}
        >
          At Campus Krishi, we combine
          sustainable farming, student
          innovation, and environmental
          responsibility to create a
          greener future.
        </p>

        {/* PROCESS CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            marginBottom: "60px",
          }}
        >
          {/* CARD */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "54px",
                marginBottom: "18px",
              }}
            >
              🌿
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#15803d",
              }}
            >
              Sustainable Farming
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              We grow vegetables using
              eco-friendly farming methods,
              natural fertilizers, and
              efficient irrigation systems.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "54px",
                marginBottom: "18px",
              }}
            >
              🧑‍🎓
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#15803d",
              }}
            >
              Student Engagement
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Students actively participate
              in cultivation, harvesting,
              research, and sustainability
              projects for real-world
              learning.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "54px",
                marginBottom: "18px",
              }}
            >
              🚜
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#15803d",
              }}
            >
              Fresh Harvest
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Vegetables are harvested fresh
              every day and supplied directly
              to customers from the campus
              farm.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "18px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "54px",
                marginBottom: "18px",
              }}
            >
              ♻️
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "14px",
                color: "#15803d",
              }}
            >
              Eco Responsibility
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              We focus on waste reduction,
              composting, water conservation,
              and green innovation for a
              sustainable future.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#15803d,#22c55e)",
            padding: "50px",
            borderRadius: "24px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Growing a Better Tomorrow 🌍
          </h2>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Campus Krishi is more than just
            farming — it is a movement toward
            sustainability, innovation, and
            community-driven environmental
            impact.
          </p>
        </div>
      </div>
    </div>
  );
}