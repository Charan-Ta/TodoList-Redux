// const addTodo = task => {
//   return {
//     type: "ADD_TODO",
//     payload: task
//   };
// };
// export default addTodo;

export function addTodo(todo) {
  // console.log(todo);
  return {
    type: "TODO",
    payload: todo
  };
}
