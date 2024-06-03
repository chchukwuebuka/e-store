import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetPostsQuery } from "../assets/apiSlice";
import { removeFromCart, increment, decrement } from "../assets/appSlice";
import call from "./images/Vector (11).png";
import email from "./images/Vector (12).png";
import settings from "./images/icn settings icn-xs (1).png";
import message from "./images/icn settings icn-xs (2).png";
import FB from "./images/a.png";
import X from "./images/icn settings icn-xs.png";
import dropdown from "./images/Vector (13).png";
import humanicon from "./images/icn settings icn-xs (3).png";
import search from "./images/icn settings icn-xs (4).png";
import search1 from "./images/icn settings icn-xs (5).png";
import search2 from "./images/icn settings icn-xs (6).png";
import none1 from "./images/icn arrow-right icn-xs.png";
import facebook from "./images/facebook.png";
import instagram from "./images/ant-design_instagram-outlined.png";
import twitter from "./images/twitter.png";
import arrow1 from "./images/icn arrow-right icn-xs (1).png";
import delete1 from "./images/mdi_delete-outline.png";
import star1 from "./images/stars (1).png";
import plus from "./images/+.png";

function CartProduct() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const quantities = useSelector((state) => state.cart.quantities);
  const { data: products, error, isLoading } = useGetPostsQuery();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveImage = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increment(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decrement(itemId));
  };

  return (
    <div>
      <nav className="product-nav">
        <div className="product-nav-bar">
          <div>
            <img src={call} alt="" />
          </div>
          <h6>(225) 555-0118</h6>
          <div>
            <img id="product-email" src={email} alt="" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
        <h6 id="product-nav-bar-h">
          Follow Us and get a chance to win 80% off
        </h6>
        <div id="product-follow">
          <h6>Follow Us &nbsp; :</h6>
          <div className="product-follow-image">
            <img className="follow-image-1" src={X} alt="" />
            <img className="follow-image-1" src={settings} alt="" />
            <img className="follow-image-1" src={FB} alt="" />
            <img className="follow-image-1" src={message} alt="" />
          </div>
        </div>
      </nav>

      <div className="cart-product-navbar-light">
        <div className="cart-product-navbar-light-1">
          <div>
            <h3>Bandage</h3>
          </div>
          <div className="product-inner-navbar-light-1">
            <ul>
              <li>Home</li>
              <li>
                Shop <img src={dropdown} alt="" />
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="product-inner-navbar-light">
            <button className="product-navbar-BTN">
              <img src={humanicon} alt="" /> &nbsp;Login / Register
            </button>
            <ul>
              <li>
                <img src={search} alt="" />
              </li>
              <li>
                <Link to="/landing">
                  <img src={search1} alt="" />
                 
                </Link>
              </li>
              <li>
                <img src={search2} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="home">
          <div className="inner-home">
            <ul>
              <li>
                Home <img id="none1" src={none1} alt="" />
              </li>
            </ul>
            <h6>
              Shop <img id="arrow1" src={arrow1} alt="" />
            </h6>
            <h6>Shopping Cart</h6>
          </div>
        </div>
      </div>

      <div className="product-cards">
        <div className="product-card-1">
          <h3 className="shopping-cart">Shopping Cart</h3>
          <div className="shopping-cart-details">
            <div>
              <p>Item Details</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Price</p>
            </div>
          </div>

          <div className="cards-container">
            <div className="cart-item-product">
              <div className="cart-items">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div>
                        {item.images && item.images.length > 1 ? (
                          <img src={item.images[1]} alt={item.title} />
                        ) : (
                          <img src="default_image.png" alt="default" />
                        )}
                        <div>
                          <button
                            className="remove-item"
                            onClick={() => handleRemoveImage(item.images)}
                          >
                            <img src={delete1} alt="" />
                            <span> REMOVE</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-details">
                        <h5>{item.title}</h5>
                        <p id="stock">
                          {item.stock} <span>In Stock</span>{" "}
                        </p>
                        <p id="rating-cart">
                          <img src={star1} alt="" />
                          <span> {item.rating} Reviews</span>
                        </p>
                      </div>
                      <div className="quantity-controls">
                        <button
                          id="decreaseQ"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantities[item.id]}
                          readOnly
                        />
                        <button
                          id="increaseQ"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="calculated-price">
                        <p id="price-figure">
                          ${item.price * quantities[item.id]}
                        </p>
                        <div className="calculated-price-1">
                          <p id="figure">$259.98</p>
                          <p id="figureX">
                            {" "}
                            <img src={plus} alt="" />{" "}
                            <input
                              type="text"
                              value={quantities[item.id]}
                              readOnly
                            />{" "}
                            <span>Item</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="addtocart-items">
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="summary-cart-item">
                  <div id="cart-summary">
                    <h4>Order Summary</h4>
                    <p> <input type="text" value={quantities[item.id]} readOnly /> <span>Item</span></p>
                  </div>
                  <div id="cart-delivery">
                    <h6>Delivery Charges</h6>
                    <div>
                      <p>
                        Add your delivery address to checkout to see delivery
                        charges.
                      </p>
                    </div>
                  </div>
                  <div id="cart-subtotal">
                    <h4>Subtotal</h4>
                    <p id="cart-price-figure">${item.price * quantities[item.id]}</p>
                  </div>
                  <div id="cart-total">
                    <h3>Total</h3>
                    <p id="cart-price-figure-1">${item.price * quantities[item.id]}</p>
                  </div>
                  <p id="cart-delivery-carges">Excluding Delivery Charges</p>
                  <button>Proceed to Checkout</button>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      <div className="BESTSELLER-PRODUCTS">
        <div className="BESTSELLER-PRODUCT-1">
          <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading products</p>}
          {products && (
            <div className="product-products-grid">
              {products.products.slice(0, 8).map((product) => (
                <div key={product.id} className="product-product-item">
                  <img
                    className="product-section-images"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h5>{product.title}</h5>
                  <p id="product-product-category">{product.category}</p>
                  <div id="product-product-amount">
                    <p id="product-product-price">${product.price}</p>
                    <p id="product-discount">{product.discountPercentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bandage">
        <h3>Bandage</h3>
        <div>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <footer>
        <div className="inner-footer">
          <div className="inner-footer-1">
            <h5>Company Info</h5>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Carrier</p>
            </a>
            <a href="">
              <p>We are hiring</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Legal</h5>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Carrier</p>
            </a>
            <a href="">
              <p>We are hiring</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Features</h5>
            <a href="">
              <p>Business Marketing</p>
            </a>
            <a href="">
              <p>User Analytic</p>
            </a>
            <a href="">
              <p>Live Chat</p>
            </a>
            <a href="">
              <p>Unlimited Support</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Resources</h5>
            <a href="">
              <p>IOS & Android</p>
            </a>
            <a href="">
              <p>Watch a Demo</p>
            </a>
            <a href="">
              <p>Customers</p>
            </a>
            <a href="">
              <p>API</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Get In Touch</h5>
            <div className="input-group">
              <input
                type="Email"
                className="input-field"
                placeholder="Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p id="inner-footer-1-p">Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div id="product-last-footer">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default CartProduct;
