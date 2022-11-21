// import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../const.js';
import customAxios from './customAxios.js';

export const updateStatus = async (updateId, status) => {
  try {
    debugger;
    if (updateId) {
      await customAxios.put(`${URL}/todos/${updateId}`, { status: status });
      toast.success('Updated...');
    }
  } catch (error) {
    console.log(error);
  }
};

// const strmaker = (str, filter) => {
//   if (filter.status?.length > 2) {
//     str = str.concat(`&status=${filter.status}`);
//   }
//   if (filter.type?.length > 2) {
//     str = str.concat(`&type=${filter.type}`);
//   }
//   if (filter.startDate > 2) {
//     str = str.concat(
//       `&end_gte=${moment(filter.startDate).format('YYYY-MM-DD')}`
//     );
//   }
//   if (filter.endDate > 2) {
//     str = str.concat(`&end_lte=${moment(filter.endDate).format('YYYY-MM-DD')}`);
//   }
//   return str;
// };

let token;
export const getSearchResults = async (text, filter) => {
  try {
    if (token) {
      token.cancel();
    }
    token = axios.CancelToken.source();
    let str = `${URL}/collections/search/public`;
    str = str.concat(`?search=${text}`);
    const res = await axios(`${str}`, { cancelToken: token.token });
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.log('Something went wrong: ', error.message);
    }
  }
};

export const getCollection = async (text, filter) => {
  try {
    let str = `${URL}/collections/stats/${text}/public`;
    const res = await axios(`${str}`);
    return res.data;
  } catch (error) {
    console.log('Something went wrong: ', error.message);
  }
};

export const getTransactions = async (text, filter) => {
  try {
    let str = `${URL}/collections/activity/${text}/public`;
    const res = await axios(`${str}`);
    return res.data;
  } catch (error) {
    console.log('Something went wrong: ', error.message);
  }
};
