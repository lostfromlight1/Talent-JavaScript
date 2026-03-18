import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:3005", 
  timeout: 2000, 
  headers: {
    'Authorization': 'Bearer sdfsdf',
    'Content-Type': 'application/json'
  }
});

export const getAllTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return response.data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return []; 
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await instance.post("/todos", todo);
    return response.data;
  } catch (error) {
    console.error("Create failed:", error.message);
  }
};

export const updateTodo = async (todo) => {
  try {
    const response = await instance.put(`/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error("Update failed:", error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await instance.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete failed:", error.message);
  }
};
