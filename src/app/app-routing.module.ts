import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';



const routes: Routes = [
  {    path: '',    component: AppComponent, },
  {    path: 'page1',
    component: Page1Component,
  },
  {    path: '**',
    component: Page2Component,
  },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
