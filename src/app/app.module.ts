import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartComponent } from "./components/cart/cart.component";
import { GoodComponent } from "./components/good/good.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    GoodComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC3nKrnmv4PaNkGQ7rNcl1ZgpZejkQvhuE",
      authDomain: "marketapp-bd346.firebaseapp.com",
      databaseURL: "https://marketapp-bd346.firebaseio.com",
      projectId: "marketapp-bd346",
      storageBucket: "",
      messagingSenderId: "686360715672",
      appId: "1:686360715672:web:52f79c8f692d6890"
    }),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {}
