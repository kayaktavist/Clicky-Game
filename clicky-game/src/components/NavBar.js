import React, { Component } from "react";

class NavBar extends Component {

  render() {
    return (
      <div>

        <nav className="navbar navbar-dark bg-primary">
            <ul>
          <li className="brand"><a  href="/">Clicky Game</a>
          </li>
              <li>
                Click an Image to Begin!
            </li>
              <li >
                Score:  | Top Score:
  
            </li>
            </ul>
        </nav>
        <header>
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
        

        
      </div>
    );
  }

}

export default NavBar;