const Card = ({ ticket, users, name, groupingOption, status_icon_map, priority_icon_map }) => {
	var colors = ['red', 'green', 'blue', 'orange', '#512DA8', "black"];
	return (
		<div className="card-container">
			<div className="header">
				<h4>{ticket.id}</h4>
				<div className="image">
					{groupingOption != 'user'? <div><div id='profile-image' style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>{name}</div><span className="large-dot">•</span></div> 
					: 
					<></>
					}
					
				</div>
			</div>
			<div className="title-container">
				<span className="title-icon">
			{groupingOption !== 'status'? <i className={status_icon_map[ticket.status][0]} style={status_icon_map[ticket.status][1]}></i>:<></>}
			</span>
			<p className="title-text">
		
				{ticket.title}
				
				</p>
				</div>
			
			<div className="bottom">
				<div className="box">
					{ groupingOption !== 'priority' ? <i className={priority_icon_map[ticket.priority][0]} style={priority_icon_map[ticket.priority][1]}></i> :  <span className="dots">...</span>}
				</div>
				<div className="box1">
					<span className="large-dot">•</span>
					<span className="word">{ticket.tag.join(', ')}</span>
				</div>
				
			</div>
		</div>
	);
};

export default Card;