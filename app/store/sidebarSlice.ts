import { createSlice } from "@reduxjs/toolkit";

interface sidebarState {
  sidebarOPen: boolean
}

const initialState: sidebarState = {
  sidebarOPen: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarOPen = true
    },
    closeSidebar: (state) => {
      state.sidebarOPen = false
    },
    toggleSwitch: (state) => {
      state.sidebarOPen = !state.sidebarOPen
    }
  }
})

export const {openSidebar, closeSidebar, toggleSwitch} = sidebarSlice.actions
export default sidebarSlice.reducer