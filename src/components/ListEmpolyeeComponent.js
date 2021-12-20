import React, { Component } from "react";
import EmpolyeeService from "../services/EmpolyeeService";

class ListEmpolyeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    // call rest
    EmpolyeeService.getEmployee().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Employee</h1>
        <div className="row">
          <table className="table table-striped table=borded">
            <thead>
              <tr>
                <th> Employee First Name </th>
                <th> Employee Last Name </th>
                <th> Employee Email </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmpolyeeComponent;
