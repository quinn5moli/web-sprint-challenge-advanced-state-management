import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const SMURF_FETCH_START = 'SMURF_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FETCH_FAILURE = 'SMURF_FAILURE';
export const SMURF_ADD = 'SMURF_ADD';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchSmurfs = () => {
    return dispatch => {

        dispatch(fetchSmurfsLoading())

        setTimeout(() => {
            axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log("response", res.data)
                dispatch(fetchSmurfSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchSmurfsFailure("error"))
            })
        }, 2000)
    }
}

export const addNewSmurf = (newSmurf) => {
    return ({type: SMURF_ADD, payload: newSmurf})
}

export const fetchSmurfsLoading = () => {
    return ({type: SMURF_FETCH_START})
}

export const fetchSmurfSuccess = (smurfs) => {
    return ({type: SMURF_FETCH_SUCCESS, payload: smurfs})
}

export const fetchSmurfsFailure = (err) => {
    return ({type: SMURF_FETCH_FAILURE, payload: err})
}

export const setError = (err) => {
    return ({type: ERROR_MESSAGE, payload: err})
}