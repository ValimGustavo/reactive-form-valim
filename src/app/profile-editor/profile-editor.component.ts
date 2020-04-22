import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
/*
  FormGroup são uma forma de conectar varios formControl. Isto é, mudanças em um desses controls ecoará para os outros formControl presentes na lista.

  Existem duas formas de se fazer um FormGroup, através do constructor:

    um objeto: forma estatica de se declarar um FormGroup. O conjunto de formControl não será alterado.

    Array: forma dinamica de se declarar um FormGroup. Nele, pode ocorrer adições ou remoções de formControls.


 */
  private profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

}