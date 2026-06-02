"use client";

export default function CartPage({
  cart,
  removeFromCart,
  getTotal,
  placeOrder,
  setCart,
}: any) {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  function increaseQuantity(
    index: number
  ) {
    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    setCart(updatedCart);
  }

  function decreaseQuantity(
    index: number
  ) {
    const updatedCart = [...cart];

    if (
      updatedCart[index].quantity > 1
    ) {
      updatedCart[index].quantity -= 1;

      setCart(updatedCart);
    }
  }

  return (
    <div
      style={{
        maxWidth: "1450px",
        margin: "0 auto",
        padding: isMobile
          ? "24px 16px"
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
          🛒 Your Cart
        </div>

        <h1
          style={{
            fontSize: isMobile
              ? "40px"
              : "56px",
            fontWeight: "900",
            color: "#111827",
            marginBottom: "14px",
          }}
        >
          Shopping Cart
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Review your fresh organic
          vegetables before checkout.
        </p>
      </div>

      {/* KRISHI INFO */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#14532d,#22c55e)",
          borderRadius: "34px",
          padding: isMobile
            ? "32px 24px"
            : "42px 50px",
          color: "white",
          marginBottom: "42px",
          display: "flex",
          flexDirection: isMobile
            ? "column"
            : "row",
          justifyContent:
            "space-between",
          alignItems: "center",
          gap: "30px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* BG EFFECT */}
        <div
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.06)",
            top: "-140px",
            right: "-120px",
          }}
        />

        <div
          style={{
            maxWidth: "700px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background:
                "rgba(255,255,255,0.15)",
              padding: "10px 18px",
              borderRadius: "999px",
              marginBottom: "18px",
              fontWeight: "800",
              fontSize: "13px",
            }}
          >
            🌱 About Bhooswarga
          </div>

          <h2
            style={{
              fontSize: isMobile
                ? "34px"
                : "50px",
              fontWeight: "900",
              marginBottom: "18px",
              lineHeight: "1.1",
            }}
          >
            Fresh From Campus Farms
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              fontSize: "17px",
              opacity: 0.95,
            }}
          >
            Bhooswarga is a
            student-led sustainable
            agriculture initiative
            focused on organic farming,
            eco-friendly practices,
            and farm-to-community
            fresh produce directly from
            NMIT campus farms.
          </p>
        </div>

        <div
          style={{
            fontSize: isMobile
              ? "110px"
              : "170px",
            zIndex: 2,
          }}
        >
          🌿
        </div>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div
          style={{
            backgroundColor:
              "white",
            borderRadius: "32px",
            padding: isMobile
              ? "50px 24px"
              : "90px",
            textAlign: "center",
            boxShadow:
              "0 16px 40px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "90px",
              marginBottom: "24px",
            }}
          >
            🛒
          </div>

          <h2
            style={{
              fontSize: isMobile
                ? "32px"
                : "40px",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Your cart is empty
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Add fresh vegetables to
            continue shopping 🌱
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "2fr 1fr",
            gap: "30px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
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

                const totalPrice =
                  price *
                  item.quantity;

                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        "white",
                      borderRadius:
                        "30px",
                      padding:
                        isMobile
                          ? "20px"
                          : "24px",
                      display: "flex",
                      flexDirection:
                        isMobile
                          ? "column"
                          : "row",
                      gap: "24px",
                      alignItems:
                        isMobile
                          ? "flex-start"
                          : "center",
                      boxShadow:
                        "0 14px 36px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: isMobile
                          ? "100%"
                          : "150px",
                        height:
                          isMobile
                            ? "220px"
                            : "150px",
                        borderRadius:
                          "24px",
                        objectFit:
                          "cover",
                      }}
                    />

                    {/* DETAILS */}
                    <div
                      style={{
                        flex: 1,
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display:
                            "inline-block",
                          background:
                            "#dcfce7",
                          color:
                            "#166534",
                          padding:
                            "6px 12px",
                          borderRadius:
                            "999px",
                          fontSize:
                            "12px",
                          fontWeight:
                            "800",
                          marginBottom:
                            "14px",
                        }}
                      >
                        🌱 Organic
                      </div>

                      <h2
                        style={{
                          fontSize:
                            isMobile
                              ? "28px"
                              : "32px",
                          fontWeight:
                            "900",
                          color:
                            "#111827",
                          marginBottom:
                            "10px",
                        }}
                      >
                        {item.name}
                      </h2>

                      <p
                        style={{
                          color:
                            "#6b7280",
                          fontSize:
                            "15px",
                          marginBottom:
                            "20px",
                          lineHeight:
                            "1.8",
                        }}
                      >
                        Fresh campus-grown
                        vegetables harvested
                        sustainably.
                      </p>

                      {/* PRICE + QUANTITY */}
                      <div
                        style={{
                          display:
                            "flex",
                          justifyContent:
                            "space-between",
                          alignItems:
                            isMobile
                              ? "flex-start"
                              : "center",
                          flexDirection:
                            isMobile
                              ? "column"
                              : "row",
                          gap: "20px",
                        }}
                      >
                        {/* PRICE */}
                        <div>
                          <h3
                            style={{
                              fontSize:
                                "32px",
                              fontWeight:
                                "900",
                              color:
                                "#166534",
                            }}
                          >
                            ₹
                            {
                              totalPrice
                            }
                          </h3>

                          <p
                            style={{
                              color:
                                "#6b7280",
                              marginTop:
                                "4px",
                              fontSize:
                                "14px",
                            }}
                          >
                            ₹{price} / kg
                          </p>
                        </div>

                        {/* QUANTITY CONTROLS */}
                        <div
                          style={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            gap: "14px",
                            backgroundColor:
                              "#f3f4f6",
                            padding:
                              "10px 14px",
                            borderRadius:
                              "18px",
                          }}
                        >
                          <button
                            onClick={() =>
                              decreaseQuantity(
                                index
                              )
                            }
                            style={{
                              width:
                                "44px",
                              height:
                                "44px",
                              borderRadius:
                                "14px",
                              border:
                                "none",
                              backgroundColor:
                                "white",
                              fontSize:
                                "22px",
                              fontWeight:
                                "900",
                              cursor:
                                "pointer",
                            }}
                          >
                            −
                          </button>

                          <div
                            style={{
                              minWidth:
                                "40px",
                              textAlign:
                                "center",
                              fontWeight:
                                "900",
                              fontSize:
                                "18px",
                            }}
                          >
                            {
                              item.quantity
                            }
                          </div>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                index
                              )
                            }
                            style={{
                              width:
                                "44px",
                              height:
                                "44px",
                              borderRadius:
                                "14px",
                              border:
                                "none",
                              background:
                                "linear-gradient(135deg,#166534,#22c55e)",
                              color:
                                "white",
                              fontSize:
                                "22px",
                              fontWeight:
                                "900",
                              cursor:
                                "pointer",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeFromCart(
                          index
                        )
                      }
                      style={{
                        backgroundColor:
                          "#fee2e2",
                        color:
                          "#dc2626",
                        border: "none",
                        width: "58px",
                        height: "58px",
                        borderRadius:
                          "18px",
                        fontSize:
                          "24px",
                        cursor:
                          "pointer",
                        fontWeight:
                          "900",
                        alignSelf:
                          isMobile
                            ? "flex-end"
                            : "center",
                      }}
                    >
                      ×
                    </button>
                  </div>
                );
              }
            )}
          </div>

          {/* RIGHT */}
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius: "32px",
              padding: "32px",
              boxShadow:
                "0 16px 40px rgba(0,0,0,0.05)",
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

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "18px",
                color: "#374151",
                fontSize: "17px",
              }}
            >
              <span>Total Items</span>

              <span
                style={{
                  fontWeight: "800",
                }}
              >
                {cart.length}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "18px",
                color: "#374151",
                fontSize: "17px",
              }}
            >
              <span>Delivery</span>

              <span
                style={{
                  color: "#16a34a",
                  fontWeight: "900",
                }}
              >
                FREE
              </span>
            </div>

            {/* PAYMENT INFO */}
            <div
              style={{
                backgroundColor:
                  "#f0fdf4",
                border:
                  "1px solid #bbf7d0",
                borderRadius:
                  "18px",
                padding: "18px",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  color: "#166534",
                  fontSize: "18px",
                  fontWeight: "900",
                  marginBottom: "10px",
                }}
              >
                💳 Online Payment Only
              </h3>

              <p
                style={{
                  color: "#15803d",
                  lineHeight: "1.7",
                  fontSize: "14px",
                }}
              >
                Cash on Delivery is not
                available. Secure online
                payment only.
              </p>
            </div>

            <hr
              style={{
                margin:
                  "28px 0",
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
                  fontSize: "24px",
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

            {/* CHECKOUT */}
            <button
              onClick={placeOrder}
              style={{
                width: "100%",
                background:
                  "linear-gradient(135deg,#166534,#22c55e)",
                color: "white",
                border: "none",
                padding: "18px",
                borderRadius:
                  "20px",
                fontSize: "17px",
                fontWeight: "900",
                cursor: "pointer",
                boxShadow:
                  "0 14px 28px rgba(34,197,94,0.25)",
              }}
            >
              🌱 Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}