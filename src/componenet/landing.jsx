import { useState } from "react";
// import { Link,  } from "react-router-dom";
import { increment } from "../assets/appSlice";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../assets/apiSlice";
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
import heroimage from "./images/media bg-cover.png";
import heroimage1 from "./images/media bg-cover (1).png";
import heroimage2 from "./images/media bg-cover (2).png";
import heroimage3 from "./images/media bg-cover (3).png";
import book from "./images/bx_bxs-book-reader.png";
import carbonBook from "./images/carbon_book.png";
import arrow from "./images/uil_arrow-growth.png";
import unsplash1 from "./images/unsplash_hHdHCfAifHU.png";
import unsplash2 from "./images/unsplash_tVEqStC2uz8.png";
import unsplash3 from "./images/unsplash_dEGu-oCuB1Y.png";
import tag from "./images/tag.png";
import icontimer from "./images/icon akar-icons-calendar.png";
import iconchart from "./images/icon ant-design-area-chart-outlined.png";
import user1 from "./images/user.1.png";
import star from "./images/stars.png";
import camera from "./images/unsplash_0y8p69vwIYM.png";
import lady from "./images/unsplash_ah7yIXWrtKs.png";
import street from "./images/unsplash_6_dx4H4yi1Y.png";
import icecream from "./images/unsplash_GHztzvLLOdQ.png";
import Blady from "./images/unsplash_UUTOuXqaExk.png";
import writing from "./images/unsplash_rhn8ff1G_QY.png";
import mountain from "./images/unsplash_jo40QKbxUP0.png";
import snow from "./images/unsplash_QLGA5Zv3doo.png";
import blue from "./images/unsplash_1R1ecHV4i0Y.png";
import facebook from "./images/facebook.png";
import instagram from "./images/ant-design_instagram-outlined.png";
import twitter from "./images/twitter.png";
import none from "./images/@none.png";
import iconSearch from "./images/icn search .icn-xs.png";
import iconCart from "./images/icn shopping-cart .icn-xs.png";
import iconMenu from "./images/icn menu .icn-xs.png";
import { NavLink } from "react-router-dom";

function Landing() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);

  const incrementHandler = (e) => {
    e.preventDefault();
    dispatch(increment(input));
    setInput("");
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="color">
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* ☰ */}
        <img className="icon-mobile-view-3" src={iconMenu} alt="" />
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>
              Shop <img src={dropdown} alt="" />
            </li>
            <button className="navbar-BTN">
              <img src={humanicon} alt="" /> &nbsp;Login / Register
            </button>
            <li>
              <img src={search2} alt="" />
            </li>
          </ul>
          <h6>(225) 555-0118</h6>
          <div className="follow-image">
            <img className="follow-image-1" src={X} alt="" />
            <img className="follow-image-1" src={settings} alt="" />
            <img className="follow-image-1" src={FB} alt="" />
            <img className="follow-image-1" src={message} alt="" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
      )}
      <nav>
        <div className="nav-bar">
          <div>
            <img src={call} alt="" />
          </div>
          <h6>(225) 555-0118</h6>
          <div>
            <img id="email" src={email} alt="" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
        <h6 id="nav-bar-h">Follow Us and get a chance to win 80% off</h6>
        <div id="follow">
          <h6>Follow Us &nbsp; :</h6>
          <div className="follow-image">
            <img className="follow-image-1" src={X} alt="" />
            <img className="follow-image-1" src={settings} alt="" />
            <img className="follow-image-1" src={FB} alt="" />
            <img className="follow-image-1" src={message} alt="" />
          </div>
        </div>
      </nav>

      <div className="navbar-light mobile-nav-bar">
        <div className="icon-mobile-view">
          <img className="icon-mobile-view-1" src={iconSearch} alt="" />
          <img className="icon-mobile-view-2" src={iconCart} alt="" />
        </div>
        <div className="mobile-home">
          <li id="mobile-home">Home</li>
          <li id="mobile-home">Product</li>
          <li id="mobile-home">Pricing</li>
          <li id="mobile-home">Contact</li>
        </div>
        <div>
          <h3>Bandage</h3>
        </div>
        <div className="inner-navbar-light-1">
          <ul>
            <li id="mobile-home">Home</li>
            <li>
              Shop <img src={dropdown} alt="" />
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        <div className="inner-navbar-light">
          <button className="navbar-BTN">
            <img src={humanicon} alt="" /> &nbsp;Login / Register
          </button>
          <ul>
            <li>
              <img className="mobile-view" src={search} alt="" />
            </li>
            <li className="mobile-view">
              <img src={search1} alt="" />
            </li>
            <li>
              <img className="search2" src={search2} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-image">
          <div>
            <div className="inner-hero inner-hero-1">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h2>FURNITURE</h2>
              <h6>Read</h6>
            </div>
            <img src={heroimage} alt="" />
          </div>
        </div>
        <div className="mobile-hero" >
          <div>
            <div className="inner-hero">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h3>FURNITURE</h3>
              <h6>Read</h6>
            </div>
            <img id="inner-hero-img" src={heroimage1} alt="" />
          </div>
          <div className="inner-hero-section">
            <div>
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img className="heroimage2" src={heroimage2} alt="" />
            </div>
            <div id="hero-1">
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img src={heroimage3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mobile-product">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <ul className="product-grid">
          {data &&
            data.products &&
            data.products.slice(0, visibleProducts).map((product) => (
              <li className="product-item" key={product.id}>
                <NavLink to={`/product/${product.id}`} className="product-link">
                  <img
                    className="section-images"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h5>{product.title}</h5>
                  <p>{product.category}</p>
                  <div id="product-amount">
                    <p id="product-price">${product.price}</p>
                    <p id="discount">{product.discountPercentage}%</p>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>

        {data && data.products && visibleProducts < data.products.length && (
          <button className="view-more-btn" onClick={handleViewMore}>
            LOAD MORE PRODUCTS
          </button>
        )}
      </section>

      <div className="feature-products">
        <div className="mobile-feature-product">
        <h4>Featured Products</h4>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="feature-products-1">
          <div className="inner-cards">
            <img src={book} alt="" />
            <h3>Easy Wins</h3>
            <p>Get your best looking smile now!</p>
          </div>
          <div className="inner-cards">
            <img src={carbonBook} alt="" />
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="inner-cards">
            <img src={arrow} alt="" />
            <h3>Hack Growth</h3>
            <p>Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>
        <div className="inner-container">
          <div className="inner-container-1">
            <div className="tag">
              {" "}
              <img src={tag} alt="" />
            </div>
            <img src={unsplash1} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending">&nbsp;&nbsp; Trending</span>
              <span className="new">&nbsp;&nbsp; New</span>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="frame1">
                  <div>
                    <p className="april">
                      <img src={icontimer} alt="" />
                      <span> 22 April 2021</span>
                    </p>
                  </div>
                  <div>
                    <p className="comments">
                      <img src={iconchart} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-more">
              <h6>
                Learn More <img src={none} alt="" />
              </h6>
            </div>
          </div>
          <div className="inner-container-1">
            <div className="tag">
              {" "}
              <img src={tag} alt="" />
            </div>
            <img src={unsplash2} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending">&nbsp; &nbsp; Trending</span>
              <span className="new">&nbsp; &nbsp; New</span>
              <h4>Lou dest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="frame1">
                  <div>
                    <p>
                      <img src={icontimer} alt="" />
                      22 April 2021
                    </p>
                  </div>
                  <div>
                    <p className="comments">
                      <img src={iconchart} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-more">
              <h6>
                Learn More <img src={none} alt="" />
              </h6>
            </div>
          </div>
          <div className="inner-container-1">
            <div className="tag">
              {" "}
              <img src={tag} alt="" />
            </div>
            <img src={unsplash3} alt="" />
            <div>
              <span className="google">Google</span>
              <span className="trending">&nbsp;&nbsp; Trending</span>
              <span className="new">&nbsp;&nbsp; New</span>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div>
                <div className="frame1">
                  <div>
                    <p>
                      <img src={icontimer} alt="" />
                      22 April 2021
                    </p>
                  </div>
                  <div>
                    <p className="comments">
                      <img src={iconchart} alt="" />
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="learn-more">
              <h6>
                Learn More <img src={none} alt="" />
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="inner-testimonial">
          <h3>What they say about us</h3>
          <div id="testi-image">
            <img src={user1} alt="" />
            <img id="star" src={star} alt="" />
          </div>
          <h6>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </h6>
          <p id="regina">Regina Miles</p>
          <p id="des">Designer</p>
        </div>
        <div className="tiastimonial-images">
          <img src={camera} alt="" />
          <img src={lady} alt="" />
          <img src={street} alt="" />
          <img src={icecream} alt="" />
          <img src={Blady} alt="" />
          <img src={writing} alt="" />
          <img src={mountain} alt="" />
          <img src={snow} alt="" />
          <img src={blue} alt="" />
        </div>
        <div></div>
      </div>

      <div className="better-experience">
        <div className="better-experience-1">
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </p>
          <h3>$16.48</h3>
          <button id="better-btn">ADD YOUR CALL TO ACTION</button>
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
        <div id="last-footer">
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
