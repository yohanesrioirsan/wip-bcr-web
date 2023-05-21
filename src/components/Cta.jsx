import { Container, Card} from "react-bootstrap";
import { RentButton } from "./RentBtn";
import "./Cta.css";

const cta = () => {
  return (
    <Container>
      <div id="cta" className="cta">
        <Card className="cta-banner fw-bold">
          <div className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <RentButton/>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default cta;
