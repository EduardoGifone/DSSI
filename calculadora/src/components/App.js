import Display from "./Display";
import PanelDeBotonos from "./PanelDeBotonos";
import { Component } from "react";
import operaciones from "../logic/operaciones";

class App extends Component{

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton));

  render() {
    return (
      <div>
        <Display value = {this.state.siguiente || this.state.total || "0"} />
        <PanelDeBotonos clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
