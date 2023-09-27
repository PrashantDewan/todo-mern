import { request } from "express";
import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    if (!todoRef) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { done: !todoRef.done },
      { new: true }
    );

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, { data: req.body.data });
    const todo = await Todo.findById(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
