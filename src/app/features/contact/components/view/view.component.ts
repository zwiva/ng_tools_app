import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit { // ng g m features/contact/components/view --route view --module app.module

  // 1) formControl
  field2 = new FormControl('', [Validators.required, Validators.maxLength(10)]); // reactivamente
  field1 = new FormControl('', [Validators.required]); // en tiempo especifico

  // 2) varios inputs en un formulario
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

  // 3) con FormGroup
  form = new FormGroup({ // grupo de FormControl
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),// reactivamente
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.max(10)),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    category: new FormControl(''),
    tag: new FormControl(''),
    agree: new FormControl(false, [Validators.requiredTrue]),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  // 4) con FormBuilder
  formB!: FormGroup; // 4

  constructor(
    private formBuilder: FormBuilder, // 4
  ) {
    this.buildForm(); // 4 
  }

  ngOnInit(): void {
    this.field2.valueChanges.subscribe(value => console.log('subscribe: ', value)) // obtiene valor en tiempo real (reactivo)
    // this.formB.valueChanges.subscribe(value => console.log('formB', value)) // tooodo el formulario
  }

  // 

  getNameFieldByFormControlSimple() { // obtiene valor atado a boton (no reactivo)
    console.log('simple: ', this.field1.value);
  }

  // 

  get formNameField() {
    return this.form.get('name');
  }

  get formPhoneField() {
    return this.form.get('phone');
  }

  get formEmailField() {
    return this.form.get('email');
  }

  get formAgeField() {
    return this.form.get('age');
  }

  save() {
    console.log('save', this.form.value);
  }

  // 

  private buildForm() { // 4
    this.formB = this.formBuilder.group({ // grupo de FormControl
      nameB: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]],// reactivamente
      phoneB: ['', [Validators.required]],
      emailB: ['', [Validators.required]],
      ageB: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    })
  }

  get formBNameField() { // 4
    return this.formB.get('nameB');
  }

  get formBPhoneField() { // 4
    return this.formB.get('phoneB');
  }

  get formBEmailField() { // 4
    return this.formB.get('emailB');
  }

  get formBAgeField() { // 4
    return this.formB.get('ageB');
  }

  saveB() { // 4
    if (this.formB.valid) {

      console.log('save B', this.formB.value);
    } else {
      this.formB.markAllAsTouched();
    }
  }

  // validadores:
  // 
  // min and max - numericos
  // required and requiredTrue - requerido y requerido que sea true
  // email
  // minLength and maxLength - largo de cadena
  // pattern - regex
  // nullValidator 
  // compose
  // composeAsync




}
