"use client";

import { useState } from "react";

export default function ProductCard({
  name,
  price,
  image,
  addToCart,
}: any) {
  const [quantity, setQuantity] =
    useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow:
          "0 16px 40px rgba(0,0,0,0.06)",
        transition: "0.25s",
        border:
          "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          position: "relative",
          height: "240px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* BADGE */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            background:
              "linear-gradient(135deg,#166534,#22c55e)",
            color: "white",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "800",
            boxShadow:
              "0 8px 18px rgba(34,197,94,0.25)",
          }}
        >
          🌱 Organic
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: "26px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "900",
            color: "#111827",
            marginBottom: "10px",
          }}
        >
          {name}
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            color: "#6b7280",
            lineHeight: "1.8",
            fontSize: "14px",
            marginBottom: "22px",
          }}
        >
          Freshly harvested organic
          vegetables grown sustainably
          on campus.
        </p>

        {/* PRICE */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "26px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "5px",
              }}
            >
              Price
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "900",
                color: "#166534",
              }}
            >
              ₹{price}
            </h2>
          </div>

          <div
            style={{
              backgroundColor:
                "#dcfce7",
              color: "#166534",
              padding: "10px 15px",
              borderRadius: "16px",
              fontWeight: "800",
              fontSize: "13px",
            }}
          >
            Per Kg
          </div>
        </div>

        {/* QUANTITY */}
        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontWeight: "800",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Quantity
            </span>

            <span
              style={{
                color: "#166534",
                fontWeight: "900",
                fontSize: "14px",
              }}
            >
              {quantity} kg
            </span>
          </div>

          {/* QUANTITY BOX */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor:
                "#f8fafc",
              padding: "10px",
              borderRadius: "20px",
              border:
                "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            {/* MINUS */}
            <button
              onClick={
                decreaseQuantity
              }
              style={{
                minWidth: "46px",
                width: "46px",
                height: "46px",
                borderRadius: "16px",
                border: "none",
                backgroundColor:
                  "white",
                fontSize: "24px",
                fontWeight: "900",
                color: "#111827",
                cursor: "pointer",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.06)",
                flexShrink: 0,
              }}
            >
              −
            </button>

            {/* INPUT */}
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Number(
                    e.target.value
                  ) > 0
                    ? Number(
                        e.target
                          .value
                      )
                    : 1
                )
              }
              style={{
                flex: 1,
                width: "100%",
                minWidth: 0,
                height: "46px",
                borderRadius: "14px",
                border:
                  "1px solid #d1d5db",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "900",
                outline: "none",
                backgroundColor:
                  "white",
                color: "#111827",
                padding: "0 10px",
                boxSizing:
                  "border-box",
              }}
            />

            {/* PLUS */}
            <button
              onClick={
                increaseQuantity
              }
              style={{
                minWidth: "46px",
                width: "46px",
                height: "46px",
                borderRadius: "16px",
                border: "none",
                background:
                  "linear-gradient(135deg,#166534,#22c55e)",
                color: "white",
                fontSize: "24px",
                fontWeight: "900",
                cursor: "pointer",
                boxShadow:
                  "0 10px 20px rgba(34,197,94,0.25)",
                flexShrink: 0,
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            addToCart(
              {
                name,
                price,
                image,
              },
              quantity
            )
          }
          style={{
            width: "100%",
            background:
              "linear-gradient(135deg,#166534,#22c55e)",
            color: "white",
            border: "none",
            padding: "18px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "900",
            cursor: "pointer",
            boxShadow:
              "0 14px 28px rgba(34,197,94,0.25)",
          }}
        >
          🛒 Add To Cart
        </button>
      </div>
    </div>
  );
}
