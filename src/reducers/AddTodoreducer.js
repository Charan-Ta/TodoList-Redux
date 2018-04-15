const AddTodoreducer = (state = [], action) => {
  switch (action.type) {
    case "TODO":
      return (state = state.concat(action.payload));

    default:
      return state;
  }
};

export default AddTodoreducer;
