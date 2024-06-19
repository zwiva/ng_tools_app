import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit { // ng g m shared/components/utilities/dialog --route dialog --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
