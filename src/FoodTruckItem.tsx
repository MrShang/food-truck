import React from 'react';
import './FoodTruckItem.css';

interface FoodTruckItemProps {
    item: any;
}

const FoodTruckItem: React.FC<FoodTruckItemProps> = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.applicant}</h3>
      <p><b>Location</b>: {item.locationDescription}</p>
      <p><b>Status</b>: {item.status}</p>
      <p><b>Food List</b>: {item.foodItems}</p>
    </div>
  );
};

export default FoodTruckItem;