import { getAllTodos, createTodo, updateTodo, deleteTodo } from './axios.js';

const runAxiosTest = async () => {
    console.log("STARTING AXIOS TESTS");

    const newTodo = await createTodo({ name: "Axios Test Task" });
    console.log("Created:", newTodo);

    const all = await getAllTodos();
    console.log("List Count:", all.length);

    if (newTodo?.id) {
        const updated = await updateTodo({ ...newTodo, name: "Axios Updated" });
        console.log("Updated:", updated);

        await deleteTodo(newTodo.id);
        console.log("Deleted successfully");
    }

    console.log("AXIOS TESTS COMPLETE");
};

runAxiosTest();
