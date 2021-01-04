import axios from 'axios';
require('dotenv').config();
console.log(process.env.REACT_APP_KEY);
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 100,
		key: `${process.env.REACT_APP_KEY}`,
	},
});
