const AddTodoreducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return (state = state.contact(action.payload));

    default:
      return state;
  }
};

export default AddTodoreducer;
