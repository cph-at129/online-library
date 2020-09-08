import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'; 
import { Row, Form, Button, Alert } from 'react-bootstrap';
import { serverUrl } from '../../config';

const ForgottenPassword = (props: any) => {

    const [state, setState] = useState({
        email: ""
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSendEmail = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`${serverUrl}/forgottenPassword`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...state })
        });

        const result = await response.json();
        if (result.status) {
            setSuccess(result.status_txt);
            setState({...state, email: ""});
            setError("");
        } else {
            setError(result.status_txt);
            setSuccess("");
        }
    };

    return (
        <Row className="d-flex justify-content-center mt-5">
            <Form className="col-6" style={{ margin: "0 auto" }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Въведете email адрес" value={state.email} onChange={handleChange} />
                </Form.Group>

                <Button 
                    variant="primary" 
                    onClick={handleSendEmail}>
                    Изпрати
                </Button>

                {error && <Alert className="mt-5" variant="danger">{error}</Alert>}
                {success && <Alert className="mt-5" variant="success">{success}</Alert>}
            </Form>
        </Row>
    )
}

export default withRouter(ForgottenPassword);
