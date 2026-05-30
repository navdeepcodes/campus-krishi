"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  const [showAdminLogin, setShowAdminLogin] =
    useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

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

    alert("Admin logged out");

    window.location.reload();
  }

  function addToCart(product: any) {
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
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: isMobile
              ? "30px"
              : "50px 70px",
            borderRadius: "32px",
            textAlign: "center",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: "450px",
          }}
        >
          <div
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            🌱
          </div>

          <h1
            style={{
              fontSize: isMobile
                ? "30px"
                : "40px",
              color: "#166534",
              fontWeight: "900",
              marginBottom: "12px",
            }}
          >
            Campus Krishi
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            Loading fresh organic
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
      {/* NAVBAR */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
              minHeight: isMobile
                ? "auto"
                : "650px",
              display: "flex",
              flexDirection:
                isMobile
                  ? "column"
                  : "row",
              justifyContent:
                "space-between",
              alignItems: "center",
              padding: isMobile
                ? "70px 22px"
                : "90px 80px",
              color: "white",
              position: "relative",
              overflow: "hidden",
              gap: "40px",
            }}
          >
            {/* BG CIRCLE */}
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

            {/* LEFT */}
            <div
              style={{
                maxWidth: "720px",
                zIndex: 2,
                textAlign: isMobile
                  ? "center"
                  : "left",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background:
                    "rgba(255,255,255,0.15)",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  marginBottom: "30px",
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
                  fontSize: isMobile
                    ? "54px"
                    : "92px",
                  lineHeight: "0.95",
                  fontWeight: "900",
                  marginBottom: "30px",
                }}
              >
                Campus Krishi
              </h1>

              <p
                style={{
                  fontSize: isMobile
                    ? "17px"
                    : "22px",
                  lineHeight: "1.9",
                  marginBottom: "42px",
                  opacity: 0.95,
                }}
              >
                Fresh organic produce,
                sustainable farming,
                student-driven innovation,
                and climate-conscious
                agriculture directly from
                campus farms.
              </p>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  justifyContent:
                    isMobile
                      ? "center"
                      : "flex-start",
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
                      "18px 30px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    cursor: "pointer",
                    fontSize: "15px",
                    boxShadow:
                      "0 12px 28px rgba(0,0,0,0.15)",
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
                      "18px 30px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Learn Process
                </button>

                {!isAdmin && (
                  <button
                    onClick={() =>
                      setShowAdminLogin(true)
                    }
                    style={{
                      background:
                        "linear-gradient(135deg,#111827,#374151)",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 30px",
                      borderRadius:
                        "18px",
                      fontWeight: "900",
                      cursor: "pointer",
                      fontSize: "15px",
                      boxShadow:
                        "0 12px 28px rgba(0,0,0,0.2)",
                    }}
                  >
                    👑 Admin Login
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
                        "#111827",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 30px",
                      borderRadius:
                        "18px",
                      fontWeight: "900",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    👑 Dashboard
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.95)",
                  padding: "30px",
                  borderRadius: "32px",
                  boxShadow:
                    "0 25px 60px rgba(255,255,255,0.35)",
                }}
              >
                <Image
                  src="/krishilogo.png"
                  alt="Campus Krishi Logo"
                  priority
                  width={320}
                  height={320}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                style={{
                  background: "white",
                  padding: "16px 24px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Image
                  src="/nmitlogo.png"
                  alt="NMIT Logo"
                  width={60}
                  height={60}
                />
                <div
                  style={{
                    color: "#111827",
                    fontWeight: "800",
                  }}
                >
                  NITTE Meenakshi Institute
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            style={{
              maxWidth: "1450px",
              margin: "0 auto",
              padding: isMobile
                ? "60px 18px"
                : "100px 40px",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "60px",
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
                  fontSize: isMobile
                    ? "42px"
                    : "66px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "18px",
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
                marginBottom: "70px",
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
                  width: "100%",
                  maxWidth: "560px",
                  padding:
                    "20px 24px",
                  borderRadius:
                    "22px",
                  border:
                    "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "16px",
                  backgroundColor:
                    "white",
                  boxShadow:
                    "0 14px 30px rgba(0,0,0,0.06)",
                }}
              />
            </div>

            {/* PRODUCTS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  isMobile
                    ? "1fr"
                    : "repeat(auto-fit,minmax(320px,1fr))",
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
          </div>

          {/* FOOTER */}
          <footer
            style={{
              background:
                "linear-gradient(135deg,#1e3a5f,#243b55)",
              color: "white",
              marginTop: "100px",
              padding: isMobile
                ? "50px 24px 30px"
                : "70px 60px 30px",
            }}
          >
            <div
              style={{
                maxWidth: "1450px",
                margin: "0 auto",
              }}
            >
              {/* TOP */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    isMobile
                      ? "1fr"
                      : "1.2fr 1fr 1fr",
                  gap: "50px",
                  marginBottom: "50px",
                }}
              >
                {/* LEFT */}
                <div>
                  <h2
                    style={{
                      fontSize:
                        isMobile
                          ? "42px"
                          : "54px",
                      fontWeight: "900",
                      marginBottom: "22px",
                    }}
                  >
                    🌱 Campus Krishi
                  </h2>

                  <p
                    style={{
                      color:
                        "rgba(255,255,255,0.8)",
                      lineHeight: "1.9",
                      fontSize: "18px",
                    }}
                  >
                    Providing fresh,
                    nutritious produce and
                    hands-on sustainability
                    education through
                    student-driven farming
                    innovation.
                  </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                  <h3
                    style={{
                      fontSize: "34px",
                      fontWeight: "900",
                      marginBottom: "24px",
                    }}
                  >
                    Quick Links
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection:
                        "column",
                      gap: "16px",
                    }}
                  >
                    {[
                      {
                        label: "🏠 Home",
                        page: "home",
                      },
                      {
                        label:
                          "🌿 Vision",
                        page: "vision",
                      },
                      {
                        label:
                          "⚙️ Process",
                        page: "process",
                      },
                      {
                        label:
                          "ℹ️ About",
                        page: "about",
                      },
                    ].map((item) => (
                      <button
                        key={item.page}
                        onClick={() =>
                          setCurrentPage(
                            item.page
                          )
                        }
                        style={{
                          background:
                            "transparent",
                          border: "none",
                          color:
                            "rgba(255,255,255,0.85)",
                          textAlign:
                            "left",
                          fontSize:
                            "18px",
                          cursor:
                            "pointer",
                          transition:
                            "0.2s",
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CONTACT */}
                <div>
                  <h3
                    style={{
                      fontSize: "34px",
                      fontWeight: "900",
                      marginBottom: "24px",
                    }}
                  >
                    Contact Info
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection:
                        "column",
                      gap: "18px",
                      color:
                        "rgba(255,255,255,0.85)",
                      fontSize: "18px",
                      lineHeight: "1.8",
                    }}
                  >
                    <a
                      href="mailto:sumararaj.r@nmit.ac.in"
                      style={{
                        color:
                          "rgba(255,255,255,0.85)",
                        textDecoration:
                          "none",
                      }}
                    >
                      ✉️ sumaraj.r@nmit.ac.in
                    </a>

                    <a
                      href="tel:7349784480"
                      style={{
                        color:
                          "rgba(255,255,255,0.85)",
                        textDecoration:
                          "none",
                      }}
                    >
                      📞 7349784480
                    </a>

                    <a
                      href="https://maps.google.com/?q=NMIT+Bangalore"
                      target="_blank"
                      style={{
                        color:
                          "rgba(255,255,255,0.85)",
                        textDecoration:
                          "none",
                      }}
                    >
                      📍 NMIT Campus,
                      Bengaluru
                    </a>
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div
                style={{
                  borderTop:
                    "1px solid rgba(255,255,255,0.15)",
                  paddingTop: "24px",
                  textAlign: "center",
                  color:
                    "rgba(255,255,255,0.75)",
                  fontSize: "16px",
                }}
              >
                © 2026 Campus Krishi.
                All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* CART */}
      {currentPage === "cart" && (
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          getTotal={getTotal}
          placeOrder={placeOrder}
          setCart={setCart}
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
      {showAdminLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "32px",
              borderRadius: "24px",
              width: "90%",
              maxWidth: "420px",
            }}
          >
            <h2>👑 Admin Login</h2>

            <button
              onClick={() => {
                const username =
                  prompt("Admin Username");
                const password =
                  prompt("Admin Password");

                if (
                  username === "krishi" &&
                  password === "sumaraj@29117"
                ) {
                  setShowAdminLogin(false);
                  setCurrentPage("admin");
                } else {
                  alert(
                    "Invalid admin credentials"
                  );
                }
              }}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#111827",
                color: "white",
                cursor: "pointer",
              }}
            >
              Login as Admin
            </button>

            <button
              onClick={() =>
                setShowAdminLogin(false)
              }
              style={{
                width: "100%",
                marginTop: "12px",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}