"use client";

export default function CartPage({
  cart,
  removeFromCart,
  getTotal,
  placeOrder,
}: any) {
  return (
    <div
      style={{
        maxWidth: "1450px",
        margin: "0 auto",
        padding: "50px 40px 90px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "36px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "10px",
              letterSpacing: "-1px",
            }}
          >
            🛒 Your Cart
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Review your fresh organic
            vegetables before checkout
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color: "white",
            padding: "14px 22px",
            borderRadius: "16px",
            fontWeight: "700",
            fontSize: "15px",
            boxShadow:
              "0 10px 20px rgba(34,197,94,0.25)",
          }}
        >
          {cart.length} Items Added
        </div>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div
          style={{
            backgroundColor:
              "white",
            borderRadius: "28px",
            padding: "80px 40px",
            textAlign: "center",
            boxShadow:
              "0 10px 35px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "90px",
              marginBottom: "20px",
            }}
          >
            🥬
          </div>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "14px",
            }}
          >
            Your cart is empty
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Add fresh vegetables from
            Campus Krishi to continue
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "28px",
              padding: "28px",
              boxShadow:
                "0 12px 35px rgba(0,0,0,0.05)",
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
                  ) || 0;

                return (
                  <div
                    key={index}
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      alignItems:
                        "center",
                      gap: "18px",
                      padding:
                        "22px 0",
                      borderBottom:
                        index !==
                        cart.length -
                          1
                          ? "1px solid #f1f5f9"
                          : "none",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* PRODUCT */}
                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: "18px",
                        flex: 1,
                        minWidth:
                          "280px",
                      }}
                    >
                      <img
                        src={
                          item.image &&
                          item.image.trim() !==
                            ""
                            ? item.image
                            : "https://via.placeholder.com/300x300?text=Vegetable"
                        }
                        alt={
                          item.name ||
                          "Vegetable"
                        }
                        style={{
                          width:
                            "88px",
                          height:
                            "88px",
                          objectFit:
                            "cover",
                          borderRadius:
                            "20px",
                          border:
                            "1px solid #e5e7eb",
                          backgroundColor:
                            "#f9fafb",
                        }}
                      />

                      <div>
                        <h2
                          style={{
                            fontSize:
                              "20px",
                            fontWeight:
                              "800",
                            color:
                              "#111827",
                            marginBottom:
                              "6px",
                          }}
                        >
                          {
                            item.name
                          }
                        </h2>

                        <p
                          style={{
                            color:
                              "#16a34a",
                            fontWeight:
                              "700",
                            fontSize:
                              "15px",
                          }}
                        >
                          ₹
                          {
                            item.price
                          }
                          /kg
                        </p>

                        <div
                          style={{
                            marginTop:
                              "8px",
                            backgroundColor:
                              "#f0fdf4",
                            color:
                              "#166534",
                            padding:
                              "5px 10px",
                            borderRadius:
                              "999px",
                            fontSize:
                              "12px",
                            fontWeight:
                              "700",
                            display:
                              "inline-block",
                          }}
                        >
                          Organic Fresh
                        </div>
                      </div>
                    </div>

                    {/* QUANTITY */}
                    <div
                      style={{
                        textAlign:
                          "center",
                        minWidth:
                          "90px",
                      }}
                    >
                      <p
                        style={{
                          fontSize:
                            "13px",
                          color:
                            "#9ca3af",
                          marginBottom:
                            "5px",
                        }}
                      >
                        Quantity
                      </p>

                      <div
                        style={{
                          fontWeight:
                            "700",
                          color:
                            "#111827",
                          fontSize:
                            "16px",
                        }}
                      >
                        {
                          item.quantity
                        }{" "}
                        kg
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div
                      style={{
                        textAlign:
                          "center",
                        minWidth:
                          "100px",
                      }}
                    >
                      <p
                        style={{
                          fontSize:
                            "13px",
                          color:
                            "#9ca3af",
                          marginBottom:
                            "5px",
                        }}
                      >
                        Total
                      </p>

                      <div
                        style={{
                          fontWeight:
                            "800",
                          color:
                            "#15803d",
                          fontSize:
                            "20px",
                        }}
                      >
                        ₹
                        {price *
                          item.quantity}
                      </div>
                    </div>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() =>
                        removeFromCart(
                          index
                        )
                      }
                      style={{
                        background:
                          "linear-gradient(to right,#ef4444,#dc2626)",
                        color:
                          "white",
                        border:
                          "none",
                        padding:
                          "12px 18px",
                        borderRadius:
                          "14px",
                        fontWeight:
                          "700",
                        cursor:
                          "pointer",
                        boxShadow:
                          "0 8px 18px rgba(239,68,68,0.22)",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                );
              }
            )}
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "28px",
              padding: "30px",
              boxShadow:
                "0 12px 35px rgba(0,0,0,0.05)",
              position: "sticky",
              top: "100px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#111827",
                marginBottom: "28px",
              }}
            >
              Order Summary
            </h2>

            {/* SUMMARY */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "18px",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              <span>Subtotal</span>

              <span>
                ₹ {getTotal()}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "18px",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              <span>Delivery Fee</span>

              <span
                style={{
                  color: "#16a34a",
                  fontWeight:
                    "700",
                }}
              >
                FREE
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "18px",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              <span>Packaging</span>

              <span>₹0</span>
            </div>

            <hr
              style={{
                margin:
                  "24px 0",
                border:
                  "none",
                borderTop:
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
                marginBottom:
                  "30px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight:
                    "700",
                  color:
                    "#111827",
                }}
              >
                Total Amount
              </span>

              <span
                style={{
                  fontSize: "34px",
                  fontWeight:
                    "800",
                  color:
                    "#15803d",
                }}
              >
                ₹ {getTotal()}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={
                placeOrder
              }
              style={{
                width: "100%",
                background:
                  "linear-gradient(135deg,#16a34a,#22c55e)",
                color: "white",
                border: "none",
                padding:
                  "18px",
                borderRadius:
                  "16px",
                fontWeight:
                  "800",
                fontSize:
                  "16px",
                cursor:
                  "pointer",
                boxShadow:
                  "0 10px 22px rgba(34,197,94,0.3)",
                marginBottom:
                  "24px",
              }}
            >
              Proceed To Checkout →
            </button>

            {/* EXTRA INFO */}
            <div
              style={{
                background:
                  "linear-gradient(135deg,#f0fdf4,#dcfce7)",
                border:
                  "1px solid #bbf7d0",
                borderRadius:
                  "18px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight:
                    "800",
                  color:
                    "#166534",
                  marginBottom:
                    "12px",
                }}
              >
                🌱 Why Campus Krishi?
              </h3>

              <p
                style={{
                  color: "#166534",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}
              >
                Freshly harvested,
                chemical-free vegetables
                grown sustainably by
                students using
                eco-friendly farming
                practices.
              </p>
            </div>

            {/* CONTACT */}
            <div
              style={{
                marginTop: "20px",
                backgroundColor:
                  "#f9fafb",
                borderRadius:
                  "18px",
                padding: "18px",
                border:
                  "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight:
                    "700",
                  color:
                    "#111827",
                  marginBottom:
                    "10px",
                }}
              >
                📞 Cash On Delivery
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                Payment will be collected
                during delivery.
                <br />
                Support Number:
                <br />
                <span
                  style={{
                    color:
                      "#15803d",
                    fontWeight:
                      "700",
                  }}
                >
                  7349784480
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}