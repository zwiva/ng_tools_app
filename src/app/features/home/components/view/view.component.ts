import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit { // ng generate module features/home/components/view --route view --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
