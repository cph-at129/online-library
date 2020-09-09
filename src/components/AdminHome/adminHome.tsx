import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Alert, Button } from 'react-bootstrap';
import { serverUrl } from '../../config';

const AdminHome = () => {
    return (
        <>
            <h1 className="mt-5 mb-5">Добре дошли във виртуалния библиотечен портал</h1>
            <Container>
            
                Тук ще намерите актуална информация за потребителите и книгите в поддържаните филиали на библиотеката. Имате възможност да добавяте, редактирате и изтривате информация. 
                
              </Container>
              <Container>
              <Row>
                    <Col sm="12" style={{ textAlign: "center" }}>
                        <div>
                <h4 className="mt-3 mb-3"><b>Навигация:</b></h4>
                        </div>
                    </Col>
                    <Col sm="12" style={{ textAlign: "left" }}>
                        <div>
                <ul>
                     <li><b>Портал на библиотеката:</b> Достъп до изгледа, който останалите потребители получават на каталога от книги.</li>
                     <li><b>Модули за управление:</b> Достъп до базите от потребители и книги. Потвърждение на новореегистрирани потребители. От тук също можете да добавяте записи в двете бази. Достъп до календара - създаване на събития.</li>
                     <li><b>Контакти:</b>Контакт с основен филиал на библиотеката.</li>
</ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminHome;
