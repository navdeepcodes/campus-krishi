"use client";

export default function VisionPage() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          padding: "50px 70px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "60px",
          }}
        >
          Our Vision & Mission
        </h1>

        {/* VISION SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          {/* LEFT */}
          <div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#15803d",
                marginBottom: "20px",
              }}
            >
              👁 Our Vision
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              To transform underutilized
              urban spaces into productive,
              inclusive, and
              climate-resilient ecosystems
              that empower students,
              educators, and communities.
            </p>
          </div>

          {/* RIGHT */}
          <div
            style={{
              backgroundColor: "#eaf5ee",
              height: "240px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "90px",
            }}
          >
            🌱
          </div>
        </div>

        {/* MISSION */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "50px",
            marginBottom: "50px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "30px",
            }}
          >
            🎯 Our Mission
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#4b5563",
              marginBottom: "30px",
            }}
          >
            Our mission is to:
          </p>

          <ul
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "22px",
              lineHeight: "2",
              color: "#374151",
            }}
          >
            <li>
              Build skills for future-ready
              engineers
            </li>

            <li>
              Promote sustainable food and
              farming systems
            </li>

            <li>
              Create living labs for
              education and innovation
            </li>

            <li>
              Strengthen community health
              and resilience
            </li>
          </ul>
        </div>

        {/* CORE VALUES */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "46px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "35px",
            }}
          >
            Our Core Values
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "❤️",
                title: "Passion",
                text: "We are passionate about fresh, healthy food and sustainable farming.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                text: "We conduct business with honesty and transparency in all our dealings.",
              },
              {
                icon: "💡",
                title: "Innovation",
                text: "We continuously innovate to improve our farming and delivery processes.",
              },
              {
                icon: "👥",
                title: "Community",
                text: "We believe in building strong relationships with farmers and customers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    "white",
                  borderRadius: "14px",
                  padding:
                    "32px 24px",
                  textAlign: "center",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "46px",
                    marginBottom:
                      "18px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom:
                      "14px",
                    color: "#1f2937",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#4b5563",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GET INVOLVED */}
        <div
          style={{
            backgroundColor: "#15803d",
            color: "white",
            borderRadius: "16px",
            padding: "55px",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "44px",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Get Involved
          </h2>

          <ul
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "24px",
              lineHeight: "2",
            }}
          >
            <li>Volunteer with us</li>

            <li>
              Take up internships and live
              projects
            </li>

            <li>
              Collaborate on research and
              innovation
            </li>

            <li>
              Support Bhooswarga through
              partnerships
            </li>
          </ul>
        </div>

        {/* COMMITMENT */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "50px",
            textAlign: "center",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#15803d",
              marginBottom: "24px",
            }}
          >
            Our Commitment
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#374151",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin:
                "0 auto 24px",
            }}
          >
            We are committed to
            transforming the way people
            access fresh vegetables while
            supporting local farmers and
            promoting sustainable
            agriculture.
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#6b7280",
              marginBottom: "30px",
            }}
          >
            Every vegetable we deliver
            represents our promise of
            quality, freshness, and care
            for both our customers and the
            environment.
          </p>

          <button
            style={{
              background:
                "linear-gradient(to right,#16a34a,#22c55e)",
              color: "white",
              border: "none",
              padding: "16px 34px",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            ✉ Join Our Mission
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#23364d",
          color: "white",
          padding: "55px 70px 25px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "35px",
          }}
        >
          {/* LEFT */}
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              🌱 Campus Krishi
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#d1d5db",
                lineHeight: "1.8",
              }}
            >
              Providing fresh,
              nutritious produce and
              hands-on sustainability
              education.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3
              style={{
                fontSize: "26px",
                marginBottom: "18px",
              }}
            >
              Quick Links
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "14px",
                fontSize: "18px",
                color: "#d1d5db",
              }}
            >
              <span>Home</span>
              <span>Contact Us</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3
              style={{
                fontSize: "26px",
                marginBottom: "18px",
              }}
            >
              Contact Info
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "14px",
                fontSize: "18px",
                color: "#d1d5db",
              }}
            >
              <span>
                📩 sumararaj.r@nmit.ac.in
              </span>

              <span>
                📞 7349784480
              </span>

              <span>
                📍 NMIT Campus,
                Bengaluru
              </span>
            </div>
          </div>
        </div>

        <hr
          style={{
            borderColor:
              "rgba(255,255,255,0.15)",
            marginBottom: "20px",
          }}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#d1d5db",
          }}
        >
          © 2024 Campus Krishi. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}