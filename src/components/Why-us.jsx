import { Container, Row, Col, Card } from "react-bootstrap";
import iconComplete from "../img/icon_complete.png";
import iconPrice from "../img/icon_price.png";
import iconHours from "../img/icon_24hrs.png";
import iconProfessional from "../img/icon_professional.png";
import "./Why-us.css";

const WhyUs = () => {
  return (
    <Container>
      <div id="why-us">
        <div className="headtext text-center text-lg-start">
          <h1 className="fw-bold">Why Us?</h1>
          <p className="fw-bold">Mengapa harus pilih Binar Car Rental</p>
        </div>
        <Row>
          <Col className="g-3" lg={3} sm={12}>
            <Card>
              <Card.Body className="card p-3">
                <div className="frame">
                  <img src={iconComplete} alt="" />
                  <h1>Mobil Lengkap</h1>
                  <p>Tersedia banyak pilihan mobil dan terawat.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="g-3" lg={3} sm={12}>
            <Card>
              <Card.Body className="card p-3">
                <div className="frame">
                  <img src={iconPrice} alt="" />
                  <h1>Harga Murah</h1>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="g-3" lg={3} sm={12}>
            <Card>
              <Card.Body className="card p-3">
                <div className="frame">
                  <img src={iconHours} alt="" />
                  <h1>Layanan 24 Jam</h1>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="g-3" lg={3} sm={12}>
            <Card>
              <Card.Body className="card p-3">
                <div className="frame">
                  <img src={iconProfessional} alt="" />
                  <h1>Sopir Professional</h1>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default WhyUs;
