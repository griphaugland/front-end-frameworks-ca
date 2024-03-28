import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [url, setUrl] = useState("https://v2.api.noroff.dev/online-shop");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, []);
  if (error) {
    return <>There was an issue getting the products from the server</>;
  }
  if (loading) {
    return <Loader />;
  }

  return <>Hopp</>;
}

export default App;
