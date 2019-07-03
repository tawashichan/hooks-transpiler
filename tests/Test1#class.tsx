import React from "react";

interface AppProps {
  label: string;
}

interface AppState {
  value: string;
}

export class App extends React.Component<AppProps, AppState> {
  state = {
    value: ""
  };

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { label } = this.props;
    return (
      <div>
        <h1>{label}</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
}
