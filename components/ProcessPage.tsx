"use client";

export default function ProcessPage() {
  const steps = [
    {
      image: "/image1.jpeg",
      title: "Campus Farm Development",
      description:
        "The Campus Krishi journey begins with developing dedicated cultivation spaces inside NMIT. Students and faculty work together to transform available land into productive agricultural zones.",
    },
    {
      image: "/image2.jpeg",
      title: "Crop Growth Monitoring",
      description:
        "Plants are regularly monitored for health, irrigation requirements, and sustainable growth. This hands-on approach gives students practical agricultural experience.",
    },
    {
      image: "/image3.jpeg",
      title: "Soil Preparation",
      description:
        "Healthy crops start with healthy soil. Land preparation, nutrient management, and field improvements ensure optimal growing conditions.",
    },
    {
      image: "/image4.jpg",
      title: "Fresh Organic Harvest",
      description:
        "Vegetables are harvested at peak freshness and quality before being prepared for distribution to the campus community.",
    },
    {
      image: "/image5.jpg",
      title: "Sustainable Cultivation",
      description:
        "Eco-friendly cultivation practices help maximize yield while reducing environmental impact and encouraging long-term sustainability.",
    },
  ];

  return (
    <div style={{ background: "#f8faf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "70px 24px" }}>
        <h1 style={{ textAlign: "center", fontSize: "56px", fontWeight: 800, color: "#14532d", marginBottom: "16px" }}>
          From Soil to Harvest
        </h1>

        <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 70px", color: "#4b5563", fontSize: "18px", lineHeight: 1.8 }}>
          Discover how Campus Krishi transforms ideas into sustainable agriculture through innovation,
          student participation, and environmentally responsible farming practices.
        </p>

        {steps.map((step, index) => (
          <div
            key={step.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
              marginBottom: "70px",
            }}
          >
            {index % 2 === 0 ? (
              <>
                <img src={step.image} alt={step.title} style={{ width: "100%", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.12)", objectFit: "cover" }} />
                <div>
                  <div style={{ color: "#16a34a", fontWeight: 700, marginBottom: "12px" }}>STEP {index + 1}</div>
                  <h2 style={{ fontSize: "40px", marginBottom: "18px", color: "#111827" }}>{step.title}</h2>
                  <p style={{ color: "#4b5563", fontSize: "18px", lineHeight: 1.9 }}>{step.description}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div style={{ color: "#16a34a", fontWeight: 700, marginBottom: "12px" }}>STEP {index + 1}</div>
                  <h2 style={{ fontSize: "40px", marginBottom: "18px", color: "#111827" }}>{step.title}</h2>
                  <p style={{ color: "#4b5563", fontSize: "18px", lineHeight: 1.9 }}>{step.description}</p>
                </div>
                <img src={step.image} alt={step.title} style={{ width: "100%", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.12)", objectFit: "cover" }} />
              </>
            )}
          </div>
        ))}

        <div
          style={{
            position: "relative",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <img
            src="/bhooswarga.jpeg"
            alt="Campus Farm"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
              display: "flex",
              alignItems: "flex-end",
              padding: "50px",
            }}
          >
            <div>
              <h2 style={{ color: "white", fontSize: "48px", marginBottom: "16px" }}>
                Growing a Better Tomorrow
              </h2>
              <p style={{ color: "white", maxWidth: "700px", lineHeight: 1.8, fontSize: "18px" }}>
                Campus Krishi is a living example of how sustainable agriculture, student innovation,
                and community engagement can create meaningful environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
