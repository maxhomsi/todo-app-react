import React, { Component } from "react";
import "./App.css";
// Functional Component e Class-Based Component

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: [],
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault(); //tem q colocar isso para nao sumir o Data
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  handleClick = (index) => {
    let objectCopy = [...this.state.listOfTodos];
    objectCopy.splice(index, 1);
    this.setState({ listOfTodos: [...objectCopy] });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit here</button>
        </form>
        <ol>
          {this.state.listOfTodos.map((todo, index) => {
            return (
              <div>
                <li key={index}>{todo} </li>
                <button onClick={() => this.handleClick(index)}>Delete</button>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
