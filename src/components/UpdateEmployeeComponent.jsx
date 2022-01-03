import React, { Component } from "react";
import EmpolyeeService from "../services/EmpolyeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmaiIdHandler = this.changeEmaiIdHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  componentDidMount() {
    // retive the data and populate
    EmpolyeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
      });
    });
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmaiIdHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  updateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log("employee" + JSON.stringify(employee));
    // EmpolyeeService.createEmployee(employee).then((res) => {
    //   this.props.history.push("/employees");
    // });
  };
  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div className="cotainer">
        <div className="row">
          <div className="card col-6 pffset-md-3 offset-md-3">
            <h3 className="text-center"> Update Employee</h3>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label htmlFor="">First Name </label>
                  <input
                    placeholder="First Name "
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name </label>
                  <input
                    placeholder="Last Name "
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email </label>
                  <input
                    placeholder="Eamil "
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmaiIdHandler}
                  />
                </div>

                <button
                  className="btn btn-success btn-lg"
                  onClick={this.updateEmployee}
                >
                  Save
                </button>
                <button className="btn btn-danger btn-lg" onClick={this.cencel}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
