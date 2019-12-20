import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { axiosWithAuth } from '../utils/axioswithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  const getColors = () =>{
        axiosWithAuth().get('/colors')
        .then(res => {
            setColorList(res.data)
             console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    

    useEffect(()=>{
       getColors()
    },[]);

  return (
    <>

      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />

      
      <Link to="/Login">Login </Link>
    </>
  );
};

export default BubblePage;
