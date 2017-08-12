import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:String="";
  constructor(public navCtrl: NavController) {
    this.user = " Hi Kiran";    
  }

  updateMyValue(){
    this.user = "Hi Kiran u there...!";
  }
}
