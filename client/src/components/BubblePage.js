import React, { useState, useEffect } from "react";
// import axios from "axios";
import { axiosWithAuth } from '../utilites/axioswithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = ({history}) => {
  const [colorList, setColorList] = useState([]);
   // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log(res)
        setColorList(res.data)
      })
      .catch(e => {
        console.log(e.response.data);
        localStorage.removeItem("token");
        history.push("/");
      });
  }, [history])
 

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;