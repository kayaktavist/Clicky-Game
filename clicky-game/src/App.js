import React, { Component } from 'react';
import Navbar from "./components/NavBar";
import Container from "./components/container";
import Tile from "./components/tile";
import fish from "./fish.json"


class App extends Component {
  state = {fish}

  render() {
    return (
      <>
        <Navbar />
        <Container>
        {this.state.fish.map(fish => (<Tile
            // {/* removeFriend={this.removeFriend} */}
            id={fish.id}
            key={fish.id}
            image={fish.image}
            name={fish.name}
            />
            ))}
        </Container>
      </>
    );
  }
}

export default App;
