import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded" expand="lg">
    <div className="container">
        <Navbar.Brand href="/">WaitressApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto flex-md-row">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </div>
    </Navbar>
);
};
export default NavBar;