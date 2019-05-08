import React from 'react';
import "./uppergrid.css";


const Grids=()=>{

    return(

<div className="row">
<div className="col m3 ">
  <div className="card blue-grey darken-1">
    <div className="content1 white-text">
      <span className="card-title">{localStorage.getItem("ProjectName")}</span>
  
       </div>
  </div>
</div>
<div className="col m3">
  <div className="card blue-grey darken-1">
    <div className="content2 center white-text">
      <span className="card-title">Score</span>
      
     </div></div></div>
     <div className="col m3">
  <div className="card blue-grey darken-1">
    <div className="content3 white-text center">
      <span className="card-title">{localStorage.getItem("name")}</span>

     </div></div></div>
     <div className="col m3">
  <div className="card blue-grey darken-1">
    <div className="content3 center white-text">
      <span className="card-title">{localStorage.getItem("googleId")}</span>

     </div></div></div>
</div>

    )
}

export default Grids;