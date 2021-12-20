import React, { Component } from "react";

export default class HeraderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expan-md navbar-dark bg-dark">
            <div>
              <a href="https://javaguides.net" className="navbar-brand">
                {" "}
                Employee List
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
