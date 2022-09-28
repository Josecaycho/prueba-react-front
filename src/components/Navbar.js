import React, {Component} from 'react'
import logo from "../assets/images/logo.png";
import telefono from "../assets/images/telefono.svg";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Nav extends Component {
    render() {
        return(
            <section className="menu">
              <Navbar>
                <Container>
                  <Navbar.Brand>
                    <img src={logo} alt="" />
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <div className='menu__section__navbar'>
                          <span>¿Tienes alguna duda?</span>
                          <img src={telefono} alt="" />
                          <span className='number'>(01) 411 6001</span>
                          <span className='responsive-number'>Llámanos</span>
                      </div>
                      </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </section>
          )
        }
      }