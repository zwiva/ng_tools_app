import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit { // ng g m shared/components/utilities/table-list --route table-list --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
