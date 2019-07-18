import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/api/services/auth.services";
import { UserService } from "src/app/api/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public errorMessage: string = "";
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
  public signUp(form: NgForm) {
    this.authService
      .signUp(form.value.email, form.value.password)
      .then(data => {
        this.errorMessage = "";
        this.userService
          .addNewUser(form.value.name, form.value.address, data.user.uid)
          .then(() => {
            this.router.navigate(["/"]);
          });
        console.log("data", data);
      })
      .catch(err => {
        this.errorMessage = err.message;
        console.log(err);
      });
  }
}
