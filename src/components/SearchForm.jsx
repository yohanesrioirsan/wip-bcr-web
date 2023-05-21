import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import ReactSelect from "react-select";
import "./SearchForm.css"

export const SearchForm = (props) => {

  const { onSubmitProps } = props;
  const [name, setName] = useState(); 
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();


  return (
    <Container className="py-3 search-form">
      <Card className="p-3 my-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitProps &&
              onSubmitProps({
                name: name,
                category: category,
                price: price,
                status: status,
              })
          }}
        >
          <Row>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ketik nama/tipe mobil"
                  className="search-input"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <ReactSelect
                  placeholder="Pilih Kategori"
                  options={[
                    {
                      label: "2 - 4 orang",
                      value: "small",
                    },
                    {
                      label: "4 - 6 orang",
                      value: "medium",
                    },
                    {
                      label: "6 - 8 orang",
                      value: "large",
                    },
                  ]}
                  onChange={(selected) => setCategory(selected.value)}
                />
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <ReactSelect
                  placeholder="Pilih Harga"
                  options={[
                    {
                      label: "< Rp. 400.000",
                      value: "0 - 400000",
                    },
                    {
                      label: "Rp. 400.000 - Rp. 600.000",
                      value: "400000 - 600000",
                    },
                    {
                      label: "Rp. > Rp 600.000",
                      value: "600000 - 99999999999",
                    },
                  ]}
                  onChange={(selected) => setPrice(selected.value)}
                />
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex align-items-end gap-3">
                <Form.Group className="flex-fill">
                  <Form.Label>Status</Form.Label>
                  <ReactSelect
                  placeholder="Pilih Kategori"
                  options={[
                    {
                      label: "Disewa",
                      value: true,
                    },
                    {
                      label: "Belum Disewa",
                      value: "false",
                    },
                  ]}
                  onChange={(selected) => setStatus(selected.value)}
                />
                </Form.Group>
                <Button type="submit" variant="success">
                  Cari Mobil
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};


export default SearchForm