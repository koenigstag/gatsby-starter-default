import { makeAutoObservable } from 'mobx';

const defaultCoutries = [{ name: 'test name' }, { name: 'country name' }];

class CountriesModel {
  countries: any[] = [...defaultCoutries];

  constructor() {
    makeAutoObservable(this);
  }

  add(data) {
    this.countries.push(data);
  }

  pop() {
    this.countries.pop();
  }
}

export default CountriesModel;
