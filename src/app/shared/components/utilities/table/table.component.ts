import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit { // ng g m shared/components/utilities/table --route table --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
