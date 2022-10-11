import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [],
    monto: 20,
    coberturas: [
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
      }
    ]
  };


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      dataUserGlobal(state, action){
        state.userData = action.payload
        localStorage.setItem("userData", JSON.stringify(state.userData));
      },
      dataUserCoberturas(state, action){
        
        const newCoberturas = state.coberturas
        for (let i = 0; i < newCoberturas.length; i++) {
          if(newCoberturas[i].id === action.payload.id){
            if(newCoberturas[i].state === false){
              state.monto = state.monto + newCoberturas[i].monto
              newCoberturas[i].state = !newCoberturas[i].state
            }else{
              state.monto = state.monto - newCoberturas[i].monto
              newCoberturas[i].state = !newCoberturas[i].state
            }
          }
        }
        localStorage.setItem("monto", JSON.stringify(state.monto));
      }
    }
  });

  export const {
    dataUserGlobal,
    dataUserCoberturas
  } = userSlice.actions;
  
  export default userSlice.reducer;