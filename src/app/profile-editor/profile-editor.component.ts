import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, Validators, FormArray } from '@angular/forms'
import { FormBuilder, Validator } from '@angular/forms'

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


  FormGroup aceitam tanto formControl individuais quanto outros FormGroup

  para acessar os controls.

  <FormGroup>.controls.[name_do_control]
*/



  private profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],

    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    //Criação de um grupo dinamico atravez de arrays.
    aliase: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })

 
  // private profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
    
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  constructor(private formBuilder:FormBuilder = new FormBuilder()) { 

  }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.profileForm.value)
  }

  updatedProfile(){
    this.profileForm.patchValue({
      firstName:"functionUpdated",
      address: {
        street:"functionUpdated"
      }
    })
  },

  get aliase(){
    return this.profileForm.get('aliase') as FormArray
  }

  test(){
    this.updatedProfile()
  }
}