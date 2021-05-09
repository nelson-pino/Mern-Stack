import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({ html: "Task Saved" });
        this.setState({ title: "", description: "" });
        this.GetTasks();
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  }

  componentDidMount() {
    this.GetTasks();
  }

  GetTasks() {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tasks: data });
        console.log(this.state.tasks);
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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
                        <input
                          type="text"
                          placeholder="Titulo de la tarea"
                          name="title"
                          onChange={this.handleChange}
                          value={this.state.title}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          placeholder="Descripcion de la Tarea"
                          className="materialize-textarea"
                          name="description"
                          onChange={this.handleChange}
                          value={this.state.description}
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
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <td>Titulo</td>
                    <td>Descripción</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasks.map((task) => {
                    return (
                      <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                          <button className="btn light-blue darken-4">
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            className="btn light-blue darken-4"
                            style={{ margin: "1px" }}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
