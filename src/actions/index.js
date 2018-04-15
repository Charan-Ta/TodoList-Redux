const addTodo = task => {
  return {
    type: "ADD_TODO",
    payload: task
  };
};
export default addTodo;
