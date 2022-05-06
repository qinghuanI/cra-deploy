import { makeAutoObservable } from 'mobx';

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
      this.users = yield fetch('http://localhost:3000/users').then((res) => res.json());
    } catch (e) {
      console.error('fetch users error', e);
    }
  }

  addUser = () => {
    this.users = this.users.concat({ name: 'qin' });
  };
}
export const store = new Store();
