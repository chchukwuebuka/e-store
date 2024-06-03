import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPostsQuery } from '../assets/apiSlice';
import { addToCart } from '../assets/appSlice';
import { selectCartProduct, selectItems, selectQuantities } from '../assets/reselect';
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
import link from "./images/link.png";
import couch from "./images/unsplash_QANOF9iJlFs.png";
import colmed from "./images/col-md-2.png";
import colmed1 from "./images/col-md-2 (1).png";
import colmed2 from "./images/col-md-2 (2).png";
import colmed3 from "./images/col-md-2 (3).png";
import colmed4 from "./images/col-md-2 (4).png";
import colmed5 from "./images/col-md-2 (5).png";
import facebook from "./images/facebook.png";
import instagram from "./images/ant-design_instagram-outlined.png";
import twitter from "./images/twitter.png";
import star1 from "./images/stars (1).png";
import chevronleft from "./images/ChevronLeft.png";
import chevronright from "./images/ChevronRight.png";
import like from './images/like.png'
import basket from './images/basket.png'
import more from './images/more.png'

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPostsQuery();
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const cartProduct = useSelector(selectCartProduct);
  const items = useSelector(selectItems);
  const quantities = useSelector(selectQuantities);

  useEffect(() => {
    if (data) {
      const product = data.products.find((product) => product.id == id);
      setProduct(product);
    }
  }, [data, id]);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSelectOptions = () => {
    dispatch(addToCart(product)); // Dispatch action to add product to cart
    navigate('/cartProduct');
  };

  return (
    <div>
      <nav className="product-nav">
        <div className="product-nav-bar">
          <div>
            <img src={call} alt="Call Icon" />
          </div>
          <h6>(225) 555-0118</h6>
          <div>
            <img id="product-email" src={email} alt="Email Icon" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
        <h6 id="product-nav-bar-h">
          Follow Us and get a chance to win 80% off
        </h6>
        <div id="product-follow">
          <h6>Follow Us &nbsp; :</h6>
          <div className="product-follow-image">
            <img className="follow-image-1" src={X} alt="Twitter Icon" />
            <img
              className="follow-image-1"
              src={settings}
              alt="Settings Icon"
            />
            <img className="follow-image-1" src={FB} alt="Facebook Icon" />
            <img className="follow-image-1" src={message} alt="Message Icon" />
          </div>
        </div>
      </nav>

      <div className="product-navbar-light">
        <div className="product-navbar-light-1">
          <div>
            <h3>Bandage</h3>
          </div>
          <div className="product-inner-navbar-light-1">
            <ul>
              <li>Home</li>
              <li>
                Shop <img src={dropdown} alt="Dropdown Icon" />
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="product-inner-navbar-light">
            <button className="product-navbar-BTN">
              <img src={humanicon} alt="User Icon" /> &nbsp;Login / Register
            </button>
            <ul>
              <li>
                <img src={search} alt="Search Icon" />
              </li>
              <li>
              <Link to="/cartProduct"><img src={search1} alt="Search Icon" /></Link>
              </li>
              <li>
                <img src={search2} alt="Search Icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home">
        <div className="inner-home">
          <ul>
            <li>
              Home <img src={none1} alt="Arrow Icon" />
            </li>
          </ul>
          <h6>Shop</h6>
        </div>
      </div>

      <div className="carousel">
        {product && (
          <li className="carousel-product-item">
          <div>
            <button id="chevronleft" onClick={handlePrevImage}>
              <img src={chevronleft} alt="Previous" />
            </button>
            <img
              className="carousel-section-images"
              src={product.images[imageIndex]}
              alt={product.title}
            />
            <button id="chevronright" onClick={handleNextImage}>
              <img src={chevronright} alt="Next" />
            </button>
          </div>
          <div className="carousel-product-item-2">
            <h5>{product.title}</h5>
            <p className="product-category">{product.category}</p>
            <div id="star-review">
              <img src={star1} alt="Stars" />
              <span>{product.rating} Reviews</span>
            </div>
            <div id="product-amount">
              <p id="carousel-product-price">
                <span id="carousel-product-price-1">${product.price}</span>
                <span id="carousel-product-price-2">
                  Availability : {product.stock} <span>In Stock</span>
                </span>
              </p>
            </div>
            <div className="product-checkbox">
              <button className="checkbox"></button>
              <button className="checkbox-1"></button>
              <button className="checkbox-2"></button>
              <button className="checkbox-3"></button>
            </div>
            <button className="carousel-BTN" onClick={handleSelectOptions}>
              Select Options
            </button>
            <button className="LBM">
              <img src={like} alt="Like" />
            </button>
            <button className="LBM">
              <img src={basket} alt="Basket" />
            </button>
            <button className="LBM">
              <img src={more} alt="More" />
            </button>
          </div>
        </li>
        )}
      </div>

      <div className="product-description-2">
        <ul>
          <li>Description</li>
          <li>Additional Information</li>
          <li>
            Reviews <img src={link} alt="Link" />
          </li>
        </ul>
      </div>

      <div>
        <div className="container">
          <div className="container-row">
            <div className="card">
              <h3>the quick fox jumps over</h3>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div id="inner-card">
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            <div className="card-img">
              <img src={couch} alt="Couch" />
            </div>
          </div>
        </div>
      </div>

      <div className="BESTSELLER-PRODUCTS">
        <div className="BESTSELLER-PRODUCT-1">
          <h3>BESTSELLER PRODUCTS</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading products</p>}
          {data && (
            <div className="product-products-grid">
              {data.products.slice(0, 8).map((product) => (
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

      <div className="clients">
        <div className="clients-1">
          <img src={colmed} alt="Client Logo 1" />
          <img src={colmed1} alt="Client Logo 2" />
          <img src={colmed2} alt="Client Logo 3" />
          <img src={colmed3} alt="Client Logo 4" />
          <img src={colmed4} alt="Client Logo 5" />
          <img src={colmed5} alt="Client Logo 6" />
        </div>
      </div>

      <div className="product-bandage">
        <h3>Bandage</h3>
        <div>
          <img src={facebook} alt="Facebook Icon" />
          <img src={instagram} alt="Instagram Icon" />
          <img src={twitter} alt="Twitter Icon" />
        </div>
      </div>

      <footer>
        <div className="inner-footer">
          <div className="inner-footer-1">
            <h5>Company Info</h5>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>Carrier</p>
            </a>
            <a href="#">
              <p>We are hiring</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Legal</h5>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>Carrier</p>
            </a>
            <a href="#">
              <p>We are hiring</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Features</h5>
            <a href="#">
              <p>Business Marketing</p>
            </a>
            <a href="#">
              <p>User Analytic</p>
            </a>
            <a href="#">
              <p>Live Chat</p>
            </a>
            <a href="#">
              <p>Unlimited Support</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Resources</h5>
            <a href="#">
              <p>IOS & Android</p>
            </a>
            <a href="#">
              <p>Watch a Demo</p>
            </a>
            <a href="#">
              <p>Customers</p>
            </a>
            <a href="#">
              <p>API</p>
            </a>
          </div>
          <div className="inner-footer-1">
            <h5>Get In Touch</h5>
            <div className="input-group">
              <input
                type="email"
                className="input-field"
                placeholder="Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p id="inner-footer-1-p">Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div id="product-last-footer">
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </footer>
    </div>
  );
}

export default Product;
