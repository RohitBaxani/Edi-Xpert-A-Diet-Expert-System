import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { logout } from '../actions/auth'

const NavBar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <>
            <Navbar variant="light" style={{ fontFamily: 'Arial,sans-serif' }}>
                {
                    auth.isAuthenticated ?
                        <div className='custom-navbar'>
                            <Navbar.Brand href="/"><a style={{ position: 'absolute', marginLeft: '100px', marginTop: '7px', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.4s', animation: 'fadein1 2s', transform: 'translate(0,0)' }}>Edi-Xpert</a></Navbar.Brand>
                            <div className='link-cont'>
                                <Nav.Link className="text-dark active" href="http://localhost:7000/">Home</Nav.Link>
                                <Nav.Link className="text-dark" href="/" onClick={() => dispatch(logout())}>Logout</Nav.Link>
                                {/* <Navbar.Brand href="/" style={{marginTop:'5px'}}>Welcome {auth.user.username} </Navbar.Brand> */}
                            </div>
                        </div> :
                        <div className='custom-navbar'>
                            <Navbar.Brand href="/"><a style={{ position: 'absolute', marginLeft: '100px', marginTop: '7px', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.4s', animation: 'fadein1 2s', transform: 'translate(0,0)' }}>Edi-Xpert</a></Navbar.Brand>
                            <div className='link-cont'>
                                <Nav.Link className="text-dark active" href="http://localhost:7000/">Home</Nav.Link>
                                <Nav.Link className="text-dark" href="/register">Register</Nav.Link>
                                <Nav.Link className="text-dark" href="/login">Login </Nav.Link>
                            </div>
                        </div>
                }

            </Navbar>
        </>
    )
}

export default NavBar