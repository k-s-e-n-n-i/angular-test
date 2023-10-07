import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  testNumber: number = 0;
  
  readonly onNext = new Subject<number>();

  constructor(
  ) {}

  check(test: string) {
    this.testNumber++;
    this.onNext.next(this.testNumber);
  }
}

