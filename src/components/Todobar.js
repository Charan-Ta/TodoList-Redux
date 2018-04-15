import React, { Component } from "react";

class Todobar extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input tye="text" ref="todo" />
          </div>
          <br />
          <div>
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Todobar;
