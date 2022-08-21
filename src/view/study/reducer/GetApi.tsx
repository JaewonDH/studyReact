import api from "modules/axios";
import { useEffect, useReducer } from "react";

interface UserInfo {
  id?: number;
  email?: string;
  name?: string;
  phone?: string;
  username?: string;
  website?: string;
}

export const GetApi = (url: string) => {
  const ACTION_STATUS = {
    LOADING: 1,
    ERROR: 2,
    SUCCESS: 3,
  };

  const reducer = (
    state: { status?: number; userList?: Array<UserInfo> },
    action: { type: number; payload: Array<UserInfo> }
  ): { status?: number; userList?: Array<UserInfo> } => {
    return { status: action.type, userList: action.payload };
  };

  const [dataInfo, dispatch] = useReducer(reducer, {
    status: 0,
    userList: [],
  });

  const getData = async (url: string) => {
    dispatch({
      type: ACTION_STATUS.LOADING,
      payload: [],
    });

    try {
      const data = await api.get(url);
      //const data = await api.get("https://jsonplaceholder.typicode.com/users");
      dispatch({
        type: ACTION_STATUS.SUCCESS,
        payload: data.data.map((user: any) => {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            username: user.username,
            website: user.iwebsited,
          };
        }),
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: ACTION_STATUS.ERROR,
        payload: [],
      });
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return { dataInfo, getData, ACTION_STATUS };
};
