import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '', 
    isLogged: false
  },
  reducers: {
    loginUser: (state, date) => {
      state.user = date.payload
      state.isLogged = true
    },
    logoutUser: state => {
      state.user = ''
      state.isLogged = false
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions

const store = configureStore({
  reducer: userSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(loginUser('Gabriel'))
store.dispatch(logoutUser())


