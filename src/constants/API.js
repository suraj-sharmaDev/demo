//All api calling async functions should be stored here
import {GETTODO} from './Urls';

export const getTodo = async(roll) => {
	const url = `${GETTODO}/${roll}`;
	const response = await fetch(url);
	const result = await response.json();
	return result;
}