import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
  name: 'storeData',
  initialState:{

    data: []

  },
  reducers: {

      onAddReducer: (state, {payload }) => {
        state.listaFavoritos.push(payload)
        //console.log(state.listaFavoritos)
      },
      

    }

})

    export const { onAddReducer,} = storeSlice.actions