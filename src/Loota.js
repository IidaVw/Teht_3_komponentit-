import React from 'react';
import './Loota.css'; // Import CSS for styling

function Loota({ name, email, phone }) {
  return (
    <div className="laatikko">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default Loota;
