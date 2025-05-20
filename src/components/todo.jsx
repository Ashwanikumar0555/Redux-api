import { useSelector } from "react-redux";
import React from "react";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos || []);
    console.log(todos);

    const dispatch = useDispatch();
    const clickHandler = () => {
        console.log("delete",id);
        dispatch(deleteTodo(id));
    };
    return (
        <>
        <AddForm />
            <h2>Todo List App</h2>
            <ul>
                {Array.isArray(todos) ? (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No todos available</li>
                )}
            </ul>
        </>
    );
}