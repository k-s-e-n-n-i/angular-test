import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { AppService } from 'src/app/app.service';

@UntilDestroy()
@Component({
  templateUrl: './page2.component.html',
})
export class Page2Component implements OnInit, OnDestroy {
  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    
    this.appService.onNext
      .pipe(
        tap(data => {
          console.log(data);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    console.log('Пока')
  }
}
