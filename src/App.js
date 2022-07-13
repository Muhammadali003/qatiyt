import imp from './products.json'
import './App.css';
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Appa from './Appa';
import { useState } from 'react';
import cotegor from './categories'




function App() {
    const [count, setCount] = useState('')
    const [counts, setCounts] = useState('')
    const [skid, setSkid] = useState(false)
    const [cotegori, setCotrgori] = useState(null)



    const search = imp.filter(el => {

        if (cotegori) {
            
        }

        if (skid) {
            return el.discount !== null
        }


        if (el.title.toLowerCase().startsWith(count.toLowerCase())) {
            return true
        } else {
            return false
        }

    })

    return (
        <>
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Pro Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => { setSkid(false) }} href="#action1">Главная</Nav.Link>

                            <Nav.Link onClick={() => { setSkid(true) }} href="#action2">Скидки</Nav.Link>

                            <NavDropdown title="Котегории" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Смартфоны и аксессуары</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Планшеты и электронные книги
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Наушники и Bluetooth-гарнитуры
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Смарт-часы и браслеты
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Фото- и видеокамеры
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Что ищите?"
                                className="me-2"
                                aria-label="Search"
                                value={counts}
                                onChange={element => setCounts(element.target.value)}
                            />
                            <Button onClick={() => { setCount(counts)
                                setCounts(prev => prev = '') }} variant="outline-success">Найти</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    {search.map((e, i) => {
                        return (
                            <Col key={i} sm={4} md={3} className="g-3">
                                <Appa
                                    data={e}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default App;

