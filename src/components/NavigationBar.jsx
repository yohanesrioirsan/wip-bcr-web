import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {

  const {
    showSidebar
  } = props
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link to={"/"}>
              <div className="brand"></div>
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => showSidebar()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#services"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default NavigationBar;
