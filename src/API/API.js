import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
<<<<<<< HEAD
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  getUserProfile: async (userId) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  }
=======
    "API-KEY": "bl775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

//  let userId = withParams();
// if (!userId) {
//   userId = 1
// }


export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  getUserProfile: (userId) => {
    debugger
    return instance.get(`profile/${userId}`).then(response => {
      return response.data
    });
  }

>>>>>>> 92ee8c093685e4a4af92293891ae8e803221a20d
}