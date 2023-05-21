import { Link } from "react-router-dom";

export const RentButton = () => {
  return (
    <Link to="/search">
      <button type="button" className="btn btn-success">
        Mulai Sewa Mobil
      </button>
    </Link>
  );
};
