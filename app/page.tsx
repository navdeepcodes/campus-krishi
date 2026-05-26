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

      window.location.href = "/login";

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

      window.location.href = "/login";

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
          fontSize: "28px",
          fontWeight: "700",
          color: "#15803d",
          background:
            "linear-gradient(to bottom,#f8fafc,#f1f5f9)",
        }}
      >
        🌱 Loading Campus Krishi...
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

      {/* HOME PAGE */}
      {currentPage === "home" && (
        <div>
          {/* HERO SECTION */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#14532d,#22c55e)",
              minHeight: "520px",
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
            {/* BACKGROUND CIRCLES */}
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.07)",
                top: "-180px",
                right: "-120px",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.05)",
                bottom: "-120px",
                left: "-60px",
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
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  display: "inline-block",
                  marginBottom: "28px",
                  fontSize: "14px",
                  fontWeight: "700",
                  backdropFilter:
                    "blur(10px)",
                }}
              >
                🌱 Student-Led Organic
                Farming Initiative
              </div>

              <h1
                style={{
                  fontSize: "74px",
                  fontWeight: "900",
                  lineHeight: "1",
                  marginBottom: "26px",
                }}
              >
                Campus Krishi
                <br />
                Growing Sustainability
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.9",
                  opacity: 0.95,
                  marginBottom: "40px",
                  maxWidth: "620px",
                }}
              >
                Fresh organic produce,
                sustainable farming,
                student innovation, and
                climate-conscious
                agriculture — all grown
                directly inside campus.
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
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                    boxShadow:
                      "0 10px 24px rgba(0,0,0,0.15)",
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
                    backgroundColor:
                      "transparent",
                    color: "white",
                    border:
                      "2px solid rgba(255,255,255,0.7)",
                    padding:
                      "18px 34px",
                    borderRadius:
                      "18px",
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Learn Our Process
                </button>

                {!user && (
                  <button
                    onClick={() =>
                      (window.location.href =
                        "/signup")
                    }
                    style={{
                      backgroundColor:
                        "#111827",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 34px",
                      borderRadius:
                        "18px",
                      fontWeight: "800",
                      fontSize: "15px",
                      cursor: "pointer",
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
                      backgroundColor:
                        "#111827",
                      color: "white",
                      border: "none",
                      padding:
                        "18px 34px",
                      borderRadius:
                        "18px",
                      fontWeight: "800",
                      fontSize: "15px",
                      cursor: "pointer",
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
                fontSize: "170px",
                zIndex: 2,
                filter:
                  "drop-shadow(0 12px 20px rgba(0,0,0,0.2))",
              }}
            >
              🌿
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            style={{
              maxWidth: "1450px",
              margin: "0 auto",
              padding: "80px 40px",
            }}
          >
            {/* PRODUCTS */}
            <div
              style={{
                marginBottom: "100px",
              }}
            >
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
                    fontWeight: "700",
                    fontSize: "14px",
                    marginBottom: "22px",
                  }}
                >
                  🥬 Fresh Organic Produce
                </div>

                <h1
                  style={{
                    fontSize: "54px",
                    fontWeight: "900",
                    color: "#111827",
                    marginBottom: "16px",
                  }}
                >
                  Today's Fresh
                  Vegetables
                </h1>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  Naturally grown and
                  freshly harvested from
                  our sustainable campus
                  farm.
                </p>
              </div>

              {/* SEARCH */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "center",
                  marginBottom: "50px",
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
                    width: "500px",
                    padding:
                      "18px 22px",
                    borderRadius:
                      "18px",
                    border:
                      "1px solid #d1d5db",
                    fontSize: "16px",
                    outline: "none",
                    backgroundColor:
                      "white",
                    boxShadow:
                      "0 12px 24px rgba(0,0,0,0.06)",
                  }}
                />
              </div>

              {/* PRODUCT GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(280px,1fr))",
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

            {/* INFO CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
                gap: "28px",
                marginBottom: "100px",
              }}
            >
              {[
                {
                  icon: "🌱",
                  title:
                    "Sustainable Farming",
                  desc:
                    "Organic farming methods with climate-resilient agricultural practices.",
                },
                {
                  icon: "👨‍🎓",
                  title:
                    "Student Innovation",
                  desc:
                    "Hands-on learning opportunities through live sustainability projects.",
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
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.05)",
                    textAlign:
                      "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "60px",
                      marginBottom:
                        "20px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight:
                        "900",
                      color: "#111827",
                      marginBottom:
                        "16px",
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
                      fontSize:
                        "15px",
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
              background:
                "linear-gradient(135deg,#0f172a,#1e293b)",
              color: "white",
              padding:
                "60px 40px",
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
                    fontSize: "22px",
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

      {/* CART PAGE */}
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

      {/* PROCESS */}
      {currentPage === "process" && (
        <ProcessPage />
      )}

      {/* ABOUT */}
      {currentPage === "about" && (
        <AboutPage />
      )}

      {/* VISION */}
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
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "900",
              marginBottom: "24px",
              color: "#111827",
            }}
          >
            Profile 👤
          </h1>

          <div
            style={{
              backgroundColor:
                "white",
              padding: "34px",
              borderRadius: "24px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                marginBottom: "12px",
                color: "#374151",
              }}
            >
              Logged in as:
            </h2>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              {user?.email ||
                "Guest User"}
            </p>

            {isAdmin && (
              <div
                style={{
                  marginTop: "24px",
                  backgroundColor:
                    "#15803d",
                  color: "white",
                  padding:
                    "12px 20px",
                  borderRadius:
                    "14px",
                  display:
                    "inline-block",
                  fontWeight:
                    "900",
                }}
              >
                ADMIN ACCESS ENABLED 👑
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}