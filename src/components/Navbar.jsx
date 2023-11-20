import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/navbar.css';

const Navbar = ({ handleSortChange, sortOption, handleGroupingSortChange, groupingOption }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation(); 
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div>
      <div className="nav">
        <div  onClick={toggleMenu}>
          <i className="fas fa-sliders-h fa-rotate-180" style={{ color: '#616365' }}></i>
          <span className='button-text'>Display</span>
          
          <i className={`fas fa-regular fa-chevron-${isMenuOpen ? 'up' : 'down'}`} style={{ marginLeft: '10px' }}></i>
        </div>
      </div>

      <div ref={menuRef} className={`menuContainer ${isMenuOpen ? 'menu-open' : 'menu-close'}`}>
        <div className="sub-menuContainer">
          <span className="menuTitle">Grouping</span>
          <select name="" id="grouping" value={groupingOption} onChange={(e) => {handleGroupingSortChange(e.target.value); toggleMenu(e)} }>
            <option className="options" value="status">
              Status
            </option>
            <option className="options" value="user">
              User
            </option>
            <option className="options" value="priority">
              Priority
            </option>
          </select>
        </div>
        <div className="sub-menuContainer">
          <span className="menuTitle">Ordering</span>
          <select name="" id="ordering" value={sortOption} onChange={(e) => {handleSortChange(e.target.value); toggleMenu(e)}}>
            <option className="options" value="priority" >
              Priority
            </option>
            <option className="options" value="title">
              Title
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
