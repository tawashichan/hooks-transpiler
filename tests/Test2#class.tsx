import React from "react";
interface AppProps {
  label: string;
}
interface AppState {
  value: string;
}
export class App extends React.Component<AppProps, AppState> {
  state = {
    value: localStorage.getItem("myValueInLocalStorage") || ""
  };

  componentDidUpdate() {
    localStorage.setItem("myValueInLocalStorage", this.state.value);
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
}
