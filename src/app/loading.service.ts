import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  flag: boolean;

  constructor() {
    this.flag = false;
  }

  isLoading():boolean {
    return this.flag;
  }

  startLoading() {
    this.flag = true;;
  }

  endLoading() {
    this.flag = false;;
  }

}
