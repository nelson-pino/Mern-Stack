import React, { Component } from "react";

class App extends Component {
  addTask(e) {
    console.log("agregando tarea");
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a href="/" className="brand-logo">
              Mern Stack
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" placeholder="Titulo de la tarea" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          placeholder="Descripcion de la Tarea"
                          className="materialize-textarea"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
