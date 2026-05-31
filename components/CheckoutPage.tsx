"use client";

import { supabase } from "../lib/supabase";


export default function CheckoutPage({
  cart,
  getTotal,
  address,
  setAddress,
  setCurrentPage,
  setCart,
  orders,
  setOrders,
}: any) {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  async function placeFinalOrder() {
    const customerName =
      (
        document.getElementById(
          "customerName"
        ) as HTMLInputElement
      )?.value || "";

    const phone =
      (
        document.getElementById(
          "customerPhone"
        ) as HTMLInputElement
      )?.value || "";

    const email =
      (
        document.getElementById(
          "customerEmail"
        ) as HTMLInputElement
      )?.value || "";

    const feedback =
      (
        document.getElementById(
          "customerFeedback"
        ) as HTMLTextAreaElement
      )?.value || "";

    if (
      !customerName ||
      !phone ||
      !email ||
      !address
    ) {
      alert(
        "Please fill all delivery details 🌱"
      );

      return;
    }

    const orderPayload = {
      customer_name: customerName,
      phone,
      email,
      address,
      feedback,
      items: cart,
      total: getTotal(),
      status: "Pending",
    };

    const { data, error } =
      await supabase
        .from("orders")
        .insert([orderPayload])
        .select();

    if (error) {
      console.error(error);

      alert(
        "Failed to place order. Please try again."
      );

      return;
    }

    setOrders([
      ...orders,
      ...(data || []),
    ]);

    setCart([]);

    alert(
      "🌱 Order placed successfully!\n\nIMPORTANT:\n\n1. Download the QR code.\n2. Make payment ONLY after receiving your order.\n3. Keep the QR ready for payment after delivery.\n\nThank you for shopping with us!"
    );

    setCurrentPage("home");
  }

  return (
    <div
      style={{
        maxWidth: "1450px",
        margin: "0 auto",
        padding: isMobile
          ? "30px 16px"
          : "50px 40px",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: "40px",
          textAlign: isMobile
            ? "center"
            : "left",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background:
              "#dcfce7",
            color: "#166534",
            padding: "10px 18px",
            borderRadius:
              "999px",
            fontWeight: "700",
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          💳 Secure Checkout
        </div>

        <h1
          style={{
            fontSize: isMobile
              ? "42px"
              : "58px",
            fontWeight: "900",
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          Checkout
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Complete your order for
          fresh organic vegetables 🌱
        </p>
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile
              ? "1fr"
              : "1.5fr 1fr",
          gap: "30px",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* CUSTOMER DETAILS */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "30px",
              padding: isMobile
                ? "24px"
                : "34px",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              👤 Customer Details
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {/* NAME */}
              <input
                id="customerName"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius:
                    "18px",
                  border:
                    "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor:
                    "#f9fafb",
                  boxSizing:
                    "border-box",
                }}
              />

              {/* PHONE */}
              <input
                id="customerPhone"
                type="tel"
                placeholder="Mobile Number"
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius:
                    "18px",
                  border:
                    "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor:
                    "#f9fafb",
                  boxSizing:
                    "border-box",
                }}
              />
              {/* EMAIL */}
              <input
                id="customerEmail"
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor: "#f9fafb",
                  boxSizing: "border-box",
                }}
              />

            </div>
          </div>

          {/* ADDRESS */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "30px",
              padding: isMobile
                ? "24px"
                : "34px",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              📍 Delivery Address
            </h2>

            <textarea
              placeholder="Enter complete delivery address..."
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
              style={{
                width: "100%",
                minHeight: "160px",
                padding: "20px",
                borderRadius:
                  "20px",
                border:
                  "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                resize: "none",
                backgroundColor:
                  "#f9fafb",
                boxSizing:
                  "border-box",
                marginBottom: "18px",
              }}
            />

            <button
              onClick={() => {
                if (!address.trim()) {
                  alert("Please enter a delivery address first 📍");
                  return;
                }
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
                  "_blank"
                );
              }}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#166534,#22c55e)",
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

            <textarea
              id="customerFeedback"
              placeholder="Review, feedback or delivery instructions..."
              style={{
                width: "100%",
                minHeight: "120px",
                padding: "20px",
                borderRadius: "20px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                resize: "none",
                backgroundColor: "#f9fafb",
                boxSizing: "border-box",
                marginTop: "18px",
              }}
            />
          </div>

          {/* PAYMENT */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "30px",
              padding: isMobile
                ? "24px"
                : "34px",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              💳 Payment After Delivery
            </h2>

            {/* QR IMAGE */}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src="/phonepe-qr.jpeg"
                alt="PhonePe QR"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  borderRadius:
                    "20px",
                  marginBottom: "20px",
                  boxShadow:
                    "0 12px 28px rgba(0,0,0,0.08)",
                }}
              />

              <h3
                style={{
                  fontSize: "20px",
                  color: "#111827",
                  marginBottom: "10px",
                  fontWeight: "900",
                }}
              >
                Download QR & Pay After Delivery
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.8",
                  marginBottom: "16px",
                }}
              >
                Scan the QR code using
                PhonePe, Google Pay or
                any UPI app to complete
                your payment.
              </p>

              <div
                style={{
                  backgroundColor:
                    "#f0fdf4",
                  border:
                    "1px solid #bbf7d0",
                  padding: "16px",
                  borderRadius:
                    "18px",
                  display:
                    "inline-block",
                }}
              >
                <p
                  style={{
                    color: "#166534",
                    fontWeight: "900",
                    marginBottom: "8px",
                  }}
                >
                  📞 Payment Contact
                </p>

                <p
                  style={{
                    color: "#15803d",
                    fontSize: "18px",
                    fontWeight: "800",
                  }}
                >
                  +91 73497 84480
                </p>
              </div>

              {/* DOWNLOAD BUTTON */}
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <a
                  href="/phonepe-qr.jpeg"
                  download
                  style={{
                    display:
                      "inline-block",
                    textDecoration:
                      "none",
                    background:
                      "#111827",
                    color: "white",
                    padding:
                      "16px 24px",
                    borderRadius:
                      "16px",
                    fontWeight: "800",
                  }}
                >
                  ⬇️ Download QR
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            backgroundColor:
              "white",
            borderRadius: "30px",
            padding: "32px",
            boxShadow:
              "0 14px 40px rgba(0,0,0,0.05)",
            position: isMobile
              ? "relative"
              : "sticky",
            top: "110px",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "28px",
            }}
          >
            Order Summary
          </h2>

          {/* ITEMS */}
          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "18px",
              marginBottom: "30px",
            }}
          >
            {cart.map(
              (
                item: any,
                index: number
              ) => {
                const price =
                  parseInt(
                    String(
                      item.price
                    ).replace(
                      /[^\d]/g,
                      ""
                    )
                  );

                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems:
                        "center",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize:
                            "17px",
                          fontWeight:
                            "800",
                          color:
                            "#111827",
                          marginBottom:
                            "4px",
                        }}
                      >
                        {item.name}
                      </h3>

                      <p
                        style={{
                          fontSize:
                            "14px",
                          color:
                            "#6b7280",
                        }}
                      >
                        Qty:{" "}
                        {
                          item.quantity
                        }
                      </p>
                    </div>

                    <span
                      style={{
                        fontWeight:
                          "800",
                        color:
                          "#166534",
                      }}
                    >
                      ₹
                      {price *
                        item.quantity}
                    </span>
                  </div>
                );
              }
            )}
          </div>

          <hr
            style={{
              margin:
                "26px 0",
              border:
                "1px solid #e5e7eb",
            }}
          />

          {/* TOTAL */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#111827",
              }}
            >
              Total
            </span>

            <span
              style={{
                fontSize: "38px",
                fontWeight: "900",
                color: "#166534",
              }}
            >
              ₹{getTotal()}
            </span>
          </div>

          {/* NOTE */}
          <div
            style={{
              backgroundColor:
                "#f0fdf4",
              border:
                "1px solid #bbf7d0",
              padding: "18px",
              borderRadius:
                "18px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                color: "#166534",
                lineHeight: "1.7",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              🌱 Your order will be
              updated in the admin
              dashboard automatically
              after placing the order.
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={placeFinalOrder}
            style={{
              width: "100%",
              background:
                "linear-gradient(135deg,#166534,#22c55e)",
              color: "white",
              border: "none",
              padding: "20px",
              borderRadius:
                "20px",
              fontSize: "18px",
              fontWeight: "900",
              cursor: "pointer",
              boxShadow:
                "0 12px 24px rgba(34,197,94,0.25)",
            }}
          >
            🌱 Place Order
          </button>
        </div>
      </div>
    </div>
  );
}