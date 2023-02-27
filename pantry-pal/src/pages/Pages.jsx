import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';
function Pages() {

    //change searched to search here
  return (
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/cuisine/:type" element = {<Cuisine />} />
            <Route path = "/searched/:searched" element = {<Searched />} />
            <Route path = "/recipe/:name" element = {<Recipe />} />
        </Routes>
  )
}

export default Pages