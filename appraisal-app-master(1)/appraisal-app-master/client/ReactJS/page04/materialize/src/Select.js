
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "Deleverable are completed always", value: 10},
  { label: "Works independentaly or requiring minimal support", value: 5},
  { label: "Estimation are mostly right", value: 5 },
  { label: "Deliverables are mostly on time", value: 5 },
  { label: "Serious Effort", value: 3 },
  { label: "Deliverables were in an unknown area", value: 2 },
];

const Selects = () => (
  <div className="container">
    <div className="row">
      <div className="col s3">
        <Select options={ techCompanies } />
      </div>
      <div className="col s3"></div>
    </div>
  </div>
);

export default Selects;