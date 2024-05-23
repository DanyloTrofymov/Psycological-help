import { QUIZ_REQUEST } from '@/data/apiConstants';
import { QuizRequest } from '@/data/dto/quiz/quiz.request';

import axios from './axios.instance';

export const getQuizzes = async (page: number = 0, pageSize: number = 10) => {
	try {
		return await axios.get(QUIZ_REQUEST, {
			params: { page, pageSize }
		});
	} catch (e) {
		console.error(e);
	}
};

export const createQuiz = async (quiz: QuizRequest) => {
	try {
		return await axios.post(QUIZ_REQUEST, quiz);
	} catch (e) {
		console.error(e);
	}
};

export const updateQuiz = async (
	quizId: number | string,
	quiz: QuizRequest
) => {
	try {
		return await axios.patch(`${QUIZ_REQUEST}/${quizId}`, quiz);
	} catch (e) {
		console.error(e);
	}
};
export const getQuizById = async (id: string | number) => {
	try {
		return await axios.get(`${QUIZ_REQUEST}/${id}`);
	} catch (e) {
		console.error(e);
	}
};

export const deleteQuiz = async (id: string | number) => {
	try {
		return await axios.delete(`${QUIZ_REQUEST}/${id}`);
	} catch (e) {
		console.error(e);
	}
};

export const getStatistic = async (id: string | number) => {
	try {
		return await axios.get(`${QUIZ_REQUEST}/statistics/${id}`);
	} catch (e) {
		console.error(e);
	}
};
