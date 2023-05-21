import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import "./CarouselSlider.css";
import ratingStars from "../img/Rate.png";
import testimonialImageOne from "../img/img_photo.png";
import testimonialImageTwo from "../img/img_photo2.png";
import testimonialImageThree from "../img/img_photo3.png";

function CarouselSlider() {
  return (
    <Container>
      <div id="testimonial">
        <div className="headtext text-center">
          <h1 className="fw-bold">Testimonial</h1>
          <p className="fw-bold">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <Carousel id="slide">
          <Carousel.Item>
            <Row>
              <Col sm={12}>
                <Card className="testimonial-card p-5">
                  <div className="testimonials d-flex flex-column justify-content-center">
                    <div className="img-photos d-flex justify-content-center">
                      <img src={testimonialImageOne} alt="" />
                    </div>
                    <div className="rating d-flex justify-content-center">
                      <img src={ratingStars} alt="" />
                    </div>
                    <div className="testimonials-text">
                      <p>
                        <span className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </span>
                      </p>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={12}>
                <Card className="testimonial-card p-5">
                  <div className="testimonials d-flex flex-column justify-content-center">
                    <div className="img-photos d-flex justify-content-center">
                      <img src={testimonialImageTwo} alt="" />
                    </div>
                    <div className="rating d-flex justify-content-center">
                      <img src={ratingStars} alt="" />
                    </div>
                    <div className="testimonials-text">
                      <p>
                        <span className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </span>
                      </p>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={12}>
                <Card className="testimonial-card p-5">
                  <div className="testimonials d-flex flex-column justify-content-center">
                    <div className="img-photos d-flex justify-content-center">
                      <img src={testimonialImageThree} alt="" />
                    </div>
                    <div className="rating d-flex justify-content-center">
                      <img src={ratingStars} alt="" />
                    </div>
                    <div className="testimonials-text">
                      <p>
                        <span className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </span>
                      </p>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default CarouselSlider;
