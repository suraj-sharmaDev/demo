import React from 'react';
import {getTodo} from '../constants/API';
import Header from '../components/Student/Header';
import List from '../components/Student/List';

const Student = ({update, ...props}) => {
	const [roll, setRoll] = React.useState(1);
	const [data, setData] = React.useState(null);
	var controller = new AbortController();

	React.useEffect(()=>{
		console.log('APi Call takes place for roll', roll);
		fetchHandler();
		return ()=>{
			controller.abort();
		}
	}, [roll])

	const updateRoll = () =>{
		//since roll is dependency for useEffect
		//fetchHandler will be called as soon as roll changes
		setRoll(roll+1);
	}
	const fetchHandler = () => {
		getTodo(roll)
		.then((result)=>{
			if(!controller.signal.aborted){
				setData(result);
			}else{
				console.log('Component has unmounted');
			}
		})
		.catch(err => console.log(err))
		// update();
	}
	const navigation = () =>{
		update();
	}
	return (
		<div>
			<Header />
			<List data={data} updateRoll={updateRoll}/>
			<button onClick={navigation}>Go to Teacher Page</button>
		</div>
	);
}

export default Student;