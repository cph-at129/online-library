import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Alert, Button } from 'react-bootstrap';
import { serverUrl } from '../../config';
import { getToken, checkIsAdmin, getBranchOfLibrary } from '../../utils/auth';

const Contact = () => {
    const [state, setState] = useState({
        email: "",
        text: ""
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSendEmail = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`${serverUrl}/contact/sendEmail`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...state, token: getToken() })
        });

        const result = await response.json();
        if (result.status) {
            setSuccess(result.status_txt);
            setState({...state, email: "", text: "",});
            setError("");
        } else {
            setError(result.status_txt);
            setSuccess("");
        }
    };
    
    return (
        <>
            <h1 className="mt-5 mb-5">Контакти</h1>
            <Container>
                <Row>
                    { getBranchOfLibrary() === 1 || getBranchOfLibrary() === "" ?
                    <iframe
                        style={{ width: "100%", height: "300px" }} 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11727.61854138045!2d23.2835484!3d42.70574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85f2ae57490794b7!2s%22Iskra%20-%201964%22!5e0!3m2!1sen!2sbg!4v1599661705432!5m2!1sen!2sbg"
                    ></iframe>
                    : <iframe 
                        style={{ width: "100%", height: "300px" }} 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11841.256127952838!2d24.7035326!3d42.1007448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c2197d8c6d15c08!2sCommunity%20Hall%20Ivan%20Vazov!5e0!3m2!1sen!2sbg!4v1599661973451!5m2!1sen!2sbg"></iframe>
                    }
                </Row>
                <hr />
                <Row>
                    <Col sm="12" style={{ textAlign: "left" }}>
                        {getBranchOfLibrary() === 1 || getBranchOfLibrary() === "" ?
                        <div>
                            <p><b>Читалищна библиотека към читалище "Искра 1964", гр. София</b></p>
                            <p><b>Лице за контакт:</b> Иван Иванов</p>
                            <p><b>Длъжност:</b> Зам.-директор по библиотечната дейност</p>
                            <p><b>Адрес:</b> София, жк. Западен Парк, ул. Суходолска, бл. 60, 1373 София</p>
                            <p><b>Телефон:</b> 02 821 5892</p>
                        </div>
                        :
                        <div>
                            <p><b>Читалищна библиотека към читалище "Иван Вазов", гр. Пловдив</b></p>
                            <p><b>Лице за контакт:</b> Адриана Павлова </p>
                            <p><b>Длъжност:</b> Главен библиотекар</p>
                            <p><b>Адрес:</b> Пловдив, кв. Коматево, ул.Коматевско шосе 139</p>
                            <p><b>Телефон:</b>  032 691 758</p>
                        </div>
                        }
                    </Col>
                </Row>
                <hr />
                <Row className="mt-5">
                    <Col sm="12">
                    <h4>Изпрати запитване</h4>
                        <Form className="col-6" style={{ margin: "0 auto" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email адрес</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Въведете email адрес" value={state.email} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Запитване</Form.Label>
                                <Form.Control type="text" as="textarea" name="text" placeholder="Запитване" value={state.text} onChange={handleChange} />
                            </Form.Group>

                            <Button 
                                variant="primary" 
                                onClick={handleSendEmail}>
                                Изпрати
                            </Button>

                            {error && <Alert className="mt-5" variant="danger">{error}</Alert>}
                            {success && <Alert className="mt-5" variant="success">{success}</Alert>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;
