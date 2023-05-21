import { Container} from "react-bootstrap";
import carImage from "../img/img_car.png";
import { RentButton } from "./RentBtn";
import { SearchForm } from "./SearchForm";
import PropTypes from "prop-types";
import "./Hero.css";

export const Hero = (props) => {

  const { rentBtn = true, rentForm = false} = props;
  return (
    <section id="hero" className="mb-3" style={{position: "relative",}}>
    <Container>
      <div className="jumbotron">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6">
            <div className="headline fw-bold">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="mt-2">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
             {rentBtn ? <RentButton /> : <></>} 
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 pt-5">
            <div className="carIMG">
              <img
                className="img-fluid object-fit-cover"
                src={carImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
    {rentForm && <SearchForm />}
    </section>
  );
};

Hero.propTypes = {
  rentBtn: PropTypes.bool,
  rentForm: PropTypes.bool,
};


export default Hero