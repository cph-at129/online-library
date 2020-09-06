import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Nav from './components/Nav/nav';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Admin from './components/Admin/admin';
import './App.css';

import { PrivateRoute, AdminRoute } from './components/PrivateRoute/private-route'
import { Container } from 'react-bootstrap';
import ReaderCalendar from './components/ReaderCalendar/readerCalendar';
import Contact from './components/Contact/contact';

function App() {
    return (
        <Router>
            <div className="App d-flex flex-column h-100">
                <Nav />
                <Container className="mb-5" style={{ minHeight: "800px" }}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <AdminRoute path="/admin" component={Admin} />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/calendar-view" component={ReaderCalendar} />
                        <PrivateRoute exact path="/contact" component={Contact} />
                    </Switch>
                </Container>
                <footer className="footer mt-auto py-3" style={{ backgroundColor: '#f5f5f5' }}>
                    <div className="container">
                        <span className="text-muted">Books Store - 2020</span>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
