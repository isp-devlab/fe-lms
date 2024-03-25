import axios from 'axios';
import config from '@/config';
import authHeader from './auth-header';

const API_URL = config.apiUrl;

class ProfileService {

  getMe() {
    return axios.get(API_URL + '/auth/me', { headers: authHeader() });
  }

  getNotification() {
    return axios.get(API_URL + '/profile/notification', { headers: authHeader() });
  }

  getGroup() {
    return axios.get(API_URL + '/profile/group', { headers: authHeader() });
  }

  getClass() {
    return axios.get(API_URL + '/profile/class', { headers: authHeader() });
  }

}

export default new ProfileService();