import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmpolyeeService from "../services/EmpolyeeService";

// // eslint-disable-next-line react-hooks/rules-of-hooks
// const { navigate } = useNavigate();
class ListEmpolyeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    // this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
  }
  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }
  componentDidMount() {
    // call rest
    EmpolyeeService.getEmployee().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee");
  }
  // navigate = useNavigate();
  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
      <div>
        <h1 className="text-center">Employee List</h1>
        <div className="row">
          <button
            to="/add-employee"
            onClick={this.addEmployee}
            className="btn btn-primary btn-lg"
          >
            Add Employee
          </button>
        </div>
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
                  <button
                    // eslint-disable-next-line no-template-curly-in-string
                    to="/update-employee"
                    // onClick={() => this.editEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.editEmployee(employee.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
