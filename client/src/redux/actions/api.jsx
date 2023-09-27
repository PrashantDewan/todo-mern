import axios from "axios";
import { AddNew_Todo, GETAll_Todos, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from "./type";

const APP_URL = "http://localhost:8000";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${APP_URL}/todos`, { data });
    dispatch({ type: AddNew_Todo, payload: res.data });
  } catch (error) {
    console.log("Error while calling api", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${APP_URL}/todos`);
    dispatch({ type: GETAll_Todos, payload: res.data });
  } catch (error) {
    console.log("Error while calling allTodos api", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${APP_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: res.data });
} catch (error) {
    console.log("Error while calling toggleTodo api", error.message);
  }
};

export const updateTodo = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put(`${APP_URL}/todos/${id}`,{ data });
        dispatch({ type: UPDATE_TODO, payload: res.data });
} catch (error) {
    console.log("Error while calling update toggleTodo api", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${APP_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data });
} catch (error) {
    console.log("Error while calling delete toggleTodo api", error.message);
  }
};


export const toggleTab = (tab) => async(dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}

