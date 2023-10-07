import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  test: string = '234234';

  constructor(
  ) {}

  check(test: string) {
    this.test = test;
  }
}
