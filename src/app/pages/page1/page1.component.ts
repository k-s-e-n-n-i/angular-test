import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { AppService } from 'src/app/app.service';

@Component({
  templateUrl: './page1.component.html',
})
export class Page1Component implements OnInit {
  test = '';
  constructor(
    private apiService: ApiService,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.test = this.apiService.test;
  }

  next() {
    this.appService.check('321');
  }
}
