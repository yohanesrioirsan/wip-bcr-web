import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";
import fbIcon from "../img/icon_facebook.png";
import igIcon from "../img/icon_instagram.png";
import twitterIcon from "../img/icon_twitter.png";
import emailIcon from "../img/icon_mail.png";
import twitchIcon from "../img/icon_twitch.png";

const footer = () => {
  return (
    <Container>
      <Row className="footer pt-5">
        <Col>
          <div className="address">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
        </Col>
        <Col>
          <ul className="menus">
            <a className="links" href="#services">
              <li className="mb-3">Our Services</li>
            </a>
            <a className="links" href="#why-us">
              <li className="mb-3">Why Us</li>
            </a>
            <a className="links" href="#testimonial">
              <li className="mb-3">Testimonial</li>
            </a>
            <a className="links" href="#faq">
              <li className="mb-3">FAQ</li>
            </a>
          </ul>
        </Col>
        <Col>
          <p className="fw-bold">Connect With Us</p>
          <div className="d-flex gap-2">
            <span className="icon">
              <img src={fbIcon} alt="" />
            </span>
            <span className="icon">
              <img src={igIcon} alt="" />
            </span>
            <span className="icon">
              <img src={twitterIcon} alt="" />
            </span>
            <span className="icon">
              <img src={emailIcon} alt="" />
            </span>
            <span className="icon">
              <img src={twitchIcon} alt="" />
            </span>
          </div>
        </Col>
        <Col>
          <p className="fw-bold copyright">Copyright Binar 2022</p>
          <div className="brand"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
