"use client";

import { useState } from "react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  addToCart?: (
    product: any,
    quantity: number
  ) => void;
};

export default function ProductCard({
  name,
  price,
  image,
  addToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] =
    useState(1);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        padding: "18px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "20px",
        }}
      />

      {/* NAME */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        {name}
      </h2>

      {/* PRICE */}
      <p
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#16a34a",
          marginBottom: "20px",
        }}
      >
        ₹ {price}
      </p>

      {/* QUANTITY */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "#374151",
          }}
        >
          Quantity (kg)
        </label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Number(e.target.value)
            )
          }
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "2px solid #d1d5db",
            fontSize: "18px",
          }}
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={() =>
          addToCart?.(
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
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          padding: "18px",
          borderRadius: "16px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Add To Cart 🛒
      </button>
    </div>
  );
}