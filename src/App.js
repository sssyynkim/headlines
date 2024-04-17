import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Headline from "./components/Headline";
import { useNewsArticles } from "./hooks/useNewsArticles";

function App() {
  const { loading, headlines, error } = useNewsArticles();

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {headlines.map((x) => (
        <Headline {...x} />
      ))}
    </div>
  );
}

export default App;
