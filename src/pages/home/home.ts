import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public titleOptions: Object = {
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'insertLink','|', 'paragraphFormat', 'quote', 'clearFormatting', '|', 'undo', 'redo'],
    charCounterCount: false,
    placeholderText: 'Título',
    // Change save interval (time in miliseconds).
    saveInterval: 2500,
    // Set the save param.
    saveParam: 'content',
    // Set the save URL.
    saveURL: 'https://us-central1-app-lve.cloudfunctions.net/saveText',
    // HTTP request type.
    saveMethod: 'POST',
    // Additional save params.
    saveParams: {id: 'a1',type: 'title'}
  }

  public contentOptions: Object = {
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'insertLink','|', 'paragraphFormat', 'quote', 'clearFormatting', 'formatOL', 'formatUL', 'outdent', 'indent','|', 'undo', 'redo'],
    placeholderText: 'Respire e deixe fluir...',
    // Change save interval (time in miliseconds).
    saveInterval: 2500,
    // Set the save param.
    saveParam: 'content',
    // Set the save URL.
    saveURL: 'https://us-central1-app-lve.cloudfunctions.net/saveText',
    // HTTP request type.
    saveMethod: 'POST',
    // Additional save params.
    saveParams: {id: 'a1',type: 'content' }
  }

  constructor(public navCtrl: NavController) {

  }
}


