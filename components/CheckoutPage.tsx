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
      alert("Please enter address");
      return;
    }

    const newOrder = {
      items: cart,
      total: getTotal(),
      address,
      date: new Date(),
    };

    setOrders([...orders, newOrder]);

    alert(
      "Order placed successfully 🌱"
    );

    setCart([]);

    localStorage.removeItem("cart");

    setCurrentPage("home");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "50px",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "24px",
          padding: "40px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "30px",
            color: "#111827",
          }}
        >
          💳 Checkout
        </h1>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "14px",
              fontWeight: "700",
            }}
          >
            Delivery Address
          </h2>

          <textarea
            placeholder="Enter your address..."
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
            style={{
              width: "100%",
              minHeight: "120px",
              padding: "18px",
              borderRadius: "16px",
              border:
                "1px solid #d1d5db",
              fontSize: "16px",
              outline: "none",
              resize: "none",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor:
              "#f9fafb",
            padding: "24px",
            borderRadius: "18px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Order Summary
          </h2>

          {cart.map(
            (
              item: any,
              index: number
            ) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom:
                    "14px",
                }}
              >
                <span>
                  {item.name} ×{" "}
                  {item.quantity}
                </span>

                <span>
                  ₹
                  {parseInt(
                    String(
                      item.price
                    ).replace(
                      /[^\d]/g,
                      ""
                    )
                  ) *
                    item.quantity}
                </span>
              </div>
            )
          )}

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              fontSize: "28px",
              fontWeight: "800",
              color: "#15803d",
            }}
          >
            <span>Total</span>

            <span>
              ₹ {getTotal()}
            </span>
          </div>
        </div>

        <button
          onClick={placeFinalOrder}
          style={{
            width: "100%",
            background:
              "linear-gradient(to right,#16a34a,#22c55e)",
            color: "white",
            border: "none",
            padding: "18px",
            borderRadius: "16px",
            fontSize: "18px",
            fontWeight: "800",
            cursor: "pointer",
            boxShadow:
              "0 10px 24px rgba(34,197,94,0.25)",
          }}
        >
          🌱 Place Order
        </button>
      </div>
    </div>
  );
}