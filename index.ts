import { createStore } from 'redux'

//type action
enum typeAction {
  	LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
}

// action
function loginUser(user: string){
  return {
    type: typeAction.LOGIN_USER,
    payload: user
  }
}

function logoutUser(){
  return {
    type: typeAction.LOGOUT_USER,
  }
}

const initialState = { user: '', isLogged: false }

//Reducers
function userReducer(prevState = initialState, action: {type: string , payload?: any}){
  switch(action.type){
    case typeAction.LOGIN_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true
      } 
    case typeAction.LOGOUT_USER:
      return {
        ...prevState,
        user: '', 
        isLogged: false
      }
    default: 
      return prevState
  }
}


const store = createStore(userReducer)

console.log("init", store.getState())
store.dispatch(loginUser('Gabriel'))
console.log("logged in user", store.getState())
store.dispatch(logoutUser())
console.log("logged out user", store.getState())

