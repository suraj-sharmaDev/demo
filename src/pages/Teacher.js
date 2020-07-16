import React from 'react';
import Header from '../components/Student/Header';

const Teacher = props => {
	const [roll, setRoll] = React.useState(47);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(()=>{
		console.log('APi Call takes place for roll', roll);
		setLoading(false);
	}, [])

	const reloadHandler = () => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((res)=>setRoll(100))
		.catch(err=>console.log(err))
	}
	return (
		<div>
			<Header />
			{roll}
			<button onClick={reloadHandler}>Teachers Click Me</button>
		</div>
	);
}

export default Teacher;