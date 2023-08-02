import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./Components/Pages/Homepage/homepage"


function App(){
  return (
    <Fragment>
      <Router>
        <Routes>
          < Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

