import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private angFireAuth: AngularFireAuth) {}

  signUp(email, password) {
    return this.angFireAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
  logIn(email, password) {
    return this.angFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    this.angFireAuth.auth.signOut();
  }
}
