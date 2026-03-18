import { v4 as uuidv4 } from "uuid";

const base_url = "http://localhost:3005";
const AUTH_HEADER = "Bearer asdflkasdfkwelksflewewrlkwerlkewlrlll";

const getHeaders = () => ({
  Authorization: AUTH_HEADER,
  "Content-Type": "application/json",
});

export const getAllTodos = async () => {
  try {
    const response = await fetch(`${base_url}/todos`, {
      headers: { Authorization: AUTH_HEADER },
    });
    return response.ok ? await response.json() : [];
  } catch (e) {
    console.error("Network Error:", e);
    return [];
  }
};

export const createTodo = async (body) => {
  try {
    const response = await fetch(`${base_url}/todos`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ ...body, id: uuidv4() }),
    });
    return await response.json();
  } catch (e) {
    console.error("Create failed:", e);
  }
};

export const updateTodo = async (id, body) => {
  try {
    const response = await fetch(`${base_url}/todos/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (e) {
    console.error("Update failed:", e);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${base_url}/todos/${id}`, {
      method: "DELETE",
      headers: { Authorization: AUTH_HEADER },
    });
    return response.ok;
  } catch (e) {
    console.error("Delete failed:", e);
  }
};
