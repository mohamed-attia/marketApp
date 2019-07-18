import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor(private angFireStore: AngularFirestore){}
    addNewUser(name,address,id){
      return  this.angFireStore.doc('users/'+ id).set({
        name,
        address,
        })
    }
}