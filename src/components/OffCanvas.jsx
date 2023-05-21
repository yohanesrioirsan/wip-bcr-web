import { Offcanvas } from "react-bootstrap";

export const Sidebar = (props) => {
  const { show, handleClose } = props;
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <NavLink>Home</NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
