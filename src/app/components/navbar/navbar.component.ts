import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/api/services/auth.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean = false;
  public isUser: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.authService.userId = user.uid;
      } else this.isUser = false;
    });
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  public logOut() {
    this.authService.logOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }
}
