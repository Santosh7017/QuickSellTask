
import React from 'react';
import Card from './Cards';

const Column = ({ title, icon, tickets, style ,status, priority, user, users, sortOption, groupingOption, status_icon_map, priority_icon_map }) => {
  var colors = ['red', 'green', 'blue', 'orange', '#512DA8', "black"];
  const name = title.split(" ").map((n)=>n[0].toUpperCase()).join("");
  let filteredTickets = 0;
  if (status !== undefined) {
    filteredTickets = tickets.filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase());
  } else if (priority !== undefined) {
    filteredTickets = tickets.filter((ticket) => ticket.priority == priority);
  } else if (user !== undefined) {
    filteredTickets = tickets.filter((ticket) => ticket.userId === user);
  }

  const sortedTickets = filteredTickets.sort((a, b) => {
    if (sortOption === 'priority') {
      return b.priority - a.priority; 
    } else if (sortOption === 'title') {
      return a.title.localeCompare(b.title); 
    }
    return 0;
  });

  return (
    <div className="column-container">
      <div className="top">
        <div className="left">
          {groupingOption === 'user' ? 
          <div id='profile-image' style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>{name}</div>
            : <i className={icon} style={style}></i>
          }
          <p>{title}</p>
          <div className="count">{filteredTickets.length}</div>
        </div>
        <div className="right">
          <span>+</span>
          <span className="dots">...</span>
        </div>
      </div>
      {sortedTickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} users={users} name={name} groupingOption={groupingOption} status_icon_map={status_icon_map} priority_icon_map={priority_icon_map} />
      ))}
    </div>
  );
};

export default Column;
