import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Backdrop } from "../components/Backdrop";
import "../components/Hero.css";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

const CarSearch = () => { 
    const [data, setData] = useState();
    const fetchCar = async(paramValues) => {
    const response = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`,
    {
        params: { 
            name: paramValues.name,
            category: paramValues.category
        }
    }
    );
        setData(response.data);
    };

    const onSubmitSearch = async (searchValues) => {
        const name = searchValues.name;
        const category = searchValues.category;

    await fetchCar({
            name: name,
            category: category
        });

    };


    useEffect (() => {
        fetchCar({});
    }, []);

    return ( 
        <>
            <div className="header">
            <NavigationBar/>
                <Backdrop triggerClass="search-input" />
                <Hero rentBtn={false} />
            </div>
                <SearchForm onSubmitProps={onSubmitSearch}/>
                <Container>
                <div className="cars-data">
                    <Row>
                        {data && data.cars && data.cars.length > 0 ? (
                        data.cars.map((item) => (
                            <Col lg={3} key={item.id}>
                            <Card>
                                    {item && item.image ? (
                                          <Card.Img variant="top" src={item.image} style={{objectFit: 'cover'}}></Card.Img>
                                      ) : (
                                          <div className="default-background">
                                              Result for {item.name}
                                          </div>
                                      )}
                                <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>Rp. {item.price} / Hari</Card.Text>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Repudiandae inventore natus voluptate nobis vitae odit
                                    accusamus neque! Vero similique praesentium ullam iste in,
                                    laboriosam ut laborum commodi maiores odit ea.
                                </Card.Text>
                                <Button
                                    type="button"
                                    variant="success"
                                    style={{ width: "100%"}}>
                                    Pilih Mobil
                                </Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))
                        ) : (
                        <></>
                        )}
                    </Row>
                </div>
                </Container>
                <Footer />
        </>
    )
}

export default CarSearch