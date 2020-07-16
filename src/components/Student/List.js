import React from 'react';
import Colors from '../../constants/Colors';

const List = ({data, updateRoll, ...props}) => {
	let content = null;
	if(data===null){
		content = (
			<span>Loading</span>
		);
	}else{
		content = (
			<>
				<div style={{backgroundColor: Colors.listColor, padding: 20}}>
					<p>List Id : {data.id}</p>
					<p>Title : {data.title}</p>					
					<p>User Id: {data.userId}</p>
					<p>Completed: {data.completed ? 'Yes' : 'No'}</p>															
				</div><br/>
				<button onClick={updateRoll}>Fetch New List</button>
			</>	
		);
	}	
	return content;
}

export default List;