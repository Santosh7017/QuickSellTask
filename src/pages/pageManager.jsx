

import React from 'react';
import Column from '../components/Column';
import '../assets/css/columnCards.css';

const Status = ({ tickets, sortOption, groupingOption, users }) => {
	
  let columns;
  let userClicked = false;

  const status_icon_map = {
	'Backlog': ['fas fa-scroll', {}],
	'Todo': ['fas fa-genderless', { fontSize: '24px', color: 'rgb(187, 181, 181)' }],
	'In progress': ['fas fa-hourglass-half', { color: 'rgba(196, 196, 9, 0.795)' } ],
	'Done': ['fas fa-check-circle',  { color: '#005cfa' }],
	'Cancelled': ['fas fa-times-circle fa-sm', { color: 'rgb(187, 181, 181)' }],
  }

  const priority_icon_map = {
    0: ['fas fa-scroll', {}],
    1: ['fas fa-exclamation-triangle', { fontSize: '12px', color: '#e70d0d' }],
    2: ['fas fa-volume-up', { color: 'black' } ],
    3: ['fas fa-volume-down',  { fontSize: '12px', color: 'black' }],
    4: ['fas fa-volume-off', {fontSize: '18px', color: 'black)' }],
    }

 if (groupingOption === 'status') {
		userClicked = false;
		columns = [
			{ title: 'Backlog', icon: 'fas fa-scroll', style: {}, status: 'Backlog' },
			{ title: 'To Do', icon: 'fas fa-genderless', style: { fontSize: '24px', color: 'rgb(187, 181, 181)' }, status: 'Todo' },
			{ title: 'In Progress', icon: 'fas fa-hourglass-half', style: { color: 'rgba(196, 196, 9, 0.795)' }, status: 'In progress' },
			{ title: 'Done', icon: 'fas fa-check-circle', style: { color: '#005cfa' }, status: 'done' },
			{ title: 'Cancelled', icon: 'fas fa-times-circle fa-sm', style: { color: 'rgb(187, 181, 181)' }, status: 'cancelled'},
		];
	} else if (groupingOption === 'priority') {
    userClicked = false;
    columns = [

      { title: 'No Priority', icon: 'fas fa-scroll', priority: '0' },
      { title: 'Urgent', icon: 'fas fa-exclamation-triangle', style:{color: "#e70d0d",},priority: '4' },
      { title: 'High', icon: 'fas fa-volume-up',style: {color: "#050505"}, priority: '3' },
      { title: 'Medium', icon: 'fas fa-volume-down', style:{color: "#030303",},priority: '2' },
      { title: 'Low', icon: 'fas fa-volume-off', style:{color: "#000000",}, priority: '1' },
    
    ];
  } else if (groupingOption === 'user') {
    userClicked = true;
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    columns = sortedUsers.map((user) => ({
      title: user.name,
      icon: 'user-icon-class', // Add the appropriate user icon class
      user: user.id,
    }));
  }

  if (userClicked) {
    return (
      <div class="container-wrapper">
      <div className="container">
        {columns.map((column) => {
          const userTickets = tickets.filter((ticket) => ticket.userId === column.user);

         
          if (userTickets.length === 0) {
            return null;
          }

          return (
            <Column
              key={column.title}
			  
              title={column.title}
              icon={column.icon}
              tickets={tickets}
              status={column.status}
              priority={column.priority}
              user={column.user}
              users={users}
              sortOption={sortOption}
              groupingOption={groupingOption}
              status_icon_map={status_icon_map}
              priority_icon_map={priority_icon_map}
            />
          );
        })}
      </div>
      </div>
    );
  } else {
    return (
      <div class="container-wrapper">
      <div className="container">
        {columns.map((column) => (
          <Column
            key={column.title}
			      style={column.style}
            title={column.title}
            icon={column.icon}
            tickets={tickets}
            status={column.status}
            priority={column.priority}
            user={column.user}
            users={users}
            sortOption={sortOption}
            groupingOption={groupingOption}
            status_icon_map={status_icon_map}
            priority_icon_map={priority_icon_map}
          />
        ))}
      </div>
      </div>
      

    );
  }
};

export default Status;

