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
    placeholderText: 'Título'
  }

  public contentOptions: Object = {
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'insertLink','|', 'paragraphFormat', 'quote', 'clearFormatting', 'formatOL', 'formatUL', 'outdent', 'indent','|', 'undo', 'redo'],
    placeholderText: 'Respire e deixe fluir...'
  }

  constructor(public navCtrl: NavController) {

  }
}


