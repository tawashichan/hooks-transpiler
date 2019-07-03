import React from "react";

interface AppProps {
  label: string;
}

export const App: React.FC<AppProps> = props => {
  const [value, setValue] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>{props.label}</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};
