import { Container } from "react-bootstrap";
import "./Services.css";
import ladyImage from "../img/img_service.png";

const Services = () => {
  return (
    <Container>
      <div id="services" className="pt-5">
        <div className="row">
          <div className="ladyimage col-sm-12 col-lg-6">
            <img
              className="img-fluid object-fit-cover"
              src={ladyImage}
              alt=""
            />
          </div>
          <div className="subtitle col-sm-12 col-lg-6">
            <h1 className="fw-bold pt-1">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p className="pt-1">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="text-lg-start">
              <li className="mb-3">
                <i className="fa-sharp fa-solid fa-circle-check fa-2xl"></i>
                &nbsp;&nbsp; Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li className="mb-3">
                <i className="fa-sharp fa-solid fa-circle-check fa-2xl"></i>
                &nbsp;&nbsp; Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className="mb-3">
                <i className="fa-sharp fa-solid fa-circle-check fa-2xl"></i>
                &nbsp;&nbsp; Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className="mb-3">
                <i className="fa-sharp fa-solid fa-circle-check fa-2xl"></i>
                &nbsp;&nbsp; Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className="mb-3">
                <i className="fa-sharp fa-solid fa-circle-check fa-2xl"></i>
                &nbsp;&nbsp; Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
