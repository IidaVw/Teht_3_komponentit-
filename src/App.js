import React from 'react';
import Loota from './Loota'; // Import the Loota component

function App() {
  // Define the data in an array
  const people = [
    { id: 1, name: "Iida Varinowski", email: "Iida.Varinowski@edu.turku.fi", phone: "045 114 1138" },
    { id: 2, name: "Aurora Aaltonen", email: "Aurora.Aaltonen@edu.turku.fi", phone: "050 112 2634" },
    { id: 3, name: "Lauri Pajunen", email: "Lauri.Pajunen@edu.turku.fi", phone: "040 112 2721" },
    { id: 4, name: "Christos Arvanitis", email: "Chris.kingdom_hearts@edu.turku.fi", phone: "040 782 2234" },
  ];

  return (
    <div className="app">
      {people.map(person => (
        <Loota
          key={person.id} // React needs a unique key for each component
          name={person.name}
          email={person.email}
          phone={person.phone}
        />
      ))}
    </div>
  );
}

export default App;
