import React from "react";
import * as actionTypes from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.AddNew_Todo:
      return [action.payload, ...state];

    case actionTypes.GETAll_Todos:
      return action.payload;

    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>(
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      ));

    case actionTypes.UPDATE_TODO:
      return state.map(todo =>(
        todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
      ))

    default:
      return state;
  }
};
