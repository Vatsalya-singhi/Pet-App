import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  name :any;    //user name and profession
  range :any;
  type:any;
  age:any;
  keeperVal:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private view : ViewController) {
  }

  ionViewWillLoad(){
    this.name= this.navParams.get('name');
    this.range = this.navParams.get('range');    //distance   type number
    this.type = this.navParams.get('type');         // pettype   type string
    this.age = this.navParams.get('age');         // type string
    this.keeperVal = this.navParams.get('keeperVal');    // if available for temporary keeping  type boolean
    console.log(this.name , this.range, this.type,this.age , this.keeperVal );
  }

  onsubmit(){
    console.log('Modal Submit works');
    const userpreference={
      range : this.range,
      type : this.type,
      age : this.age,
      keeperVal : this.keeperVal
  };
    this.view.dismiss(userpreference);
  }
  
  onback(){
    console.log("back working");
    const userpreference={
      range : 20,
      type : "all",
      age : "0",
      keeperVal : true
    };

    this.view.dismiss(userpreference);
  }

}
