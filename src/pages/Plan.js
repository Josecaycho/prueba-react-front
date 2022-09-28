import React, { useEffect, useState } from "react";
import retroceder from "../assets/images/retroceder.svg";
import persona2 from "../assets/images/persona2.svg";

import { useSelector } from "react-redux";

const Plan = props => {

  // const[ stateUser, setStateUser] = useState([])

  const user = useSelector((state) => state.user);

  useEffect(()=> {
    console.log(user.userData)
  }, [user]);

  return (
    <section className='plan row'>
      <div className='col-4 plan__col'>
        <span>Donde estoy</span>
      </div>
      <div className='col-4 plan__col'>
        <div className='plan__col__retroceder'>
          <img src={retroceder} alt="" />
          <span>VOLVER</span>
        </div>  
        <div className='plan__col__perfil'>
          <h1>¡Hola, <span>{user.userData.user.username}!</span></h1>
          <span>Conoce las coberturas para tu plan</span>
        </div>
        <div className='plan__col__contenidocarro'>
          <div className='plan__col__contenidocarro__text'>
            <p>Placa: {user.userData.placa} </p>
            <h3>Wolkswagen 2019 Golf</h3>
          </div>
          <div className='plan__col__contenidocarro__img'>
            <img src={persona2} alt="" />
          </div>
        </div>
      </div>
      <div className='col-4 plan__col'>
        <span>Monto</span>
      </div>
    </section>
  )
}

export default Plan