import * as types from './ActionTypes'

/* TO CREATE A NEW TRANSACTION  - START */
export const fetchEasyQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: 'GET_EASY_QUESTIONS',
            payload: res.results
        }))
    }
}

export const fetchMediumQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: 'GET_MEDIUM_QUESTIONS',
            payload: res.results
        }))
    }
}

export const fetchHardQuestions = () => {
    return dispatch => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple')
        .then(res => res.json())
        .then(res => dispatch({
            type: 'GET_HARD_QUESTIONS',
            payload: res.results
        }))
    }
}
