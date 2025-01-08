import React, { useEffect, useState } from 'react';
import './Products.css';
function Products() {
  const [computers, setComputers] = useState([]);

  // Fetch computer data from the backend
  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await fetch('http://localhost:5001/computers');
        if (response.ok) {
          const data = await response.json();
          setComputers(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchComputers();
  }, []);

  // Handle accept button click
  const handleAccept = (id) => {
    console.log(`Accepted computer with ID: ${id}`);
    // Additional logic for handling accept action can be added here
  };

  return (
    <section id="products" className="products-section">
      <h2>Products</h2>
      <p>Here you can browse and manage the available products.</p>
      <div className="products-container">
        {computers.map((computer) => (
          <div key={computer._id} className="product-card">
            <h3>{computer.computerType}</h3>
            <p><strong>Manufacturer:</strong> {computer.manufacturer}</p>
            <p><strong>Model:</strong> {computer.model}</p>
            <p><strong>Year of Purchase:</strong> {computer.yearOfPurchase}</p>
            <p><strong>Condition:</strong> {computer.condition}</p>
            <p><strong>Is Working:</strong> {computer.isWorking ? 'Yes' : 'No'}</p>
            <p><strong>Accessories:</strong> {computer.accessories.join(', ')}</p>
            <p><strong>Pickup Address:</strong> {computer.pickupAddress}</p>
            <p><strong>Contact Number:</strong> {computer.contactNumber}</p>
            <p><strong>Recycling Preference:</strong> {computer.recyclingPreference}</p>
            <button onClick={() => handleAccept(computer._id)}>Accept</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;