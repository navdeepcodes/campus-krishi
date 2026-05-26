"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<any[]>([]);
  const [address, setAddress] =
    useState("");

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  function getTotal() {
    let total = 0;

    cart.forEach((item) => {
      const price = parseInt(
        item.price.replace(/[^\d]/g, "")
      );

      total += price * item.quantity;
    });

    return total;
  }

  function placeOrder() {
    alert("Order placed successfully 🚀");

    localStorage.removeItem("cart");

    router.push("/");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "40px 60px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "500",
          marginBottom: "30px",
        }}
      >
        💳 Checkout
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              backgroundColor: "#15803d",
              color: "white",
              padding: "18px",
              fontSize: "26px",
            }}
          >
            Delivery Information
          </div>

          <div style={{ padding: "24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <input
                placeholder="Full Name"
                style={inputStyle}
              />

              <input
                placeholder="Phone Number"
                style={inputStyle}
              />
            </div>

            <textarea
              placeholder="Enter delivery address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              style={{
                ...inputStyle,
                height: "140px",
                marginBottom: "20px",
              }}
            />

            <textarea
              placeholder="Order Notes"
              style={{
                ...inputStyle,
                height: "100px",
                marginBottom: "30px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <button
                onClick={() =>
                  router.push("/cart")
                }
                style={{
                  backgroundColor:
                    "#e5e7eb",
                  border: "none",
                  padding: "16px 26px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ← Back To Cart
              </button>

              <button
                onClick={placeOrder}
                style={{
                  background:
                    "linear-gradient(to right,#16a34a,#22c55e)",
                  color: "white",
                  border: "none",
                  padding: "18px 32px",
                  borderRadius: "12px",
                  fontSize: "22px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                ✅ Place Order
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            height: "fit-content",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              backgroundColor: "#15803d",
              color: "white",
              padding: "18px",
              fontSize: "26px",
            }}
          >
            Order Summary
          </div>

          <div style={{ padding: "24px" }}>
            {cart.map((item, index) => {
              const price = parseInt(
                item.price.replace(/[^\d]/g, "")
              );

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "18px",
                    fontSize: "18px",
                  }}
                >
                  <span>
                    {item.name} x{" "}
                    {item.quantity}kg
                  </span>

                  <span>
                    ₹
                    {price *
                      item.quantity}
                  </span>
                </div>
              );
            })}

            <hr style={{ margin: "20px 0" }} />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "24px",
                fontSize: "32px",
                fontWeight: "700",
                color: "#15803d",
              }}
            >
              <span>Total:</span>

              <span>₹{getTotal()}</span>
            </div>

            <div
              style={{
                backgroundColor: "#dbeafe",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "12px",
                }}
              >
                📞 Payment Details
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Pay to this number:
                7349784480
              </p>

              <div
                style={{
                  backgroundColor: "white",
                  height: "280px",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent:
                    "center",
                  alignItems: "center",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                QR CODE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "18px",
} as React.CSSProperties;