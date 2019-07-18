import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: Observable<firebase.User>;
  userId: string = "";
  constructor(private angFireAuth: AngularFireAuth) {
    this.user = angFireAuth.user;
  }

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
    return this.angFireAuth.auth.signOut();
  }
}
