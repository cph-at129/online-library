import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
import Users from './users';
import AddUser from './add-user';
import EditUser from './edit-user';
import Calendar from './calendar';
import Books from './books';
import AddBook from './add-book';
import EditBook from './edit-book';
import { checkIsAdmin, checkIsChiefLibrarian, checkIsReader, checkIsLibrarian } from '../../utils/auth';

const Admin = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center" xs={12}>
                <Nav>
                    {(checkIsAdmin() || checkIsChiefLibrarian()) && <Nav.Item>
                        <Link className="nav-link" to="/admin/users">
                            Потребители
                        </Link>
                    </Nav.Item>}
                    {checkIsAdmin() && <Nav.Item>
                        <Link className="nav-link" to="/admin/add-user">
                            Добави потребител
                        </Link>
                    </Nav.Item>}
                    <Nav.Item>
                        <Link className="nav-link" to="/admin/books">
                            Книги
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/admin/add-book">
                            Добави книга
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/admin/calendar">
                            Календар
                        </Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col xs={12}>
                <Switch>
                    <Route path="/admin/users">
                        {!checkIsAdmin() && !checkIsChiefLibrarian() ? <Redirect to="/" /> : <Users />}
                    </Route>
                    <Route path="/admin/add-user">
                        {!checkIsAdmin() ? <Redirect to="/" /> : <AddUser />}
                    </Route>
                    <Route path="/admin/edit-user/:id">
                        {checkIsReader() || checkIsLibrarian() ? <Redirect to="/" /> : <EditUser />}
                    </Route>
                    <Route path="/admin/books">
                        {checkIsReader() ? <Redirect to="/" /> : <Books />}
                    </Route>
                    <Route path="/admin/add-book">
                        {checkIsReader() ? <Redirect to="/" /> : <AddBook />}
                    </Route>
                    <Route path="/admin/edit-book/:id">
                        {checkIsReader() ? <Redirect to="/" /> : <EditBook />}
                    </Route>
                    <Route path="/admin/calendar">
                        {checkIsReader() ? <Redirect to="/" /> : <Calendar />}
                    </Route>
                </Switch>
            </Col>
        </Row>
    );
}

export default Admin;
