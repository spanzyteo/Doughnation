import { createSlice } from '@reduxjs/toolkit'

interface DonateState {
  donateAmount: number
}

const initialState: DonateState = {
  donateAmount: 50000,
}

const donateSlice = createSlice({
  name: 'donate',
  initialState,
  reducers: {
    donateHundred: (state) => {
      state.donateAmount = 100000
    },
    donateOneFifty: (state) => {
      state.donateAmount = 150000
    },
    donateFifty: (state) => {
      state.donateAmount = 50000
    },
  },
})

export const {donateHundred, donateFifty, donateOneFifty} = donateSlice.actions
export default donateSlice.reducer