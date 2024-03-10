import React, { FC } from 'react';
import FoodTruckItem from './FoodTruckItem';
import './FoodTruckList.css';

interface FoodTruckListProps {
  items: any[];
}

const FoodTruckList: FC<FoodTruckListProps> = ({ items }) => {
  return (
    <div className="list">
      {items.map((item, index) => (
        <FoodTruckItem key={`{item.applicant}`} item={item} />
      ))}
    </div>
  );
};

export default FoodTruckList;