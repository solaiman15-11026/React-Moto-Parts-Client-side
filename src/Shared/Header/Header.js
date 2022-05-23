import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import logo from '../../Image/Logo/b2.jpg'
import './Header.css'

const Header = () => {

    // Header section
    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
                <Container className="container header p-1">
                    <Navbar.Brand as={Link} to="/">
                        <img className='rounded-3' height={18} width={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">Blogs</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none bg-danger' onClick={handleSignOut}>sign out</button>
                                    :

                                    <Nav.Link className="bg-success text-white rounded-3 px-3 border-primary " as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;