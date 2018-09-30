import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ModalPage } from '../modal/modal';
import { Pet } from '../../models/pet/pet.interface';
import { DetailPage }  from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  range:number=20;
  type:any = "all" ;
  age:any = 0;
  keeperVal:boolean = true;

  petobj:Pet;  //obj of Pet interface

  petListRef$: FirebaseListObservable<Pet[]>;    //Observable obj of pet instance

  constructor(public navCtrl: NavController,private modal : ModalController,private database:AngularFireDatabase) {
  
    this.petListRef$ = this.database.list('pet-db');
  }

  ionViewDidLoad() {
    // Crating Demo database 'pet-db' and inserting object
    /*this.petListRef$.push({
      petid: '1',
      petname: 'mango',
      pettype: 'dog',
      petage: '10',
      availablefortemporarykeeping: true,
      city: 'Chennai',
      ngoname: 'NGO_1',
      ngoid: '1010',
      petimg: 'img1'
    });
    */
   this.petListRef$.subscribe((data)=>
   {
     console.log(data);
   })
  }

  openFilters() {
    console.log('crap');
    const mydata ={
      'name' : 'Henry',
      'occupation' : 'Developer',
      'range' : this.range,
      'type' : this.type,
      'age' : this.age,
      'keeperVal' : this.keeperVal
    };
    const modal = this.modal.create(ModalPage,mydata);

    modal.present();
    modal.onDidDismiss((data) =>{
    if(!data){
      this.range = 20;
      this.type = "all";
      this.age = "0";
      this.keeperVal = true;
    }
    else{    
      console.log(data); 
      this.range = data.range;
      this.type = data.type;
      this.age = data.age;
      this.keeperVal = data.keeperVal;
      //call display all with above params
    }
  }
  );
}

details(item:any){
  //console.log("click registered");
  const param = {
    'obj' : item 
  }
  this.navCtrl.push(DetailPage,param);
}

}
