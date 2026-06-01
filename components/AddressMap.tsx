"use client";

export default function AddressMap({
  address,
}: {
  address: string;
}) {
  const openMaps = () => {
    if (!address.trim()) {
      alert("Please enter a delivery address first 📍");
      return;
    }

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openMaps}
      style={{
        display: "inline-block",
        background:
          "linear-gradient(135deg,#166534,#22c55e)",
        color: "white",
        padding: "16px 24px",
        borderRadius: "16px",
        fontWeight: "800",
        fontSize: "15px",
        border: "none",
        cursor: "pointer",
      }}
    >
      🗺️ Verify Address in Maps
    </button>
  );
}