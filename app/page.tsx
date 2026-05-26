"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import AboutPage from "../components/AboutPage";
import VisionPage from "../components/VisionPage";
import ProcessPage from "../components/ProcessPage";
import AdminDashboardPage from "../components/AdminDashboardPage";
import CheckoutPage from "../components/CheckoutPage";
import CartPage from "../components/CartPage";

export default function HomePage() {
  const [user, setUser] =
    useState<any>(null);

  const [products, setProducts] =
    useState<any[]>([]);

  const [cart, setCart] = useState<any[]>(
    []
  );

  const [orders, setOrders] =
    useState<any[]>([]);

  const [currentPage, setCurrentPage] =
    useState("home");

  const [address, setAddress] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const adminEmails = [
    "navdeeptrox@gmail.com",
  ];

  useEffect(() => {
    checkUser();
    fetchProducts();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user || null);

    setLoading(false);
  }

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data || []);
  }

  async function logout() {
    await supabase.auth.signOut();

    alert("Logged out successfully 🌱");

    window.location.href = "/";
  }

  function addToCart(product: any) {
    if (!user) {
      alert(
        "Please login to add items to cart 🌱"
      );

      return;
    }

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];

      updatedCart[existingIndex].quantity +=
        product.quantity || 1;

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity:
            product.quantity || 1,
        },
      ]);
    }
  }

  function removeFromCart(index: number) {
    const updatedCart = cart.filter(
      (_item, i) => i !== index
    );

    setCart(updatedCart);
  }

  function getTotal() {
    let total = 0;

    cart.forEach((item) => {
      const price = parseInt(
        String(item.price).replace(
          /[^\d]/g,
          ""
        )
      );

      total +=
        price * (item.quantity || 1);
    });

    return total;
  }

  function placeOrder() {
    if (!user) {
      alert(
        "Please login to continue checkout 🌱"
      );

      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setCurrentPage("checkout");
  }

  const filteredProducts =
    products.filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  const isAdmin =
    user &&
    adminEmails.includes(user.email);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(to bottom,#f8fafc,#eefbf3)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px 60px",
            borderRadius: "30px",
            boxShadow:
              "0 16px 40px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "18px",
            }}
          >
            🌱
          </div>

          <h1
            style={{
              fontSize: "32px",
              color: "#166534",
              marginBottom: "10px",
              fontWeight: "900",
            }}
          >
            Loading Campus Krishi
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            Preparing fresh organic
            experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#f8fafc,#eefbf3)",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        logout={logout}
        isAdmin={isAdmin}
        cartCount={cart.length}
      />

      {/* HOME */}
      {currentPage === "home" && (
        <div>
          {/* HERO */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#14532d,#22c55e)",
              minHeight: "560px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              padding: "90px 80px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* BACKGROUND EFFECTS */}
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.06)",
                top: "-180px",
                right: "-120px",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.05)",
                bottom: "-100px",
                left: "-80px",
              }}
            />

            {/* LEFT */}
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
                  padding: "12px 22px",
                  borderRadius: "999px",
                  marginBottom: "28px",
                  backdropFilter:
                    "blur(10px)",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                🌱 Sustainable Campus
                Agriculture
              </div>

              <h1
                style={{
                  fontSize: "76px",
                  lineHeight: "1",
                  fontWeight: "900",
                  marginBottom: "28px",
                }}
              >
                Campus Krishi
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.9",
                  maxWidth: "620px",
                  marginBottom: "40px",
                  opacity: 0.95,
                }}
              >
                Fresh organic produce,
                student-driven farming,
                sustainability innovation,
                and climate-conscious
                agriculture directly from
                campus farms.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() =>
                    setCurrentPage(
                      "vision"
                    )
                  }
                  style={{
                    backgroundColor:
                      "white",
                    color: "#166534",
                    border: "none",
                    padding:
                      "18px 34px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    cursor: "pointer",
                    fontSize: "15px",
                    boxShadow:
                      "0 12px 28px rgba(0,0,0,0.18)",
                  }}
                >
                  🌿 Explore Vision
                </button>

                <button
                  onClick={() =>
                    setCurrentPage(
                      "process"
                    )
                  }
                  style={{
                    background:
                      "transparent",
                    color: "white",
                    border:
                      "2px solid rgba(255,255,255,0.7)",
                    padding:
                      "18px 34px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Learn Process
                </button>

                {!user && (
                  <button
                    onClick={() =>
                      (window.location.href =
                        "/signup")
                    }
                    style={{
                      background:
                        "#111827",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 34px",
                      borderRadius:
                        "18px",
                      fontWeight: "900",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    Create Account
                  </button>
                )}

                {isAdmin && (
                  <button
                    onClick={() =>
                      setCurrentPage(
                        "admin"
                      )
                    }
                    style={{
                      background:
                        "linear-gradient(135deg,#111827,#374151)",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 34px",
                      borderRadius:
                        "18px",
                      fontWeight: "900",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    👑 Admin Dashboard
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{
                fontSize: "180px",
                zIndex: 2,
                filter:
                  "drop-shadow(0 12px 20px rgba(0,0,0,0.2))",
              }}
            >
              🌿
            </div>
          </div>

          {/* MAIN */}
          <div
            style={{
              maxWidth: "1450px",
              margin: "0 auto",
              padding: "90px 40px",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "50px",
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
                  fontWeight: "800",
                  marginBottom: "24px",
                }}
              >
                🥬 Fresh Organic Produce
              </div>

              <h1
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Today's Fresh Vegetables
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                  lineHeight: "1.8",
                }}
              >
                Freshly harvested from
                our sustainable campus
                farms.
              </p>
            </div>

            {/* SEARCH */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "center",
                marginBottom: "60px",
              }}
            >
              <input
                type="text"
                placeholder="Search vegetables..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                style={{
                  width: "520px",
                  padding:
                    "18px 24px",
                  borderRadius:
                    "20px",
                  border:
                    "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor:
                    "white",
                  boxShadow:
                    "0 12px 28px rgba(0,0,0,0.06)",
                }}
              />
            </div>

            {/* PRODUCTS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(300px,1fr))",
                gap: "30px",
              }}
            >
              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    name={
                      product.name
                    }
                    price={
                      product.price
                    }
                    image={
                      product.image &&
                      product.image.trim() !==
                        ""
                        ? product.image
                        : "https://via.placeholder.com/300x300?text=Vegetable"
                    }
                    addToCart={(
                      item: any,
                      quantity: number
                    ) =>
                      addToCart({
                        ...item,
                        quantity,
                      })
                    }
                  />
                )
              )}
            </div>

            {/* FEATURES */}
            <div
              style={{
                marginTop: "120px",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
                gap: "30px",
              }}
            >
              {[
                {
                  icon: "🌱",
                  title:
                    "Sustainable Farming",
                  desc:
                    "Organic farming with climate-resilient agricultural methods.",
                },
                {
                  icon: "👨‍🎓",
                  title:
                    "Student Innovation",
                  desc:
                    "Hands-on sustainability and agricultural innovation projects.",
                },
                {
                  icon: "🤝",
                  title:
                    "Community Impact",
                  desc:
                    "Building awareness and collaboration for a greener future.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor:
                      "white",
                    padding: "40px",
                    borderRadius:
                      "30px",
                    textAlign:
                      "center",
                    boxShadow:
                      "0 14px 36px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "64px",
                      marginBottom:
                        "22px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight:
                        "900",
                      color:
                        "#111827",
                      marginBottom:
                        "14px",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      color:
                        "#6b7280",
                      lineHeight:
                        "1.9",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <footer
            style={{
              marginTop: "100px",
              background:
                "linear-gradient(135deg,#0f172a,#1e293b)",
              color: "white",
              padding:
                "70px 40px",
            }}
          >
            <div
              style={{
                maxWidth: "1450px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "40px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "34px",
                    fontWeight: "900",
                    marginBottom:
                      "18px",
                  }}
                >
                  🌱 Campus Krishi
                </h2>

                <p
                  style={{
                    color:
                      "#cbd5e1",
                    lineHeight:
                      "1.9",
                  }}
                >
                  Sustainable farming,
                  fresh produce, and
                  student-driven climate
                  innovation.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    marginBottom:
                      "18px",
                  }}
                >
                  Contact
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: "12px",
                    color: "#cbd5e1",
                  }}
                >
                  <span>
                    📧 sumaraj.r@nmit.ac.in
                  </span>

                  <span>
                    📞 7349784480
                  </span>

                  <span>
                    📍 NMIT Campus
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* CART */}
      {currentPage === "cart" && (
        <CartPage
          cart={cart}
          removeFromCart={
            removeFromCart
          }
          getTotal={getTotal}
          placeOrder={placeOrder}
        />
      )}

      {/* CHECKOUT */}
      {currentPage === "checkout" && (
        <CheckoutPage
          cart={cart}
          getTotal={getTotal}
          address={address}
          setAddress={setAddress}
          setCurrentPage={
            setCurrentPage
          }
          setCart={setCart}
          orders={orders}
          setOrders={setOrders}
        />
      )}

      {/* OTHER PAGES */}
      {currentPage === "process" && (
        <ProcessPage />
      )}

      {currentPage === "about" && (
        <AboutPage />
      )}

      {currentPage === "vision" && (
        <VisionPage />
      )}

      {/* ADMIN */}
      {currentPage === "admin" &&
        isAdmin && (
          <AdminDashboardPage
            products={products}
            orders={orders}
            totalRevenue={orders.reduce(
              (
                total,
                order
              ) =>
                total +
                order.total,
              0
            )}
            totalProducts={
              products.length
            }
            totalOrders={
              orders.length
            }
          />
        )}

      {/* PROFILE */}
      {currentPage === "profile" && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 40px",
          }}
        >
          <div
            style={{
              backgroundColor:
                "white",
              padding: "40px",
              borderRadius: "30px",
              boxShadow:
                "0 14px 36px rgba(0,0,0,0.06)",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "28px",
              }}
            >
              👤 Profile
            </h1>

            <div
              style={{
                background:
                  "#f0fdf4",
                padding: "20px",
                borderRadius: "20px",
                border:
                  "1px solid #bbf7d0",
              }}
            >
              <p
                style={{
                  color: "#166534",
                  fontWeight: "800",
                  marginBottom: "8px",
                }}
              >
                Logged in as
              </p>

              <h2
                style={{
                  fontSize: "20px",
                  color: "#111827",
                  fontWeight: "900",
                }}
              >
                {user?.email ||
                  "Guest User"}
              </h2>
            </div>

            {isAdmin && (
              <div
                style={{
                  marginTop: "24px",
                  background:
                    "linear-gradient(135deg,#166534,#22c55e)",
                  color: "white",
                  padding:
                    "14px 22px",
                  borderRadius:
                    "16px",
                  display:
                    "inline-block",
                  fontWeight:
                    "900",
                }}
              >
                👑 ADMIN ACCESS ENABLED
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}