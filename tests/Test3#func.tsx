import React from "react";

export const App: React.FC = () => {
  const [url, setUrl] = React.useState<string>();
  React.useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then(raw => raw.json())
      .then(res => setUrl(res.url));
  }, [setUrl]);
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  );
};
