import React from 'react'
import retroceder from "../images/retroceder.svg";
import persona2 from "../images/persona2.svg";

class Plan extends React.Component {
  state = {
    placa: ""
  };

  componentDidMount(){
    const datosUser = JSON.parse(localStorage.getItem('user'))
    const valorPlaca = datosUser.placa
    this.setState({placa: valorPlaca})
  }

  render() {
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
            <h1>¡Hola, <span>Juan!</span></h1>
            <span>Conoce las coberturas para tu plan</span>
          </div>
          <div className='plan__col__contenidocarro'>
            <div className='plan__col__contenidocarro__text'>
              <p>Placa: {this.state.placa} </p>
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
}

export default Plan