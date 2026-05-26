"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminDashboardPage({
  products,
  orders,
  totalRevenue,
  totalProducts,
  totalOrders,
}: any) {
  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [imageFile, setImageFile] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  async function uploadImage(
    file: any
  ) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } =
      await supabase.storage
        .from("product-images")
        .upload(fileName, file);

    if (error) {
      console.log(error);
      return null;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    return publicUrl;
  }

  async function addProduct() {
    if (
      !name ||
      !price ||
      !imageFile
    ) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    const imageUrl =
      await uploadImage(
        imageFile
      );

    if (!imageUrl) {
      setLoading(false);

      alert(
        "Image upload failed"
      );

      return;
    }

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price,
          image: imageUrl,
        },
      ]);

    setLoading(false);

    if (error) {
      console.log(error);

      alert(
        "Failed to add product"
      );

      return;
    }

    alert(
      "Vegetable added successfully 🌱"
    );

    window.location.reload();
  }

  async function deleteProduct(
    id: any
  ) {
    const confirmDelete =
      confirm(
        "Delete this product?"
      );

    if (!confirmDelete)
      return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);

      alert(
        "Failed to delete"
      );

      return;
    }

    alert(
      "Product deleted"
    );

    window.location.reload();
  }

  return (
    <div
      style={{
        padding: "40px 50px",
        backgroundColor:
          "#f3f4f6",
        minHeight: "100vh",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            fontWeight: "800",
            color: "#111827",
            marginBottom: "10px",
          }}
        >
          👑 Admin Dashboard
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          Manage vegetables,
          customer orders and
          analytics
        </p>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        {[
          {
            title:
              "Total Revenue",
            value: `₹${totalRevenue}`,
            color: "#16a34a",
          },

          {
            title:
              "Total Products",
            value: totalProducts,
            color: "#2563eb",
          },

          {
            title:
              "Total Orders",
            value: totalOrders,
            color: "#ea580c",
          },

          {
            title:
              "Customers",
            value:
              orders.length,
            color: "#9333ea",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                "white",
              padding: "28px",
              borderRadius:
                "22px",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.06)",
              borderTop: `6px solid ${item.color}`,
            }}
          >
            <h2
              style={{
                fontSize: "17px",
                color: "#6b7280",
                marginBottom:
                  "14px",
              }}
            >
              {item.title}
            </h2>

            <h1
              style={{
                fontSize: "42px",
                fontWeight:
                  "800",
                color:
                  "#111827",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* ADD PRODUCT */}
      <div
        style={{
          backgroundColor:
            "white",
          padding: "32px",
          borderRadius: "24px",
          marginBottom: "40px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "26px",
            color: "#15803d",
          }}
        >
          Add Vegetable 🥬
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* NAME */}
          <input
            placeholder="Vegetable Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            style={{
              padding: "16px",
              border:
                "1px solid #d1d5db",
              borderRadius:
                "14px",
              fontSize: "16px",
              outline: "none",
            }}
          />

          {/* PRICE */}
          <input
            placeholder="Price per kg"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            style={{
              padding: "16px",
              border:
                "1px solid #d1d5db",
              borderRadius:
                "14px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* IMAGE PICKER */}
        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "700",
              color: "#374151",
            }}
          >
            Upload Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e: any) =>
              setImageFile(
                e.target.files[0]
              )
            }
            style={{
              width: "100%",
              padding: "14px",
              border:
                "1px dashed #9ca3af",
              borderRadius:
                "14px",
              backgroundColor:
                "#f9fafb",
              cursor: "pointer",
            }}
          />
        </div>

        {/* PREVIEW */}
        {imageFile && (
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <img
              src={URL.createObjectURL(
                imageFile
              )}
              alt="Preview"
              style={{
                width: "140px",
                height: "140px",
                objectFit:
                  "cover",
                borderRadius:
                  "18px",
                border:
                  "1px solid #e5e7eb",
              }}
            />
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={addProduct}
          disabled={loading}
          style={{
            background:
              "linear-gradient(to right,#16a34a,#22c55e)",
            color: "white",
            border: "none",
            padding:
              "16px 32px",
            borderRadius:
              "14px",
            fontSize: "16px",
            fontWeight: "800",
            cursor: "pointer",
            boxShadow:
              "0 8px 18px rgba(34,197,94,0.25)",
          }}
        >
          {loading
            ? "Adding..."
            : "Add Product"}
        </button>
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          backgroundColor:
            "white",
          padding: "32px",
          borderRadius: "24px",
          marginBottom: "40px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "28px",
            color: "#15803d",
          }}
        >
          Current Products 📦
        </h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {products.map(
            (
              product: any,
              index: number
            ) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "100px 1fr auto",
                  alignItems:
                    "center",
                  gap: "20px",
                  padding: "20px",
                  border:
                    "1px solid #e5e7eb",
                  borderRadius:
                    "18px",
                }}
              >
                <img
                  src={
                    product.image
                  }
                  alt={
                    product.name
                  }
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit:
                      "cover",
                    borderRadius:
                      "16px",
                  }}
                />

                <div>
                  <h2
                    style={{
                      fontSize:
                        "24px",
                      fontWeight:
                        "800",
                      marginBottom:
                        "8px",
                      color:
                        "#111827",
                    }}
                  >
                    {
                      product.name
                    }
                  </h2>

                  <p
                    style={{
                      fontSize:
                        "18px",
                      color:
                        "#16a34a",
                      fontWeight:
                        "700",
                    }}
                  >
                    ₹
                    {
                      product.price
                    }
                    /kg
                  </p>
                </div>

                <button
                  onClick={() =>
                    deleteProduct(
                      product.id
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
                      "14px 20px",
                    borderRadius:
                      "12px",
                    fontWeight:
                      "700",
                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* ORDERS */}
      <div
        style={{
          backgroundColor:
            "white",
          padding: "32px",
          borderRadius: "24px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "28px",
            color: "#15803d",
          }}
        >
          Customer Orders 🛒
        </h2>

        {orders.length === 0 ? (
          <p
            style={{
              fontSize: "18px",
              color: "#6b7280",
            }}
          >
            No orders yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {orders.map(
              (
                order: any,
                index: number
              ) => (
                <div
                  key={index}
                  style={{
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "18px",
                    padding:
                      "22px",
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "center",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize:
                          "24px",
                        fontWeight:
                          "800",
                        marginBottom:
                          "8px",
                        color:
                          "#111827",
                      }}
                    >
                      {
                        order.name
                      }
                    </h3>

                    <p
                      style={{
                        fontSize:
                          "16px",
                        color:
                          "#6b7280",
                        marginBottom:
                          "4px",
                      }}
                    >
                      Quantity:
                      {" "}
                      {
                        order.quantity
                      }
                      kg
                    </p>

                    {order.address && (
                      <p
                        style={{
                          fontSize:
                            "15px",
                          color:
                            "#6b7280",
                        }}
                      >
                        Address:
                        {" "}
                        {
                          order.address
                        }
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      fontSize:
                        "28px",
                      fontWeight:
                        "800",
                      color:
                        "#16a34a",
                    }}
                  >
                    ₹
                    {parseInt(
                      String(
                        order.price
                      ).replace(
                        /[^\d]/g,
                        ""
                      )
                    ) *
                      order.quantity}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}