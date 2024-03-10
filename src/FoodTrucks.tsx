import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import FoodTruckList from './FoodTruckList';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

interface IFoodTruck {
    locationId: number,
    locationDescription: string,
    address: string,
    foodItems: string[],
    facilityType: string,
    address: string,
    status: string,
    latitude: string,
    longitude: string,
    applicant: string,
    block: string,
    lot: string
}

const defaultFoodTrucks: IFoodTruck[] = [];


const options = [
    { value: '', label: 'All Trucks' },
    { value: 'APPROVED', label: 'Approved Trucks' },
    { value: 'EXPIRED', label: 'Expired Trucks' },
    { value: 'ISSUED', label: 'Issued Trucks' },
    { value: 'REQUESTED', label: 'Requested Trucks' },
    { value: 'SUSPEND', label: 'Suspend Trucks' }
];

const FoodTrucks = () => {
    const [foodTrucks, setFoodTrucks]: [IFoodTruck[], (foodTrucks: IFoodTruck[]) => void] = useState(defaultFoodTrucks);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState(true);
    const [error, setError] = useState("");
    const [keyword, setKeyword] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        fetchData("");
    }, []);

    const fetchData = async (statusValue) => {
        axios.get<IFoodTruck[]>(`http://localhost:8080/foodTruck/list?status=${statusValue}`, {
              headers: {
                "Content-Type": "application/json"
              },
            })
            .then(response => {
                setFoodTrucks(response.data);
                setLoading(false);
            })
            .catch(ex => {
                console.log("===========error=============");
                console.log({ ex });
                const error = ex.message;
              setError(error);
              setLoading(false);
            });
    };

    const updateKeyword = (keyword) => {
        setKeyword(keyword);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setLoading(true);
        setError("");
        fetchData(option.value);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <LoadingOverlay
            active={loading}
            spinner
            text='Estee Lauder: Loading food trucks...'
        >
            <div>
              <h2>Data List</h2>
              {/* <SearchBar keyword={keyword} onChange={updateKeyword}/> */}
              <Dropdown
                options={options}
                onOptionChange={handleOptionChange}
                showDropdown={showDropdown}
                toggleDropdown={toggleDropdown}
              />
               {selectedOption && <span>Selected: {selectedOption.label}</span>}
              {!error && <FoodTruckList items={foodTrucks} />}
              {error && <p className="error">{error}</p>}
            </div>
        </LoadingOverlay>
    );
};

export default FoodTrucks;

