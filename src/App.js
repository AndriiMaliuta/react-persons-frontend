import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { getCats } from "./api/catsApi";

function App() {
  const [persons, setPersons] = useState([]);
  const [personsLoaded, setPersonsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const cats = await getCats();
      setPersonsLoaded(true);
      setPersons(cats);
    }
    fetchData();
  });

  return (
    <div className="App">
      <Header />
      <div>{personsLoaded && persons.map((p) => <div>{p.name}</div>)}</div>
    </div>
  );
}

export default App;
