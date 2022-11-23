import axios from 'axios';
import { URL } from '../const.js';

let token;
export const getSearchResults = async (text) => {
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

export const getCollection = async (text) => {
  try {
    let str = `${URL}/collections/stats/${text}/public`;
    const res = await axios(`${str}`);
    return res.data;
  } catch (error) {
    console.log('Something went wrong: ', error.message);
  }
};

export const getTransactions = async (text) => {
  try {
    let str = `${URL}/collections/activity/${text}/public`;
    const res = await axios(`${str}`);
    return res.data;
  } catch (error) {
    console.log('Something went wrong: ', error.message);
  }
};
