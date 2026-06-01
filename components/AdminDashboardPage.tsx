"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function AdminDashboardPage({
  products,
  orders,
  totalRevenue,
  totalProducts,
  totalOrders,
}: any) {
  /* LOGIN STATE */
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  /* PRODUCT STATES */
  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [imageFile, setImageFile] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [liveOrders, setLiveOrders] =
    useState<any[]>(orders || []);

  const deliveredOrders =
    liveOrders.filter(
      (o) => o.status === "Delivered"
    );

  const pendingOrders =
    liveOrders.filter(
      (o) => o.status !== "Delivered"
    );

  const deliveredRevenue =
    deliveredOrders.reduce(
      (sum, o) =>
        sum + Number(o.total || 0),
      0
    );

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (data) {
        setLiveOrders(data);
      }
    }

    fetchOrders();

    const channel = supabase
      .channel("orders-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
        },
        () => fetchOrders()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const savedAdmin =
      localStorage.getItem(
        "adminAuthenticated"
      ) === "true";

    if (savedAdmin) {
      setIsLoggedIn(true);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* LOGIN FUNCTION */
  function handleLogin() {
    if (
      username === "krishi" &&
      password ===
        "sumaraj@29117"
    ) {
      localStorage.setItem(
        "adminAuthenticated",
        "true"
      );
      setIsLoggedIn(true);
    } else {
      alert(
        "Invalid username or password"
      );
    }
  }

  
  async function updateOrderStatus(
    orderId: any,
    status: string
  ) {
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (!error) {
      setLiveOrders((prev) =>
        prev.map((o) =>
          o.id === orderId
            ? { ...o, status }
            : o
        )
      );
    }
  }

  async function deleteOrder(
    orderId: any
  ) {
    const confirmed = window.confirm(
      "Delete this order permanently?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("id", orderId);

    if (!error) {
      setLiveOrders((prev) =>
        prev.filter(
          (o) => o.id !== orderId
        )
      );
    }
  }


  /* IMAGE UPLOAD */
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

  /* ADD PRODUCT */
  async function addProduct() {
    if (
      !name ||
      !price ||
      !stock ||
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
          stock: Number(stock),
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
      "Product added successfully 🌱"
    );

    window.location.reload();
  }

  /* DELETE PRODUCT */
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
      "Product deleted successfully"
    );

    window.location.reload();
  }

  /* LOGIN SCREEN */
  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent:
            "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#14532d,#22c55e)",
          padding: "20px",
          fontFamily:
            "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor:
              "white",
            borderRadius: "32px",
            padding: isMobile
              ? "30px"
              : "45px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            👑
          </div>

          <h1
            style={{
              fontSize: isMobile
                ? "34px"
                : "42px",
              fontWeight: "900",
              color: "#166534",
              marginBottom: "10px",
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "32px",
              lineHeight: "1.7",
            }}
          >
            Login to manage products,
            orders and platform data
          </p>

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "18px",
              borderRadius: "16px",
              border:
                "1px solid #d1d5db",
              outline: "none",
              fontSize: "16px",
              backgroundColor:
                "#f9fafb",
            }}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "26px",
              borderRadius: "16px",
              border:
                "1px solid #d1d5db",
              outline: "none",
              fontSize: "16px",
              backgroundColor:
                "#f9fafb",
            }}
          />

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              background:
                "linear-gradient(135deg,#166534,#22c55e)",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "18px",
              fontSize: "16px",
              fontWeight: "900",
              cursor: "pointer",
              boxShadow:
                "0 12px 24px rgba(34,197,94,0.25)",
            }}
          >
            Login To Dashboard
          </button>
        </div>
      </div>
    );
  }

  /* DASHBOARD */
  return (
    <div
      style={{
        padding: isMobile
          ? "20px"
          : "40px 50px",
        background:
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
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: isMobile
            ? "flex-start"
            : "center",
          flexDirection: isMobile
            ? "column"
            : "row",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: isMobile
                ? "38px"
                : "54px",
              fontWeight: "900",
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
            Manage products, orders
            and analytics
          </p>
        </div>

        <button
          onClick={() =>
            setIsLoggedIn(false)
          }
          style={{
            backgroundColor:
              "#ef4444",
            color: "white",
            border: "none",
            padding: "14px 22px",
            borderRadius: "14px",
            fontWeight: "800",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile
              ? "1fr"
              : "repeat(auto-fit,minmax(250px,1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        {[
          {
            title:
              "Total Revenue",
            value: `₹${deliveredRevenue}` ,
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
              "Delivered Orders",
            value:
              deliveredOrders.length,
            color: "#9333ea",
          },
          {
            title:
              "Pending Orders",
            value:
              pendingOrders.length,
            color: "#dc2626",
          },
        ].map((item, index) => (
          <div
            key={item.title ?? index}
            style={{
              backgroundColor:
                "white",
              padding: "28px",
              borderRadius:
                "24px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.06)",
              borderTop: `6px solid ${item.color}`,
            }}
          >
            <h2
              style={{
                fontSize: "16px",
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
                  "900",
                color:
                  "#111827",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>


      {/* ORDERS */}
      <div
        style={{
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "28px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "900",
            marginBottom: "24px",
          }}
        >
          📦 Orders
        </h2>

        {liveOrders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          liveOrders.map(
            (order: any, index: number) => (
              <div
                key={order.id ?? index}
                style={{
                  border: "1px solid #e5e7eb",
                  padding: "16px",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3>{order.customer_name}</h3>
                <p>📞 {order.phone}</p>
                <p>📧 {order.email}</p>
                <p>📍 {order.address}</p>
                <p>💬 {order.feedback}</p>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "12px",
                    borderRadius: "12px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <strong>
                    🛒 Ordered Items
                  </strong>

                  {Array.isArray(order.items) &&
                  order.items.length > 0 ? (
                    order.items.map(
                      (item: any, idx: number) => (
                        <div
                          key={idx}
                          style={{
                            marginTop: "6px",
                          }}
                        >
                          {item.name ||
                            item.title ||
                            item.productName ||
                            "Product"}
                          {" - Qty: "}
                          {item.quantity ||
                            item.qty ||
                            item.count ||
                            1}
                          {item.unit || " kg"}
                          {item.price
                            ? ` • ₹${item.price}`
                            : ""}
                        </div>
                      )
                    )
                  ) : (
                    <div
                      style={{
                        marginTop: "6px",
                      }}
                    >
                      No item details available
                    </div>
                  )}
                </div>

                <p>💰 ₹{order.total}</p>
                <p>
                  Status: {" "}
                  {order.status || "Pending"}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "12px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateOrderStatus(
                        order.id,
                        "Delivered"
                      )
                    }
                  >
                    ✓ Delivered
                  </button>

                  <button
                    onClick={() =>
                      updateOrderStatus(
                        order.id,
                        "Pending"
                      )
                    }
                  >
                    ⏳ Pending
                  </button>

                  <button
                    onClick={() =>
                      deleteOrder(order.id)
                    }
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>

      {/* ADD PRODUCT */}
      <div
        style={{
          backgroundColor:
            "white",
          padding: isMobile
            ? "24px"
            : "32px",
          borderRadius: "28px",
          marginBottom: "40px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: isMobile
              ? "28px"
              : "36px",
            fontWeight: "900",
            marginBottom: "26px",
            color: "#15803d",
          }}
        >
          Add Product 🥬
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            style={{
              padding: "18px",
              border:
                "1px solid #d1d5db",
              borderRadius:
                "16px",
              fontSize: "16px",
              outline: "none",
              backgroundColor:
                "#f9fafb",
            }}
          />

          <input
            placeholder="Price Per Kg"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            style={{
              padding: "18px",
              border:
                "1px solid #d1d5db",
              borderRadius:
                "16px",
              fontSize: "16px",
              outline: "none",
              backgroundColor:
                "#f9fafb",
            }}
          />
        </div>

        {/* IMAGE */}
        
          <input
            type="number"
            placeholder="Stock (kg)"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
            }}
          />

<input
          id="product-image-upload"
          type="file"
          accept="image/*,.jpg,.jpeg,.png,.webp"
          capture={undefined}
          onChange={(e: any) => {
            const file =
              e?.target?.files?.[0];

            if (!file) return;

            setImageFile(file);
          }}
          style={{
            width: "100%",
            padding: "16px",
            border:
              "1px dashed #9ca3af",
            borderRadius: "16px",
            backgroundColor:
              "#f9fafb",
            marginBottom: "24px",
            cursor: "pointer",
          }}
        />

        {/* PREVIEW */}
        {imageFile && (
          <img
            src={URL.createObjectURL(
              imageFile
            )}
            alt="Preview"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "18px",
              marginBottom: "24px",
            }}
          />
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
              "16px 30px",
            borderRadius:
              "16px",
            fontSize: "16px",
            fontWeight: "900",
            cursor: "pointer",
            width: isMobile
              ? "100%"
              : "auto",
          }}
        >
          {loading
            ? "Adding..."
            : "Add Product"}
        </button>
      </div>
    </div>
  );
}