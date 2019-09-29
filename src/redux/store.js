import { combineReducers, createStore } from 'redux'
import menu from './reducers/menu'

const reducers = { 
  menu
}

export const store = createStore(combineReducers(reducers))