import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { CartComponent } from "./components/cart/cart.component";
import { GoodComponent } from "./components/good/good.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

const routes: Routes = [
  { path: "", component: HomeComponent,pathMatch: 'full',data:{index:0} },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent,data:{index:1} },
  { path: "admin", component: GoodComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
