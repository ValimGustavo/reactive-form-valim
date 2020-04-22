import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//permite a geracao de formularios reativos (ReactiveFormsModule)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, NameEditorComponent, ProfileEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
