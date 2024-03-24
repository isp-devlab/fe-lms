import axios from 'axios';
import config from '@/config';

const API_URL = config.apiUrl;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/auth/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log(user)
    return axios.post(API_URL + '/auth/register', {
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
      isStudent: false
    });
  }

  forget(user) {
    console.log(user)
    return axios.post(API_URL + '/auth/forget', {
      email: user.email
    });
  }

  reset(user) {
    console.log(user)
    return axios.post(API_URL + '/auth/reset', {
      token: user.token,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();