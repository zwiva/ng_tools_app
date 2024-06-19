import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {  // ng generate module shared/components/general/navbar --route navbar --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
