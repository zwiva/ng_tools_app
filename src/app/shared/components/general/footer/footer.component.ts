import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit { // ng generate module shared/components/general/footer --route footer --module app.module

  constructor() { }

  ngOnInit(): void {
  }

}
