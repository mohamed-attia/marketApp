import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: "root"
})
export class GoodService {
  constructor(
    private angFireStore: AngularFirestore,
    private angFirStorage: AngularFireStorage
  ) {}

  addNewGood(name: string, price: number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.angFirStorage.ref("goods/" + image.name);
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.angFireStore
            .collection("goods")
            .add({ name, price, photoUrl })
            .then(() => resolve("added new good"));
        });
      });
    });
  }
}
