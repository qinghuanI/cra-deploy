import { makeAutoObservable } from 'mobx';
import { request } from '../utils/request';

class Store {
  num = 1;

  users = [];

  get userCount() {
    return this.users.length;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setCount = () => {
    this.num++;
  };

  reset = () => {
    this.num = 1;
  };

  *getUsers() {
    try {
      this.users = yield request({ channel: '/users' });
    } catch (e) {
      console.error('fetch users error', e);
    }
  }

  addUser = () => {
    this.users = this.users.concat({ name: 'qin' });
  };
}
export const store = new Store();
