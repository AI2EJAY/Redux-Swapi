import axios from "axios";
// we'll need axios
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetchData = () => {
  console.log("hi");
  const request = axios.get("https://swapi.co/api/people/");
  return dispatch => {
    dispatch({ type: FETCHING });
    request
      .then(({ data }) => {
        dispatch({
          type: FETCHED,
          payload: data.results
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          error: err
        });
      });
  };
};
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
