import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [],
    monto: 20
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
        console.log(action.payload)
        for (let i = 0; i < action.payload.content.length; i++) {
          if(action.payload.content[i].state === true && action.payload.content[i].id === action.payload.id){
            state.monto = state.monto + action.payload.content[i].monto
          }

          if(action.payload.content[i].state === false && action.payload.content[i].id === action.payload.id){
            state.monto = state.monto - action.payload.content[i].monto
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