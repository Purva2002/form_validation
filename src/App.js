import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      {formData ? (
        <Result formData={formData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
