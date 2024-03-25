import axios from 'axios';
import config from '@/config';
import authHeader from './auth-header';

const API_URL = config.apiUrl;

class GroupService {
  join(req) {
    return axios.post(API_URL + '/group/join', {
      referralCode: req.code,
    }, { headers: authHeader() })
    .then(response => {
      return response.data;
    });
  }

  leave(id) {
    return axios.delete(API_URL + '/group/'+id+'/leave', { headers: authHeader() });
  }

  groupShow(id) {
    return axios.get(API_URL + '/group/'+id, { headers: authHeader() });
  }
}

export default new GroupService();