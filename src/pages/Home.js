import React from 'react'
import persona from "../images/persona1.svg";
import personaResponsive from "../images/persona-responsive.svg";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
    state = {
        doc: "",
        celular: "",
        placa: ""
    };

    add = (e) => {
      e.preventDefault();
      if(this.state.doc === "" || this.state.celular === "" || this.state.placa === ""){
        alert("Todos los campos son obligatorios");
        return;
      }
      this.props.addNewUser(this.state)
      this.setState({ doc: "", celular: "" ,placa :""});
    }


    render() {
        return (
            <section className="home row">
                <div className='home__section-animate col-lg-5 col-12'>
                    <div className='home__section-animate__contenido'>
                        <img src={persona} alt="" />
                        <div className='home__section-animate__contenido__text'>
                            <p className='home__section-animate__contenido__text__subtitle'>¡NUEVO!</p>
                            <p className='home__section-animate__contenido__text__title'>Seguro <span> Vehicular Tracking </span></p>
                            <p className='home__section-animate__contenido__text__paragraph'>Cuentanos donde le haras seguimiento a tu seguro</p>
                            <img className='responsive' src={personaResponsive} alt="" />
                        </div>
                    </div>
                    <div className='home__section-animate__footer'>
                        <span>© 2021 RIMAC Seguros y Reaseguros.</span>
                    </div>
                </div>
                <div className='home__section-form col-lg-7 col-12'>
                    <div className='home__section-form__card'>
                        <div className='home__section-form__card__content'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>Déjanos tus datos</Card.Title>
                                <Card.Body>
                                    <Form onSubmit={this.add}>
                                        <InputGroup className="mb-3">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Doc"
                                                id="input-group-dropdown-1"
                                            >
                                                <Dropdown.Item href="#">DNI</Dropdown.Item>
                                                <Dropdown.Item href="#">Canet de Extranjeria</Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Control defaultValue={this.state.doc} onChange={(e) => this.setState({ doc: e.target.value })} size="lg" placeholder='Nro. de doc' aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                        <Form.Control defaultValue={this.state.celular} onChange={(e) => this.setState({ celular: e.target.value })} size="lg" type="text" placeholder="Celular" className='form-2' />
                                        <Form.Control defaultValue={this.state.placa} onChange={(e) => this.setState({ placa: e.target.value })} size="lg" type="text" placeholder="Placa" className='form-2' />
                                        <Form.Check
                                            type="checkbox"
                                        >
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>Acepto la <span>Política de Protecciòn de Datos Personales </span> y <span> los Términos y Condiciones.</span> </Form.Check.Label>
                                        </Form.Check>
                                        <Button type="submit" variant="primary" size="lg" className='b-form'>COTÍZALO</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;