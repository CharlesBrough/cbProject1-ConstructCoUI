import Axios from "axios";
import React, { useEffect, useState } from "react";
import charizard from "../../img/charizard.png";

const Charizard = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const resp = await Axios.get("https://pokeapi.co/api/v2/pokemon/charizard");
    setData(resp.data);
  };

  useEffect(() => {
    getData();
    //
  }, []);

  return (
    <>
      <br />
      <h2 className="text-center">
        <img
          className="center-block mx-auto"
          src={charizard}
          alt="charizard!"
          height="128px"
          width="128px"
        />
        Charizard Data Dump
      </h2>
      <pre className="json-block">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Charizard;
