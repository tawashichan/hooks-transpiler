import React from "react";
interface AppState {
  url?: string;
}
export class App extends React.Component<{}, AppState> {
  state = {
    url: undefined
  };
  componentDidMount() {
    fetch("https://example.com/woof.json")
      .then(raw => raw.json())
      .then(res => this.setState(res));
  }
  render() {
    return (
      <section>
        <h2>Doggo!</h2>
        {this.state.url ? (
          <img src={this.state.url} alt="A cute dog" />
        ) : (
          <p>Fetching</p>
        )}
      </section>
    );
  }
}
