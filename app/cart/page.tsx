"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.log(error);

        setCart([]);
      }
    }
  }, []);

  function updateCart(updatedCart: any[]) {
    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  function removeItem(index: number) {
    const updated = cart.filter(
      (_: any, i: number) =>
        i !== index
    );

    updateCart(updated);
  }

  function increaseQuantity(index: number) {
    const updated = [...cart];

    updated[index].quantity += 1;

    updateCart(updated);
  }

  function decreaseQuantity(index: number) {
    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;

      updateCart(updated);
    }
  }

  function getPrice(price: any) {
    return parseInt(
      String(price).replace(
        /[^\d]/g,
        ""
      )
    );
  }

  function getTotal() {
    let total = 0;

    cart.forEach((item) => {
      total +=
        getPrice(item.price) *
        item.quantity;
    });

    return total;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#f0fdf4,#f3f4f6)",
        padding: "50px 60px",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "54px",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            🛒 Your Cart
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
            }}
          >
            Fresh vegetables directly
            from Campus Krishi
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(to right,#16a34a,#22c55e)",
            color: "white",
            padding: "14px 24px",
            borderRadius: "16px",
            fontSize: "18px",
            fontWeight: "700",
            boxShadow:
              "0 8px 20px rgba(34,197,94,0.25)",
          }}
        >
          {cart.length} Items
        </div>
      </div>

      {cart.length === 0 ? (
        <div
          style={{
            backgroundColor:
              "white",
            borderRadius: "28px",
            padding: "80px 40px",
            textAlign: "center",
            boxShadow:
              "0 12px 35px rgba(0,0,0,0.06)",
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
              fontSize: "36px",
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
              fontSize: "18px",
              marginBottom: "30px",
            }}
          >
            Add some fresh organic
            vegetables to continue
          </p>

          <button
            onClick={() =>
              router.push("/")
            }
            style={{
              background:
                "linear-gradient(to right,#16a34a,#22c55e)",
              color: "white",
              border: "none",
              padding: "16px 28px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
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
              padding: "30px",
              boxShadow:
                "0 12px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#111827",
                marginBottom: "26px",
              }}
            >
              Cart Items
            </h2>

            {cart.map(
              (
                item: any,
                index: number
              ) => {
                const price =
                  getPrice(
                    item.price
                  );

                return (
                  <div
                    key={index}
                    style={{
                      display:
                        "grid",
                      gridTemplateColumns:
                        "100px 1.5fr 1fr 1fr auto",
                      gap: "20px",
                      alignItems:
                        "center",
                      padding:
                        "24px 0",
                      borderBottom:
                        "1px solid #f1f5f9",
                    }}
                  >
                    {/* IMAGE */}
                    <img
                      src={
                        item.image &&
                        item.image.trim() !==
                          ""
                          ? item.image
                          : "https://via.placeholder.com/300x300?text=Vegetable"
                      }
                      alt={
                        item.name
                      }
                      style={{
                        width:
                          "90px",
                        height:
                          "90px",
                        objectFit:
                          "cover",
                        borderRadius:
                          "18px",
                        border:
                          "1px solid #e5e7eb",
                      }}
                    />

                    {/* INFO */}
                    <div>
                      <h3
                        style={{
                          fontSize:
                            "24px",
                          fontWeight:
                            "800",
                          color:
                            "#111827",
                          marginBottom:
                            "8px",
                        }}
                      >
                        {
                          item.name
                        }
                      </h3>

                      <p
                        style={{
                          color:
                            "#16a34a",
                          fontWeight:
                            "700",
                          fontSize:
                            "18px",
                        }}
                      >
                        ₹{price}/kg
                      </p>
                    </div>

                    {/* QUANTITY */}
                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: "12px",
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
                            "38px",
                          height:
                            "38px",
                          borderRadius:
                            "10px",
                          border:
                            "1px solid #d1d5db",
                          backgroundColor:
                            "white",
                          fontSize:
                            "20px",
                          cursor:
                            "pointer",
                        }}
                      >
                        -
                      </button>

                      <span
                        style={{
                          fontSize:
                            "18px",
                          fontWeight:
                            "700",
                          minWidth:
                            "20px",
                          textAlign:
                            "center",
                        }}
                      >
                        {
                          item.quantity
                        }
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            index
                          )
                        }
                        style={{
                          width:
                            "38px",
                          height:
                            "38px",
                          borderRadius:
                            "10px",
                          border:
                            "1px solid #d1d5db",
                          backgroundColor:
                            "white",
                          fontSize:
                            "20px",
                          cursor:
                            "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* TOTAL */}
                    <div
                      style={{
                        fontSize:
                          "22px",
                        fontWeight:
                          "800",
                        color:
                          "#15803d",
                      }}
                    >
                      ₹
                      {price *
                        item.quantity}
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeItem(
                          index
                        )
                      }
                      style={{
                        backgroundColor:
                          "#ef4444",
                        color:
                          "white",
                        border:
                          "none",
                        padding:
                          "12px 16px",
                        borderRadius:
                          "12px",
                        fontWeight:
                          "700",
                        cursor:
                          "pointer",
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
                "0 12px 35px rgba(0,0,0,0.06)",
              position: "sticky",
              top: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "800",
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
                marginBottom:
                  "18px",
                fontSize: "18px",
                color: "#374151",
              }}
            >
              <span>Subtotal</span>

              <span>
                ₹{getTotal()}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "18px",
                fontSize: "18px",
                color: "#374151",
              }}
            >
              <span>Delivery</span>

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

            <hr
              style={{
                margin:
                  "26px 0",
                border:
                  "none",
                borderTop:
                  "1px solid #e5e7eb",
              }}
            />

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
                  fontSize: "20px",
                  fontWeight:
                    "700",
                }}
              >
                Total
              </span>

              <span
                style={{
                  fontSize: "36px",
                  fontWeight:
                    "800",
                  color:
                    "#15803d",
                }}
              >
                ₹{getTotal()}
              </span>
            </div>

            <button
              onClick={() =>
                router.push(
                  "/checkout"
                )
              }
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right,#16a34a,#22c55e)",
                color: "white",
                border: "none",
                padding: "18px",
                borderRadius:
                  "16px",
                fontSize: "18px",
                fontWeight: "800",
                cursor: "pointer",
                boxShadow:
                  "0 10px 24px rgba(34,197,94,0.25)",
              }}
            >
              💳 Proceed To Checkout
            </button>

            {/* EXTRA BOX */}
            <div
              style={{
                marginTop: "24px",
                backgroundColor:
                  "#f0fdf4",
                border:
                  "1px solid #bbf7d0",
                borderRadius:
                  "18px",
                padding: "18px",
              }}
            >
              <h3
                style={{
                  color: "#166534",
                  fontWeight:
                    "800",
                  marginBottom:
                    "10px",
                }}
              >
                🌱 Campus Krishi Promise
              </h3>

              <p
                style={{
                  color: "#166534",
                  lineHeight:
                    "1.8",
                  fontSize:
                    "14px",
                }}
              >
                Fresh, chemical-free
                produce grown
                sustainably by students
                inside the campus.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}