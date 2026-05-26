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

    if (!user) {
      window.location.href = "/login";
      return;
    }

    setUser(user);
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

    window.location.href = "/login";
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

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#f8fafc,#f1f5f9)",
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
          {/* HERO */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#14532d,#22c55e)",
              minHeight: "460px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              padding: "80px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.08)",
                top: "-180px",
                right: "-100px",
              }}
            />

            {/* LEFT */}
            <div
              style={{
                maxWidth: "650px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  display: "inline-block",
                  marginBottom: "24px",
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
                  fontSize: "68px",
                  fontWeight: "900",
                  lineHeight: "1.02",
                  marginBottom: "24px",
                }}
              >
                Campus Krishi
                <br />
                Growing Sustainability
              </h1>

              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.9",
                  marginBottom: "36px",
                  opacity: 0.96,
                }}
              >
                A student-led living lab
                focused on sustainable
                farming, climate
                resilience, fresh organic
                produce, and community
                innovation.
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
                      "16px 30px",
                    borderRadius:
                      "18px",
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                    boxShadow:
                      "0 10px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  🌱 Learn More
                </button>

                <button
                  onClick={() =>
                    setCurrentPage(
                      "process"
                    )
                  }
                  style={{
                    backgroundColor:
                      "rgba(255,255,255,0.08)",
                    border:
                      "2px solid rgba(255,255,255,0.6)",
                    color: "white",
                    padding:
                      "16px 30px",
                    borderRadius:
                      "18px",
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                    backdropFilter:
                      "blur(10px)",
                  }}
                >
                  Our Process
                </button>

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
                        "16px 30px",
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
                fontSize: "150px",
                zIndex: 2,
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
              padding: "70px 40px",
            }}
          >
            {/* PRODUCTS FIRST */}
            <div
              style={{
                marginBottom: "100px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "45px",
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
                    marginBottom: "20px",
                  }}
                >
                  🥬 Fresh From Farm
                </div>

                <h1
                  style={{
                    fontSize: "52px",
                    fontWeight: "900",
                    color: "#111827",
                    marginBottom: "14px",
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
                  Freshly harvested from
                  our campus organic farm
                </p>
              </div>

              {/* SEARCH */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "center",
                  marginBottom: "45px",
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
                    width: "460px",
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
                      "0 10px 25px rgba(0,0,0,0.06)",
                  }}
                />
              </div>

              {/* PRODUCT GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(280px,1fr))",
                  gap: "28px",
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
                        item,
                        quantity
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

            {/* WHAT WE DO */}
            <div
              style={{
                marginBottom: "100px",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "18px",
                }}
              >
                What We Do
              </h1>

              <p
                style={{
                  textAlign: "center",
                  color: "#6b7280",
                  maxWidth: "850px",
                  margin:
                    "0 auto 60px auto",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                Campus Krishi combines
                sustainable agriculture,
                innovation, and community
                participation to build a
                greener and healthier
                future.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(320px,1fr))",
                  gap: "28px",
                }}
              >
                {[
                  {
                    icon: "🌱",
                    title:
                      "Sustainable Campus Farming",
                    desc:
                      "Hands-on organic farming with climate-resilient methods and multiple growing cycles.",
                  },

                  {
                    icon: "👨‍🎓",
                    title:
                      "Student Innovation",
                    desc:
                      "Students gain practical sustainability and agricultural experience through live projects.",
                  },

                  {
                    icon: "🤝",
                    title:
                      "Community Engagement",
                    desc:
                      "Volunteer initiatives and collaborative programs that foster awareness and innovation.",
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
                        fontSize: "26px",
                        fontWeight:
                          "800",
                        color:
                          "#111827",
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

            {/* CURRENT CROPS */}
            <div
              style={{
                marginBottom: "100px",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "900",
                  marginBottom: "55px",
                  color: "#111827",
                }}
              >
                Current Crops &
                Practices
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      "white",
                    borderRadius:
                      "28px",
                    padding: "38px",
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.05)",
                  }}
                >
                  <h2
                    style={{
                      color: "#15803d",
                      fontSize: "32px",
                      fontWeight:
                        "900",
                      marginBottom:
                        "24px",
                    }}
                  >
                    🌿 Current Crops
                  </h2>

                  <ul
                    style={{
                      lineHeight:
                        "2.2",
                      color: "#374151",
                      fontSize:
                        "17px",
                    }}
                  >
                    <li>Tomatoes</li>
                    <li>Brinjal</li>
                    <li>Beans</li>
                    <li>Spinach</li>
                    <li>Banana</li>
                    <li>Chillies</li>
                  </ul>
                </div>

                <div
                  style={{
                    backgroundColor:
                      "white",
                    borderRadius:
                      "28px",
                    padding: "38px",
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.05)",
                  }}
                >
                  <h2
                    style={{
                      color: "#15803d",
                      fontSize: "32px",
                      fontWeight:
                        "900",
                      marginBottom:
                        "24px",
                    }}
                  >
                    💧 Practices
                    Adopted
                  </h2>

                  <ul
                    style={{
                      lineHeight:
                        "2.2",
                      color: "#374151",
                      fontSize:
                        "17px",
                    }}
                  >
                    <li>
                      Composting facility
                    </li>
                    <li>
                      Drip irrigation
                    </li>
                    <li>
                      Organic pest
                      control
                    </li>
                    <li>
                      Climate resilient
                      farming
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COMMUNITY IMPACT */}
            <div
              style={{
                marginBottom: "100px",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "60px",
                }}
              >
                Community Impact
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(300px,1fr))",
                  gap: "28px",
                }}
              >
                {[
                  {
                    icon: "❤️",
                    title:
                      "Student Learning",
                    desc:
                      "Hands-on sustainability projects for engineering and environmental students.",
                  },

                  {
                    icon: "🌱",
                    title:
                      "Climate Resilience",
                    desc:
                      "Practices designed to build resilience against drought and urban stress.",
                  },

                  {
                    icon: "👥",
                    title:
                      "Community Engagement",
                    desc:
                      "Volunteer workshops and collaborative sustainability innovation.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        "white",
                      padding: "36px",
                      borderRadius:
                        "28px",
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
                        fontSize: "25px",
                        fontWeight:
                          "900",
                        marginBottom:
                          "16px",
                        color:
                          "#111827",
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

            {/* JOIN SECTION */}
            <div
              style={{
                background:
                  "linear-gradient(135deg,#166534,#22c55e)",
                borderRadius: "36px",
                padding:
                  "80px 40px",
                textAlign: "center",
                color: "white",
                boxShadow:
                  "0 20px 45px rgba(34,197,94,0.25)",
              }}
            >
              <h1
                style={{
                  fontSize: "54px",
                  fontWeight: "900",
                  marginBottom: "24px",
                }}
              >
                Join Campus Krishi 🌿
              </h1>

              <p
                style={{
                  maxWidth: "900px",
                  margin:
                    "0 auto 38px auto",
                  lineHeight: "2",
                  fontSize: "18px",
                  opacity: 0.96,
                }}
              >
                Be part of a
                student-led sustainability
                movement promoting
                innovation, organic
                farming, climate action,
                and collaborative
                learning.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "center",
                  gap: "18px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() =>
                    setCurrentPage(
                      "process"
                    )
                  }
                  style={{
                    backgroundColor:
                      "white",
                    color: "#166534",
                    border: "none",
                    padding:
                      "16px 32px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Learn Our Process
                </button>

                <button
                  onClick={() =>
                    setCurrentPage(
                      "vision"
                    )
                  }
                  style={{
                    backgroundColor:
                      "transparent",
                    border:
                      "2px solid rgba(255,255,255,0.8)",
                    color: "white",
                    padding:
                      "16px 32px",
                    borderRadius:
                      "18px",
                    fontWeight: "900",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Explore Vision
                </button>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer
            style={{
              marginTop: "90px",
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
                gap: "45px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "32px",
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
                    fontSize:
                      "15px",
                  }}
                >
                  Providing fresh,
                  nutritious produce and
                  hands-on sustainability
                  education.
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
                  Quick Links
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: "12px",
                    color: "#cbd5e1",
                    fontSize: "15px",
                  }}
                >
                  <span>Home</span>
                  <span>About Us</span>
                  <span>Vision</span>
                  <span>Contact</span>
                </div>
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
                  Contact Info
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: "14px",
                    color: "#cbd5e1",
                    fontSize: "15px",
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

      {/* CHECKOUT PAGE */}
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

      {/* PROCESS PAGE */}
      {currentPage === "process" && (
        <ProcessPage />
      )}

      {/* ABOUT PAGE */}
      {currentPage === "about" && (
        <AboutPage />
      )}

      {/* VISION PAGE */}
      {currentPage === "vision" && (
        <VisionPage />
      )}

      {/* ADMIN PAGE */}
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

      {/* PROFILE PAGE */}
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
              {user?.email}
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