import { getAllTodos, createTodo, updateTodo, deleteTodo } from "./index.js";

const runFetchTest = async () => {
  console.log("STARTING FETCH API TESTS");

  const newTodo = await createTodo({ name: "Fetch Test Task" });
  console.log("Created:", newTodo);

  const all = await getAllTodos();
  console.log("List Count:", all.length);

  if (newTodo?.id) {
    const updated = await updateTodo(newTodo.id, {
      name: "Fetch Updated",
      completed: true,
    });
    console.log("Updated:", updated);

    const isDeleted = await deleteTodo(newTodo.id);
    console.log("Deleted successfully:", isDeleted);
  }

  console.log("FETCH TESTS COMPLETE\n");
};

runFetchTest();
