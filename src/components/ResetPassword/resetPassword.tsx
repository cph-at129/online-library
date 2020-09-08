import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'; 
import { Row, Form, Button, Alert } from 'react-bootstrap';
import { serverUrl } from '../../config';

const ResetPassword = (props: any) => {
    const email = props.match.params.token;
    const [state, setState] = useState({
        password: "",
        email
    });
    console.log(state)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleResetPassword = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`${serverUrl}/resetPassword`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...state })
        });

        const result = await response.json();
        if (result.status) {
            setSuccess(result.status_txt);
            setState({...state, password: ""});
            setError("");
        } else {
            setError(result.status_txt);
            setSuccess("");
        }
    };

    return (
        <Row className="d-flex justify-content-center mt-5">
            <Form className="col-6" style={{ margin: "0 auto" }}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Нова Парола</Form.Label>
                    <Form.Control value={state.password} name="password" type="password" placeholder="Нова Парола" onChange={handleChange} />
                </Form.Group>

                <Button 
                    variant="primary" 
                    onClick={handleResetPassword}>
                    Изпрати
                </Button>

                {error && <Alert className="mt-5" variant="danger">{error}</Alert>}
                {success && <Alert className="mt-5" variant="success">{success}</Alert>}
            </Form>
        </Row>
    )
}

export default withRouter(ResetPassword);
