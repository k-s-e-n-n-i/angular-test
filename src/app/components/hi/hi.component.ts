import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hi',
  templateUrl: './hi.component.html',
})
export class HiComponent implements OnInit {
  @Input({ required: true }) name!: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
