/**GET Service Call with Start & End Date is passed as params */

import axios from 'axios';
import * as ActionTypes from "../actionTypes";

export const launchAction = (queryParams) => {
    return async dispatch => {
        return axios
          .get('https://launchlibrary.net/1.4/launch/'+queryParams)
          .then(response => {
            dispatch({ type: ActionTypes.LAUNCH_ACTION, payload: response.data });
          })
          .catch(error => {
           console.log(error)
          });
    };
  };