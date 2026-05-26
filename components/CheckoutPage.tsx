"use client";

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
  function placeFinalOrder() {
    if (!address) {
      alert(
        "Please enter delivery address 🌱"
      );

      return;
    }

    const newOrder = {
      items: cart,
      total: getTotal(),
      address,
      date: new Date(),
    };

    setOrders([
      ...orders,
      newOrder,
    ]);

    setCart([]);

    alert(
      "Order placed successfully 🌱"
    );

    setCurrentPage("home");
  }

  return (
    <div
      style={{
        maxWidth: "1450px",
        margin: "0 auto",
        padding: "50px 40px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: "40px",
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
            fontSize: "54px",
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
          }}
        >
          Complete your order for
          fresh organic vegetables 🌱
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.5fr 1fr",
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
          {/* DELIVERY */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "30px",
              padding: "34px",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              📍 Delivery Address
            </h2>

            <textarea
              placeholder="Enter your full delivery address..."
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
              style={{
                width: "100%",
                minHeight: "180px",
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
              }}
            />
          </div>

          {/* PAYMENT */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "30px",
              padding: "34px",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              💰 Payment Method
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "18px",
              }}
            >
              {[
                "Cash on Delivery",
                "UPI Payment",
                "Card Payment",
              ].map((method, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor:
                      "#f9fafb",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "18px",
                    padding:
                      "18px 20px",
                    display: "flex",
                    alignItems:
                      "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius:
                        "999px",
                      backgroundColor:
                        index === 0
                          ? "#16a34a"
                          : "#d1d5db",
                    }}
                  />

                  <span
                    style={{
                      fontWeight:
                        "700",
                      color:
                        "#111827",
                    }}
                  >
                    {method}
                  </span>
                </div>
              ))}
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
            position: "sticky",
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
              borderRadius: "20px",
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