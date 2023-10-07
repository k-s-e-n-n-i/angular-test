import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {
  user: any = {
    name: '',
  };

  test = 0;
  users: string[] = [];

  constructor(
    private appService: AppService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.user.name = '';

    this.appService.onNext
      .pipe(
        tap(data => {
          this.test = data;
        })
      )
      .subscribe();
  }

  add() {
    this.apiService.check(this.user.name);
    this.users.push(this.user.name);
    this.user.name = '';
  }
}
