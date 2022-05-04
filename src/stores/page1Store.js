import { action, computed, flow, makeAutoObservable, observable } from "mobx";

class Store {
  @observable num = 1;

  @observable users = [];

  @computed get userCount() {
    return this.users.length;
  }

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setCount = () => {
    this.num++;
  };

  @action
  reset = () => {
    this.num = 1;
  };

  @action.bound
  getUsers = flow(function* () {
    try {
      this.users = yield Promise.resolve([{ name: "John" }, { name: "Jane" }]);
    } catch (e) {
      console.error("fetch users error", e);
    }
  });

  @action
  addUser = () => {
    this.users = this.users.concat({ name: "qin" });
  };
}
export const store = new Store();
