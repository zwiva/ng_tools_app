import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit { // ng g m features/contact/components/view --route view --module app.module

  // formControl
  field2 = new FormControl('', [Validators.required, Validators.maxLength(10)]); // reactivamente
  field1 = new FormControl('', [Validators.required]); // en tiempo especifico

  // varios inputs en un formulario
  // nameField = new FormControl('', [sync 1 o varias], async); // en tiempo especifico
  nameField = new FormControl('', [Validators.required]); // en tiempo especifico
  emailField = new FormControl(); // en tiempo especifico
  telField = new FormControl(); // en tiempo especifico
  colorField = new FormControl('#ff00bb'); // en tiempo especifico

  today = new Date().toUTCString();
  dateField = new FormControl(this.today); // en tiempo especifico
  ageField = new FormControl('18'); // en tiempo especifico

  // select:
  categoryField = new FormControl('category-1');
  tagField = new FormControl('');

  // checkbox:
  agreeField = new FormControl(false);

  // radio:
  genderField = new FormControl('noanswer');
  zoneField = new FormControl();





  constructor() { }

  ngOnInit(): void {
    this.field2.valueChanges.subscribe(value => console.log('subscribe: ', value)) // obtiene valor en tiempo real (reactivo)
  }

  getNameFieldByFormControlSimple() { // obtiene valor atado a boton (no reactivo)
    console.log('acaaaaa', this.field1.value);
  }



}
