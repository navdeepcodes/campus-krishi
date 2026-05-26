export default function AboutPage() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        {/* LEFT TEXT */}
        <div>
          <h1
            style={{
              fontSize: "64px",
              color: "#15803d",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Bhooswarga – Heaven on Earth
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.9",
              color: "#374151",
              marginBottom: "25px",
            }}
          >
            Bhooswarga (meaning Heaven on Earth)
            is an interdisciplinary urban
            sustainability initiative rooted in
            the belief that healthy soil,
            healthy food, and healthy
            communities are deeply connected.
          </p>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.9",
              color: "#374151",
              marginBottom: "25px",
            }}
          >
            Started as a small campus pilot at
            <strong>
              {" "}
              Nitte Meenakshi Institute of
              Technology (NMIT), Bengaluru
            </strong>
            , Bhooswarga has grown into a
            vibrant living laboratory where
            students, faculty, and volunteers
            come together to practice
            sustainable farming,
            climate-resilient design, and
            community-centric innovation.
          </p>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.9",
              color: "#374151",
            }}
          >
            What began as a garden is now
            evolving into a city-scale model
            for urban farming, education, and
            climate action.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
            alt="farm"
            style={{
              width: "100%",
              borderRadius: "24px",
              objectFit: "cover",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </div>

      {/* TEAM TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "64px",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        Our Team
      </h1>

      {/* TEAM SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {/* DR SUMARAJ */}
        <div
          style={{
            backgroundColor: "white",
            padding: "35px",
            borderRadius: "24px",
            textAlign: "center",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Dr Sumaraj"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          <h2
            style={{
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Dr. Sumaraj
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#4b5563",
              marginBottom: "25px",
              lineHeight: "1.6",
            }}
          >
            Assistant Professor, Department of
            Civil Engineering, NMIT
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#374151",
            }}
          >
            Dr. Sumaraj is an Assistant
            Professor in the Department of
            Civil Engineering at Nitte
            Meenakshi Institute of Technology,
            Bengaluru. She holds an M.Tech
            from IIT Kharagpur and a PhD from
            the University of Auckland, New
            Zealand.
          </p>
        </div>

        {/* CORE TEAM */}
        <div
          style={{
            backgroundColor: "white",
            padding: "35px",
            borderRadius: "24px",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#15803d",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Core Team
          </h2>

          {/* MEMBER 1 */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "45px",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Byre Gowda"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              Byre Gowda
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              3rd year Electronics and
              Communication Engineering student
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              Passionate about integrating IoT,
              AI, and energy-efficient systems
              into smart farming and sustainable
              agriculture.
            </p>
          </div>

          {/* MEMBER 2 */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "45px",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Vishwadeep"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              Vishwadeep K
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              3rd year Civil Engineering
              student
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              Focuses on sustainable
              infrastructure and smart
              construction practices using
              modern engineering solutions.
            </p>
          </div>

          {/* MEMBER 3 */}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Abhishek"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              Abhishek R
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              2nd year Civil Engineering
              student
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              Interested in façade design,
              green infrastructure, and
              environmentally responsible
              construction systems.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div
        style={{
          marginTop: "60px",
          background:
            "linear-gradient(135deg,#166534,#15803d)",
          padding: "45px",
          borderRadius: "28px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          Contact Us 📩
        </h2>

        <div
          style={{
            fontSize: "22px",
            lineHeight: "2",
          }}
        >
          <p>
            Email: sumaraj.r@nmit.ac.in
          </p>

          <p>Phone: 7349784480</p>

          <p>
            Location: NMIT Campus, Bengaluru
          </p>
        </div>
      </div>
    </div>
  );
}