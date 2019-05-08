
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "Deleverable are completed always", value: 2 },
  { label: "Works independentaly or requiring minimal support", value: 4 },
  { label: "Estimation are mostly right", value: 6 },
  { label: "Deliverables are mostly on time", value: 8 },
  { label: "Serious Effort", value: 10 },
  { label: "Deliverables were in an unknown area", value: 12 },
];

const Select4 = () => (
  <div className="container">
    <div className="row">
      <div className="col s3">
        <Select options={ techCompanies } />
      </div>
      <div className="col s3"></div>
    </div>
  </div>
);

export default Select4;