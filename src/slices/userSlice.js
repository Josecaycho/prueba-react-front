import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [],
  };


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      dataUserGlobal(state, action){
        state.userData = action.payload
        localStorage.setItem("userData", JSON.stringify(state.userData));
      },
    }
  });

  export const {
    dataUserGlobal,
  } = userSlice.actions;
  
  export default userSlice.reducer;