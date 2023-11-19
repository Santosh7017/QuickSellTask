import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PageManager from './pages/pageManager';


const App = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [sortOption, setSortOption] = useState('priority');
    const [groupingOption, setGroupingOption] = useState('status');

    useEffect(() => {
  const fetchData = async () => {
    try {
const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
      const response = await fetch(url);
      const jsonData = await response.json();
      setTickets(jsonData.tickets);
    setUsers(jsonData.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

    
    useEffect(() => {
        if(localStorage.getItem('sortOption') == null){
            localStorage.setItem('sortOption', sortOption);
        }
        else{
            setSortOption(localStorage.getItem('sortOption'))
        }
    
        if(localStorage.getItem('groupingOption') == null){
            localStorage.setItem('groupingOption', groupingOption);
        }
        else{
            setGroupingOption(localStorage.getItem('groupingOption'))
        }
    }, [sortOption, groupingOption]);


    const handleSortChange = (option) => {
        setSortOption(option);
        localStorage.setItem('sortOption', option);
    };

    const handleGroupingSortChange = (option) => {
        setGroupingOption(option);
        localStorage.setItem('groupingOption', option);
    };

    return (
        <div>
        <Navbar handleSortChange={handleSortChange} sortOption={sortOption} handleGroupingSortChange={handleGroupingSortChange} groupingOption={groupingOption}  />
        <PageManager tickets={tickets} sortOption={sortOption} groupingOption={groupingOption} users={users}  />
        </div>
       
    );
};




export default App;

