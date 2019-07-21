import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { GoodModel } from "../models/goods.interface";
import { AuthService } from "./auth.services";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(
    private angFireStore: AngularFirestore,
    private authService: AuthService
  ) {}

  addToCart(data: GoodModel) {
    return this.angFireStore
      .collection(`users/${this.authService.userId}/cart`)
      .add(data);
  }

  getCart() {
    return this.angFireStore
      .collection(`users/${this.authService.userId}/cart`)
      .snapshotChanges();
  }

  deleteCart(id) {
    return this.angFireStore
      .doc(`users/${this.authService.userId}/cart/${id}`)
      .delete();
  }

  saveCart(id, amount) {
    return this.angFireStore
      .doc(`users/${this.authService.userId}/cart/${id}`)
      .update({amount});
  }
}
