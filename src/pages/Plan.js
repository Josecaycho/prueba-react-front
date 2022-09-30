/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import retroceder from "../assets/images/retroceder.svg";
import persona2 from "../assets/images/persona2.svg";
import Navigate from "../components/Navigate";

import { useSelector } from "react-redux";

import Tabs from "../components/Tabs"
import Check from "../assets/images/check.svg"

import {
  dataUserCoberturas
} from "../slices/userSlice"

import { useDispatch } from "react-redux"

const Plan = (props) => {
  
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const [monto, setMonto] = useState("13,500");
  const montoMinimo = 12500
  const montoMaximo = 16500
  const [coberturas] = useState(JSON.parse(localStorage.getItem('coberturas')))
  const valorTabs = [
    {
      id: 1,
      key:'protegeauto',
      title: "PROTEGE A TU AUTO",
      content: [
        {
          id: 11,
          title: "Llanta robada", 
          text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
          monto: 15,
          img: "../assets/images/Llanta.svg",
          state: false
        },
        {
          id: 12,
          title: "Choque y/o pasarte la luz roja",
          text: "",
          monto: 20,
          img: "Choque",
          state: false
        },
        {
          id: 13,
          title: "Atropello en la vía Evitamiento ",
          text: "",
          monto: 50,
          img: "Atropello",
          state: false
        },
      ]
    },
    {
      id: 2,
      key: "protegerodea",
      title: "PROTEGE A LOS QUE TE RODEAN",
      content: []
    },
    {
      id: 3,
      key: "mejora",
      title: "MEJORA TU PLAN",
      content: [ ]
    }
  ]

  useEffect(() => {
    localStorage.setItem("coberturas", JSON.stringify(valorTabs));
  })

  const removeMonto = () => {
    let cantidad = monto.replace(",", "")
    if(Number(cantidad) > montoMinimo){
      setMonto(formatNumber(Number(cantidad) - 100))

      if(Number(cantidad) <= 16000) {
        for (let i = 0; i < coberturas[0].content.length; i++) {
          if(coberturas[0].content[i].id === 12 && coberturas[0].content[i].state === false){
            coberturas[0].content[i].state = true
          }
          
          let json = {
            content: coberturas[0].content,
            id: 12
          }
      
          dispatch(dataUserCoberturas(json));
        }
        console.log(coberturas)
        localStorage.setItem("coberturas", JSON.stringify(coberturas));
      }
    }
   
  }

  const addMonto = () => {
    let cantidad = monto.replace(",", "")
    if(Number(cantidad) < montoMaximo){
      setMonto(formatNumber(Number(cantidad) +  100))

      if(Number(cantidad) > 15999&& Number(cantidad) < 16001) {
        for (let i = 0; i < coberturas[0].content.length; i++) {
          if(coberturas[0].content[i].id === 12 && coberturas[0].content[i].state === true){
            coberturas[0].content[i].state = false
          }
        }
        let json = {
          content: coberturas[0].content,
          id: 12
        }
    
        dispatch(dataUserCoberturas(json));
      }
      localStorage.setItem("coberturas", JSON.stringify(coberturas));
    }
  }

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section className="plan row">
      <div className="col-3 plan__col plan__col__navigate">
        <Navigate />
      </div>
      <div className="col-5 plan__col plan__col__content">
        <div className="plan__col__content__retroceder">
          <img src={retroceder} alt="" />
          <span>VOLVER</span>
        </div>
        <div className="plan__col__content__perfil">
          <h1>
            ¡Hola, <span>{user.userData.user.username}!</span>
          </h1>
          <span>Conoce las coberturas para tu plan</span>
        </div>
        <div className="plan__col__content__contenidocarro">
          <div className="plan__col__content__contenidocarro__text">
            <p>Placa: {user.userData.placa} </p>
            <h3>Wolkswagen 2019 Golf</h3>
          </div>
          <div className="plan__col__content__contenidocarro__img">
            <img src={persona2} alt="" />
          </div>
        </div>
        <div className="plan__col__content__montos">
          <div className="plan__col__content__montos__text">
            <p>Indica la suma asegurada</p>
            <span>MIN {`$ ${formatNumber(montoMinimo)}`} | MAX {`$ ${formatNumber(montoMaximo)}`}</span>
          </div>
          <div className="plan__col__content__montos__number">
            <div className="plan__col__content__montos__number__remove" onClick={removeMonto}>-</div>
            <div className="plan__col__content__montos__number__monto">{`$ ${monto}`}</div>
            <div className="plan__col__content__montos__number__add" onClick={addMonto}>+</div>
          </div>
        </div>
        <div className="plan__col__content__coberturas">
          <span className="plan__col__content__coberturas__title">Agrega o quita coberturas</span>
          <Tabs allTabs={valorTabs}/>
        </div>
      </div>
      <div className="col-3 plan__col plan__col__monto">
        <div className="plan__col__monto__firstSection">
          <p>MONTO</p>
          <span>{`$ ${user.monto}`}</span>
          <p>mensuales</p>
        </div>
        <div className="plan__col__monto__secondSection">
          <p>El precio incluye:</p>
          <ul>
            <li>
              <img src={Check} alt="" />
              <span>Llanta de respuesto</span>
            </li>
            <li>
              <img src={Check} alt="" />
              <span>Analisis de motor</span>
            </li>
            <li>
              <img src={Check} alt="" />
              <span>Aros gratis</span>
            </li>
          </ul>
        </div>
        <div className="plan__col__monto__button">
          <button>LO QUIERO</button>
        </div>
      </div>
    </section>
  );
};

export default Plan;
