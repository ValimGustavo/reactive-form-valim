import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  private name = new FormControl('')

  constructor() { }

  ngOnInit() {
  }


//os valores de propriedades sao somente leitura, para fazer mudanças sem ação direta do usuario no input, é necessario usar o método setValue
  updateName(){
    this.name.setValue('true')
  }

}