import React from 'react';

const Results = ({ submittedData }) => {
  return (
    <div>
      <h1>Results</h1>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Results;
