import React from "react";
import persona from "../assets/images/persona1.svg";
import personaResponsive from "../assets/images/persona-responsive.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { dataUser } from "../actions/allActions";

import {
  dataUserGlobal
} from "../slices/userSlice"

import { useNavigate  } from "react-router-dom";

function Home() {

	const dispatch = useDispatch()
	const navigate  = useNavigate()
  const [formValue, setFormValue] = useState({
    doc: "",
    celular: "",
    placa: "",
		politics: false
  });

  const handleSubmit = () => {
    if(formValue.doc !== "" && formValue.celular !== "" && formValue.placa !== ""){

			dataUser(formValue.doc).then(response => {
				if(response[0].status === 200){
					let json = {
						user: response[0].data,
						placa: formValue.placa
					}
					dispatch(dataUserGlobal(json));
					navigate("/plan")
				}
			})
		}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <section className="home row">
      <div className="home__section-animate col-lg-5 col-12">
        <div className="home__section-animate__contenido">
          <img src={persona} alt="" />
          <div className="home__section-animate__contenido__text">
            <p className="home__section-animate__contenido__text__subtitle">
              ¡NUEVO!
            </p>
            <p className="home__section-animate__contenido__text__title">
              Seguro <span> Vehicular Tracking </span>
            </p>
            <p className="home__section-animate__contenido__text__paragraph">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
            <img className="responsive" src={personaResponsive} alt="" />
          </div>
        </div>
        <div className="home__section-animate__footer">
          <span>© 2021 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
      <div className="home__section-form col-lg-7 col-12">
        <div className="home__section-form__card">
          <div className="home__section-form__card__content">
            <Card style={{ width: "18rem" }}>
              <Card.Title>Déjanos tus datos</Card.Title>
              <Card.Body>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Doc"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">DNI</Dropdown.Item>
                    <Dropdown.Item href="#">Canet de Extranjeria</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control
                    required
                    value={formValue.doc}
                    name="doc"
                    onChange={handleChange}
                    isInvalid={!formValue.doc}
                    size="lg"
                    placeholder="Nro. de doc"
                    aria-label="Text input with dropdown button"
                  />
                </InputGroup>
                <Form.Control
                  required
                  value={formValue.celular}
                  name="celular"
                  onChange={handleChange}
                  isInvalid={!formValue.celular}
                  size="lg"
                  type="text"
                  placeholder="Celular"
                  className="form-2"
                />
                <Form.Control
                  required
                  value={formValue.placa}
                  name="placa"
                  onChange={handleChange}
                  isInvalid={!formValue.placa}
                  size="lg"
                  type="text"
                  placeholder="Placa"
                  className="form-2"
                />
                <Form.Check type="checkbox" value={formValue.politics}>
                  <Form.Check.Input value={formValue.politics} name="politics" required isInvalid={!formValue.politics} onChange={handleChange} />
                  <Form.Check.Label>
                    Acepto la{" "}
                    <span>Política de Protecciòn de Datos Personales </span> y{" "}
                    <span> los Términos y Condiciones.</span>{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="b-form"
                  onClick={handleSubmit}
                >
                  COTÍZALO
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;