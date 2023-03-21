import axios from "axios";
import { useEffect, useState } from "react";
import ListStore from "../components/pure/listStore";

export default function Data() {
  const [dataStore, setDataStore] = useState([]);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDataStore(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ListStore data={dataStore}/>
  );
}
