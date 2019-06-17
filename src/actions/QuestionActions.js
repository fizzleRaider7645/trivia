import * as types from './ActionTypes'

export const fetchEasyQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: types.GET_EASY_QUESTIONS,
            payload: res.results
        }))
    }
}

export const fetchMediumQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: types.GET_MEDIUM_QUESTIONS,
            payload: res.results
        }))
    }
}

export const fetchHardQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: types.GET_HARD_QUESTIONS,
            payload: res.results
        }))
    }
}
