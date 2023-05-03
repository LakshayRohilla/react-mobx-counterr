import { IRootStore } from "./RootStore";
import { action, computed, makeObservable, observable } from "mobx";

export class CountStore {
  count: number = 1;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      count: observable, // take care of the count whenever its value get changed.
      increment: action,
      decrement: action,
      getCountValue: computed,
    });
    this.rootStore = rootStore; // In case we have multiple store and we want then to communicate with each other so we have to add the root store here.
  }
  // In this we actions and state(observables) and computed values(computed).

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  get getCountValue() {
    return this.count;
  } // To have the value on UI.
}
