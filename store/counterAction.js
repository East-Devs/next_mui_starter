import moment from 'moment';
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

const strmaker = (str, filter) => {
  if (filter.status?.length > 2) {
    str = str.concat(`&status=${filter.status}`);
  }
  if (filter.type?.length > 2) {
    str = str.concat(`&type=${filter.type}`);
  }
  if (filter.startDate > 2) {
    str = str.concat(
      `&end_gte=${moment(filter.startDate).format('YYYY-MM-DD')}`
    );
  }
  if (filter.endDate > 2) {
    str = str.concat(`&end_lte=${moment(filter.endDate).format('YYYY-MM-DD')}`);
  }
  return str;
};

export const getTodoList = async (Type, filter, page = 0, rowsPerPage = 10) => {
  try {
    debugger;
    let str = `${URL}/todos`;
    if (Type !== 'Admin') {
      toast.warn('Only Admin can perform this action');
    } else {
      str = str.concat(
        `?_start=${page * rowsPerPage}&_limit=${rowsPerPage}&active=true`
      );
      str = strmaker(str, filter);
      const res = await customAxios(`${str}`);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const leadContentAction = async (filter) => {
  try {
    debugger;
    let str = `/todos/count?active=true`;
    str = strmaker(str, filter);
    const res = await customAxios.get(`${URL}${str}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (deleteId, Type) => {
  try {
    if (deleteId) {
      if (Type !== 'Admin') {
        toast.warn('Only Admin can perform this action');
      } else {
        await customAxios.delete(`${URL}/todos/${deleteId}`);
        toast.success('Deleted...');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const countAction = async (type, router) => {
  try {
    debugger;
    if (type) {
      const res = await customAxios.get(`${URL}/todos/countall`);
      console.log(res);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoAction = async (todoId, type, data) => {
  try {
    debugger;
    if (type === 'Admin') {
      const res = await customAxios.put(`${URL}/todos/${todoId}`, data);
      return res.data;
    } else {
      toast.warn('only admin can perform this action');
    }
  } catch (error) {
    errMsg(error, router);
  }
};
