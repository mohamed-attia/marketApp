import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private fs: AngularFirestore) {}

  getAllGoods(){
      return this.fs.collection('goods').snapshotChanges();
  }
}
