import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.services';


@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor(private angFireStore: AngularFirestore, private authService: AuthService){}
    addNewUser(name,address,id){
      return  this.angFireStore.doc('users/'+ id).set({
        name,
        address,
        })
    }

    getUserData() {
    return this.angFireStore.doc('users/'+this.authService.userId).valueChanges();
    }
}