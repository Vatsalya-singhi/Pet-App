import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient,public afd:AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getAll(){
    
  }

}
