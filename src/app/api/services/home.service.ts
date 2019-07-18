import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private angFireStore: AngularFirestore) {}

  getAllGoods(){
      return this.angFireStore.collection('goods').snapshotChanges();
  }
}
