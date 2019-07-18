import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/api/services/auth.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  public LogIn(form: NgForm) {
    this.authService.logIn(form.value.email, form.value.password).then(data => {
      if (data) {
        console.log("data login", data);
        this.router.navigate(["/"]);
      }
    });
  }
}
