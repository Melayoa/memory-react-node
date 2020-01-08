import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {}
});

export const getScores = async () => {
	try {
		const response = await instance.get('/scores');
		return response;
	}
	catch (error) {
		return error;
	}
}

export const putScores = async (data) => {
	try {
		const response = await instance.post('/scores/add', { name: data.name, score: data.score });
		return response;
	}
	catch (error) {
		return error;
	}
}