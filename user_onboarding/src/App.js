import React from "react";
import LoginForm from "./components/LoginForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <LoginForm />
      </div>
    );
  }
}
