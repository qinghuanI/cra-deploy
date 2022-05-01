import { action, observable, makeAutoObservable } from "mobx";

class Store {
  @observable
  num = 1;

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
}
export const store = new Store();
