
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "Never", value: 2 },
  { label: "Rarely", value: 4 },
  { label: "Sometimes", value: 6 },
  { label: "Mostly", value: 8 },
  { label: "Always", value: 10 },
  { label: "Exceptional", value: 12 },
];

const Selects = () => (
  <div className="container">
    <div className="row">
      <div className="col s3"></div>
      <div className="col s3">
        <Select options={ techCompanies } />
      </div>
      <div className="col s3"></div>
    </div>
  </div>
);

export default Selects;