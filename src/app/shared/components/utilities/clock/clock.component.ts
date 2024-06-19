import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit { // ng g m shared/components/utilities/clock --route clock --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
